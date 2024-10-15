import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// utils
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// hooks
import { useToast } from "@repo/ui/hooks/use-toast";

// icons
import { ChevronsLeft } from "lucide-react";

// components
import { Layout } from "@/components/layout";
import { PaymentDialog } from "../../components/payment-dialog";
import { AttachedImages } from "../../components/attached-images";

// ui
import { Button } from "@repo/ui/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";
import { Body, Heading } from "@repo/ui/components/ui/text";
import { StatusChip } from "@repo/ui/components/ui/status-chip";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@repo/ui/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";

// constants
import { STATUS_VS_CHIP_INTENT } from "@/constants";

// types
import { Invoice } from "@repo/types";
import { Card } from "@repo/ui/components/ui/card";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { formatUSD } from "@/utils/formatCurrency";

export default function InvoicePage() {
  const router = useRouter();
  const { invoiceId } = router.query;
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: invoice, isLoading } = useQuery<Invoice>({
    queryKey: ["invoice", invoiceId],
    queryFn: async () => {
      const response = await fetch(
        `https://api.example.com/invoice/${invoiceId}`,
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    enabled: !!invoiceId,
  });

  const payInvoiceMutation = useMutation({
    mutationFn: async (amount: number) => {
      const response = await fetch(
        `https://api.example.com/invoice/${invoiceId}/payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        },
      );
      if (!response.ok) {
        throw new Error("Payment failed");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoice", invoiceId] });
      toast({
        title: "Payment Successful",
        description: "Your payment has been processed successfully.",
      });
      setIsPaymentDialogOpen(false);
    },
    onError: (error) => {
      console.error("Error processing payment:", error);
      toast({
        title: "Payment Failed",
        description:
          "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handlePayInvoice = useCallback(
    (amount: number) => {
      payInvoiceMutation.mutate(amount);
    },
    [payInvoiceMutation],
  );

  const handleClosePaymentDialog = useCallback(() => {
    setIsPaymentDialogOpen(false);
  }, []);

  const formatDate = useCallback((date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
  }, []);

  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isLoading) {
    return (
      <Layout>
        <div>Loading invoice...</div>
      </Layout>
    );
  }

  if (!invoice) {
    return (
      <Layout>
        <div>Invoice not found</div>
      </Layout>
    );
  }

  const {
    id,
    status,
    companyName,
    companyAddress,
    companyPhone,
    companyEmail,
    clientName,
    clientAddress,
    notes,
    invoice_number,
    items,
    subtotal,
    taxRate,
    taxAmount,
    total,
    paid,
    assets,
    paid_date,
    issued_date,
    due_date,
  } = invoice;

  const dueAmount = total - paid || 0;

  const formattedDueDate = formatDate(due_date);
  const formattedIssuedDate = formatDate(issued_date);
  const formattedDatePaid = formatDate(paid_date);

  const calculateTotal = () => {
    switch (status) {
      case "Paid":
        return "$0.00";
      case "Partial":
        return formatUSD(dueAmount);
      case "Unpaid":
      default:
        return formatUSD(total);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3 md:justify-between">
          <Link href="/invoices" className="flex gap-2 items-center">
            <ChevronsLeft className="text-blue-600" size={12} />
            <Body size="sm" className="text-blue-600">
              Back to All Invoices
            </Body>
          </Link>
          <Dialog
            open={isPaymentDialogOpen}
            onOpenChange={setIsPaymentDialogOpen}
          >
            <div className="flex flex-col md:flex-row gap-3">
              <Button variant="outline">Print</Button>

              {status !== "Paid" ? (
                <DialogTrigger asChild>
                  <Button
                    variant="fill"
                    intent="action"
                    onClick={() => setIsPaymentDialogOpen(true)}
                  >
                    Pay Invoice
                  </Button>
                </DialogTrigger>
              ) : null}

              <DialogContent className="font-sans max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Pay Invoice</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  <PaymentDialog
                    onClose={handleClosePaymentDialog}
                    onPayment={async (amount: number) =>
                      await handlePayInvoice(amount)
                    }
                    invoice={invoice}
                  />
                </DialogDescription>
              </DialogContent>
            </div>
          </Dialog>
        </div>

        {status === "Unpaid" ? (
          <Alert variant="destructive">
            <AlertTitle>This invoice is past Due</AlertTitle>
            <AlertDescription>{`The $${dueAmount} balance on this invoice has not been paid and is now late. Please pay as soon as possible to avoid late charges.`}</AlertDescription>
          </Alert>
        ) : null}
        {status === "Partial" ? (
          <Alert variant="warn">
            <AlertTitle>This invoice is only partially paid</AlertTitle>
            <AlertDescription>{`A partial amount of $${paid} has been paid towards this invoice, while $${dueAmount} is still due. Please submit this payment before it's due date of ${formattedDueDate}.`}</AlertDescription>
          </Alert>
        ) : null}

        <Card>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <Heading size="lg">Invoice</Heading>
                  <StatusChip intent={STATUS_VS_CHIP_INTENT[status]}>
                    {status}
                  </StatusChip>
                </div>

                <div className="flex flex-col">
                  <Heading size="sm">{companyName}</Heading>
                  <Body size="sm">{companyAddress}</Body>
                  <Body size="sm">{companyPhone}</Body>
                  <Body size="sm">{companyEmail}</Body>
                </div>
              </div>
              <div>
                <Image
                  alt="Logo"
                  src="/logo.png"
                  width={208}
                  height={90}
                  className="w-full hidden md:block"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full items-start">
              <div className="flex flex-col">
                <Heading size="sm">Bill To</Heading>
                <Body size="sm">{clientName}</Body>
                <Body size="sm">{clientAddress}</Body>
              </div>
              {notes ? (
                <div className="md:col-start-2">
                  <Heading size="sm">Notes</Heading>
                  <Body size="sm">{notes}</Body>
                </div>
              ) : null}

              <div className="grid-cols-2 md:col-start-4 items-center self-end ">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-bold p-2">
                        Invoice Number
                      </TableCell>
                      <TableCell className="p-2 text-right">
                        {invoice_number}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="p-2 font-bold">
                        Date Issued
                      </TableCell>
                      <TableCell className="p-2 text-right">
                        {formattedIssuedDate}
                      </TableCell>
                    </TableRow>
                    <TableRow
                      className={
                        due_date > issued_date && status !== "Paid"
                          ? `text-destructive`
                          : ""
                      }
                    >
                      <TableCell className="p-2 font-bold">Date Due</TableCell>
                      <TableCell className="p-2 text-right">
                        {formattedDueDate}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-t border-black/20">
                  <TableHead
                    colSpan={isMobile ? 4 : 1}
                    className="w-full md:w-2/3"
                  >
                    Description
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Qty./Hrs.
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-right">
                    Cost/Rate
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-right">
                    Total
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items?.map((item, index) => (
                  <TableRow key={index} className={`border-t border-solid`}>
                    <TableCell
                      colSpan={isMobile ? 4 : 1}
                      className="font-bold w-full md:w-1/5"
                    >
                      <Heading size="sm">{item.description}</Heading>
                      <Body size="sm">{item.details}</Body>
                      <div className="grid grid-cols-4 w-full mt-2 md:hidden">
                        <Body className="col-start-3">Quantity</Body>
                        <Body className="col-start-4 text-right">
                          {item.rate}
                        </Body>
                        <Body className="col-start-3">Rate</Body>
                        <Body className="col-start-4 text-right">
                          {formatUSD(item.total)}
                        </Body>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {item.quantity.toFixed(2)}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-right">
                      {formatUSD(item.rate)}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-right">
                      {formatUSD(item.total)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              <TableFooter className="bg-inherit">
                <TableRow className="border-spacing-4">
                  <TableCell
                    colSpan={3}
                    className="text-right font-bold p-05 pr-4 pt-4"
                  >
                    SubTotal
                  </TableCell>
                  <TableCell className="text-right p-05 pr-4 pt-4">
                    ${subtotal.toFixed(2)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    colSpan={3}
                    className={`text-right font-bold p-05 pr-4 ${status === "Unpaid" ? "pb-4" : ""}`}
                  >
                    Tax ({(taxRate * 100).toFixed(2)}%)
                  </TableCell>
                  <TableCell
                    className={`text-right p-05 pr-4 ${status === "Unpaid" ? "pb-4" : ""}`}
                  >
                    ${taxAmount.toFixed(2)}
                  </TableCell>
                </TableRow>

                {status === "Partial" || status === "Paid" ? (
                  <TableRow className="">
                    <TableCell
                      colSpan={3}
                      className="text-right font-bold p-05 pr-4"
                    >
                      <div className="flex flex-col">
                        <span>Payment on {formattedDatePaid}</span>
                        <span className=" text-gray-500 font-normal text-[11px] pb-4">
                          Tip Not Included
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right p-05 pr-4 pb-4 align-top">
                      -${paid.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ) : null}

                <TableRow className="bg-gray-100">
                  <TableCell colSpan={3} className="text-right font-bold">
                    TOTAL DUE
                  </TableCell>
                  <TableCell className={`text-right `}>
                    {calculateTotal()}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>

            <div className="mt-8">
              <Heading size="sm">Thank You For Your Business!</Heading>
              <Body size="sm">
                If you have any questions about this invoice, don't hesitate to
                reach out using the contact information above.
              </Body>
            </div>
          </div>
        </Card>

        {assets ? (
          <div className="rounded-md border bg-white p-6 gap-3 flex flex-col">
            <div className="flex flex-col">
              <Heading size="lg">Attached Images</Heading>
              <Body>Click to enlarge</Body>
            </div>

            <AttachedImages assets={assets} />
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
