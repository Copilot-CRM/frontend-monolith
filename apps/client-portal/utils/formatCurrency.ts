export function formatUSD(value: number): string {
  if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
    throw new TypeError("Input must be a finite number");
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
