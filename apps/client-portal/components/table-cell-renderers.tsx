// types
import { ColumnDef } from "@tanstack/react-table";
import { Intents } from "@repo/types";

// ui
import { HeaderCell } from "@/components/header-cell";
import * as Text from "@repo/ui/components/ui/text";
import { StatusChip } from "@repo/ui/components/ui/status-chip";
import { Button } from "@repo/ui/components/ui/button";

// utils
import { formatDate } from "../utils/formatDate";
import _get from "lodash/get";
import { formatUSD } from "@/utils/formatCurrency";

type ColumnOptions<T> = {
  key: keyof T | string;
  header: string;
  accessorFn?: (row: T) => any;
  cell?: (value: any, row: T) => React.ReactNode;
  sortable?: boolean;
};

export function generateColumn<T>(options: ColumnOptions<T>): ColumnDef<T> {
  return {
    accessorKey: options.key,
    accessorFn: options.accessorFn,
    header: ({ column }) => (
      <HeaderCell<T> column={column} sortable={options.sortable ?? true}>
        {options.header}
      </HeaderCell>
    ),
    cell: options.cell
      ? ({ row }) =>
          options.cell!(row.getValue(options.key as string), row.original)
      : ({ row }) => {
          const value = _get(row.original, options.key as string);
          return <Text.Body size="md">{value}</Text.Body>;
        },
  };
}

export function generateDateColumn<T>(
  key: keyof T,
  header: string,
): ColumnDef<T> {
  return generateColumn<T>({
    key,
    header,
    cell: (value) => (
      <Text.Body size="md">
        {value ? formatDate(new Date(value)) : "-"}
      </Text.Body>
    ),
  });
}

export function generateStatusColumn<T>(
  key: keyof T,
  header: string,
  statusMap: Record<
    string,
    {
      text: string;
      intent: Intents;
    }
  >,
): ColumnDef<T> {
  return generateColumn<T>({
    key,
    header,
    cell: (value) => {
      const status = statusMap[value as string];
      return (
        <StatusChip intent={status?.intent ?? "neutral"}>
          {status?.text ?? "-"}
        </StatusChip>
      );
    },
  });
}

export function generateActionColumn<T>(
  header: string,
  buttonText: string,
  onClick: (row: T) => void,
): ColumnDef<T> {
  return generateColumn<T>({
    key: "action",
    header,
    sortable: false,
    cell: (_, row) => (
      <Button
        variant="fill"
        intent="action"
        size="sm"
        onClick={() => onClick(row)}
      >
        {buttonText}
      </Button>
    ),
  });
}

export function CurrencyCell<T>({ value }) {
  const formatted = value ? formatUSD(value) : "--";
  return <div className="text-right font-medium">{formatted}</div>;
}
