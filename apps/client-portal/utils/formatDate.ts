import { format } from "date-fns";

export function formatDate(date?: Date | string, placeholder = "--") {
  if (!date) return placeholder;

  const resolvedDate = typeof date === "string" ? new Date(date) : date;
  return format(resolvedDate, "MM/dd/yyyy");
}
