import router from "next/router";
import Image from "next/image";

// utils
import { useQuery } from "@tanstack/react-query";
import {
  generateColumn,
  generateDateColumn,
  generateStatusColumn,
  generateActionColumn,
  CurrencyCell,
} from "@/components/table-cell-renderers";
import { useColumnFilters } from "@/hooks/useColumnFilters";

// ui
import * as Text from "@repo/ui/components/ui/text";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { DataTable } from "@repo/ui/components/ui/data-table";

// components
import { Layout } from "@/components/layout";

// types
import { Invoice } from "@repo/types";

// constants
import { INVOICE_STATUSES } from "@/constants";
import { useMemo } from "react";

const columns = [
  generateDateColumn<Invoice>("invoice_date", "Invoice Date"),
  generateColumn<Invoice>({
    key: "due_date",
    header: "Due Date",
    cell: (value, row) => {
      const dueDate = new Date(value);
      const isPastDue: boolean = row.over_due;

      return (
        <span className={isPastDue ? "flex gap-2 items-center" : ""}>
          <span className={`${isPastDue ? "text-red-500" : ""}`}>
            {dueDate.toLocaleDateString()}
          </span>
          {isPastDue && (
            <Image alt="!" src="/alert.svg" width={15} height={15} />
          )}
        </span>
      );
    },
  }),
  generateColumn<Invoice>({
    key: "invoice_number",
    header: "Invoice Number",
  }),
  generateColumn<Invoice>({
    key: "total",
    header: "Invoice Total",
    cell: (value) => <CurrencyCell value={value} />,
  }),
  generateColumn<Invoice>({
    key: "paid",
    header: "Paid Amount",
    cell: (value) => <CurrencyCell value={value} />,
  }),
  generateStatusColumn<Invoice>("status", "Status", INVOICE_STATUSES),
  generateActionColumn<Invoice>("", "View Invoice", (row) =>
    router.push(`/invoices/${row.id}`),
  ),
];

export default function Invoices() {
  const { data: invoices, isLoading } = useQuery<Invoice[]>({
    queryKey: ["invoices"],
    queryFn: () =>
      fetch("https://api.example.com/invoices").then((res) => res.json()),
  });

  const { columnFilters, handleFilterChange } = useColumnFilters();

  const filterSelect = useMemo(() => {
    return (
      <div className="flex gap-3 items-center justify-start md:justify-end w-full">
        <Text.Body>Status</Text.Body>
        <form onChange={handleFilterChange} className="w-full">
          <Select defaultValue="default">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key={"all"} value={"default"}>
                All Statuses
              </SelectItem>
              {Object.keys(INVOICE_STATUSES).map((status) => (
                <SelectItem key={status} value={status}>
                  {INVOICE_STATUSES[status].text}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </form>
      </div>
    );
  }, [handleFilterChange]);

  return (
    <Layout>
      <div className="flex flex-col gap-4 md:gap-9">
        <div className="flex gap-4 justify-between md:items-center">
          <Text.Heading size="xl" className="col-span-2">
            Invoices
          </Text.Heading>
          <div className="flex gap-3 items-center justify-end">
            <div className="hidden md:block">{filterSelect}</div>
          </div>
        </div>
        <div className="flex justify-start md:hidden">{filterSelect}</div>

        {isLoading ? (
          <Text.Body>Loading invoices...</Text.Body>
        ) : invoices?.length ? (
          <DataTable
            columns={columns}
            columnFilters={columnFilters}
            data={invoices}
          />
        ) : (
          <Text.Body>No invoices found</Text.Body>
        )}
      </div>
    </Layout>
  );
}
