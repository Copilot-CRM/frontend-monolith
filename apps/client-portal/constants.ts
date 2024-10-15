// LEGZ TOTO - fix type import
import { Estimate, Intents, Invoice } from "@repo/types";

export const STATUS_VS_CHIP_INTENT: { [key in Estimate["status"]]: Intents } = {
  Approved: "success",
  "Ready for Review": "warn",
  "Changes Requested": "warn",
  Declined: "danger",
  "Request Submitted": "neutral",
};

export const INVOICE_STATUSES: Record<
  Invoice["status"],
  { text: string; intent: Intents }
> = {
  Partial: { text: "Partial", intent: "neutral" },
  Paid: { text: "Paid", intent: "success" },
  Unpaid: { text: "Unpaid", intent: "danger" },
};

export const ESTIMATE_STATUSES: Record<
  Estimate["status"],
  { text: string; intent: Intents }
> = {
  "Request Submitted": { text: "Request Submitted", intent: "neutral" },
  Declined: { text: "Declined", intent: "danger" },
  Approved: { text: "Approved", intent: "success" },
  "Changes Requested": { text: "Changes Requested", intent: "warn" },
  "Ready for Review": { text: "Ready for Review", intent: "warn" },
};

export const ARRIVAL_TIMES = [
  { id: "Anytime", label: "Anytime" },
  { id: "Morning", label: "Morning" },
  { id: "Afternoon", label: "Afternoon" },
  { id: "Evening", label: "Evening" },
];

export const SERVICE_TYPES = {
  "Service Type 1": "Service Type 1",
  "Service Type 2": "Service Type 2",
  "Service Type 3": "Service Type 3",
  "Service Type 4": "Service Type 4",
};

export const STATES_US = [
  { value: "AL", label: "AL" },
  { value: "AK", label: "AK" },
  { value: "AZ", label: "AZ" },
  { value: "AR", label: "AR" },
  { value: "CA", label: "CA" },
  { value: "CO", label: "CO" },
  { value: "CT", label: "CT" },
  { value: "DE", label: "DE" },
  { value: "FL", label: "FL" },
  { value: "GA", label: "GA" },
  { value: "HI", label: "HI" },
  { value: "ID", label: "ID" },
  { value: "IL", label: "IL" },
  { value: "IN", label: "IN" },
  { value: "IA", label: "IA" },
  { value: "KS", label: "KS" },
  { value: "KY", label: "KY" },
  { value: "LA", label: "LA" },
  { value: "ME", label: "ME" },
  { value: "MD", label: "MD" },
  { value: "MA", label: "MA" },
  { value: "MI", label: "MI" },
  { value: "MN", label: "MN" },
  { value: "MS", label: "MS" },
  { value: "MO", label: "MO" },
  { value: "MT", label: "MT" },
  { value: "NE", label: "NE" },
  { value: "NV", label: "NV" },
  { value: "NH", label: "NH" },
  { value: "NJ", label: "NJ" },
  { value: "NM", label: "NM" },
  { value: "NY", label: "NY" },
  { value: "NC", label: "NC" },
  { value: "ND", label: "ND" },
  { value: "OH", label: "OH" },
  { value: "OK", label: "OK" },
  { value: "OR", label: "OR" },
  { value: "PA", label: "PA" },
  { value: "RI", label: "RI" },
  { value: "SC", label: "SC" },
  { value: "SD", label: "SD" },
  { value: "TN", label: "TN" },
  { value: "TX", label: "TX" },
  { value: "UT", label: "UT" },
  { value: "VT", label: "VT" },
  { value: "VA", label: "VA" },
  { value: "WA", label: "WA" },
  { value: "WV", label: "WV" },
  { value: "WI", label: "WI" },
  { value: "WY", label: "WY" },
];
