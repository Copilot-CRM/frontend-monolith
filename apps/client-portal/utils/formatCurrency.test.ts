import { describe, expect, it } from "vitest";
import { formatUSD } from "./formatCurrency";

describe("formatUSD", () => {
  it("formats positive numbers correctly", () => {
    expect(formatUSD(1234.56)).toBe("$1,234.56");
    expect(formatUSD(0.99)).toBe("$0.99");
    expect(formatUSD(1000000)).toBe("$1,000,000.00");
  });

  it("formats negative numbers correctly", () => {
    expect(formatUSD(-1234.56)).toBe("-$1,234.56");
    expect(formatUSD(-0.99)).toBe("-$0.99");
  });

  it("formats zero correctly", () => {
    expect(formatUSD(0)).toBe("$0.00");
  });

  it("rounds to two decimal places", () => {
    expect(formatUSD(1.234)).toBe("$1.23");
    expect(formatUSD(1.235)).toBe("$1.24");
  });

  it("handles very large numbers", () => {
    expect(formatUSD(1e15)).toBe("$1,000,000,000,000,000.00");
  });

  it("handles very small numbers", () => {
    expect(formatUSD(1e-10)).toBe("$0.00");
  });

  it("throws an error for undefined value", () => {
    expect(() => formatUSD(undefined as any)).toThrow(TypeError);
  });

  it("throws an error for non-number values", () => {
    expect(() => formatUSD("123" as any)).toThrow(TypeError);
    expect(() => formatUSD(null as any)).toThrow(TypeError);
    expect(() => formatUSD({} as any)).toThrow(TypeError);
  });

  it("throws an error for NaN", () => {
    expect(() => formatUSD(NaN)).toThrow(TypeError);
  });

  it("throws an error for Infinity", () => {
    expect(() => formatUSD(Infinity)).toThrow(TypeError);
    expect(() => formatUSD(-Infinity)).toThrow(TypeError);
  });
});
