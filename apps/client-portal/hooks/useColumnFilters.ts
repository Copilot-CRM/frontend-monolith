import { ColumnFiltersState } from "@tanstack/react-table";
import { ChangeEvent, useState, useCallback } from "react";

export function useColumnFilters() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const handleFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    const value = e.target.value;
    if (value === "default") {
      return setColumnFilters([]);
    }

    setColumnFilters([
      {
        id: "status",
        value,
      },
    ]);
  }, []);

  return { columnFilters, handleFilterChange };
}
