import { useCallback, useMemo } from "react";
import router from "next/router";
import { ColumnDef } from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";

// utils
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
import { Button } from "@repo/ui/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { DataTable } from "@repo/ui/components/ui/data-table";
import { Body } from "@repo/ui/components/ui/text";

// components
import { Layout } from "@/components/layout";
import { RequestEstimateDialog } from "../../components/request-estimate";

// types
import { Estimate } from "@repo/types";

// constants
import { ESTIMATE_STATUSES, STATUS_VS_CHIP_INTENT } from "@/constants";

export const columns: ColumnDef<Estimate>[] = [
  generateColumn<Estimate>({
    key: "id",
    header: "Estimates",
  }),
  generateDateColumn<Estimate>("requestDate", "Request Date"),
  generateDateColumn<Estimate>("visitDate", "Visit Date"),
  generateColumn<Estimate>({
    key: "total",
    header: "Total",
    cell: (value) => <CurrencyCell value={value} />,
  }),
  generateStatusColumn<Estimate>("status", "Status", ESTIMATE_STATUSES),
  generateActionColumn<Estimate>("", "View Estimate", (row) =>
    router.push(`/estimates/${row.id}`),
  ),
];

export default function Estimates() {
  const { data: estimates, isLoading } = useQuery<Estimate[]>({
    queryKey: ["estimates"],
    queryFn: () =>
      fetch("https://api.example.com/estimates").then((res) => res.json()),
  });

  const handleSubmit = useCallback((args: any) => {
    console.log("submit", args);
  }, []);

  const { columnFilters, handleFilterChange } = useColumnFilters();

  const filterSelect = useMemo(() => {
    return (
      <div className="flex gap-3 items-center justify-start md:justify-end w-full">
        <Body>Status</Body>
        <form onChange={handleFilterChange} className="w-full">
          <Select defaultValue="default">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key={"all"} value={"default"}>
                All Statuses
              </SelectItem>
              {Object.keys(STATUS_VS_CHIP_INTENT).map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
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
            Estimates
          </Text.Heading>

          <div className="flex gap-3 items-center justify-end">
            <div className="hidden md:block">{filterSelect}</div>

            <RequestEstimateDialog
              userId="00124"
              onSubmit={handleSubmit}
              trigger={<Button intent="action">+ Request an Estimate</Button>}
            />
          </div>
        </div>
        <div className="flex justify-start md:hidden">{filterSelect}</div>

        {isLoading ? (
          <Text.Body>Loading estimates...</Text.Body>
        ) : estimates?.length ? (
          <DataTable
            columns={columns}
            data={estimates}
            columnFilters={columnFilters}
          />
        ) : (
          <Text.Body>No estimates found</Text.Body>
        )}
      </div>
    </Layout>
  );
}
