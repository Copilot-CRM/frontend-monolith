import { http, HttpResponse } from "msw";
import { USERS } from "./user";
import { ESTIMATES_FIXTURE } from "./estimates.mock";
import { INVOICES_MOCKED_DATA } from "./invoices.mock";
import { PROPERTIES } from "./property";
import { PAYMENT_INFO } from "./payment-info";
import { MOCK_DOCUMENTS } from "./documents";
import { MOCK_ASSETS } from "./assets.mock";
import { BUSINESS_INFO } from './businessInfo';

export const handlers = [
  // get all users
  http.get("https://api.example.com/users", () => {
    return HttpResponse.json(USERS);
  }),
  // get user by id
  http.get("https://api.example.com/users/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(USERS.find((user) => user.id === id));
  }),
  // update user by id
  http.put("https://api.example.com/users/:id", async ({ params, request }) => {
    const { id } = params;
    const requestBody = await request.json();
    // spread the request body to the user object
    return HttpResponse.json(
      USERS.map((user) => (user.id === id ? { ...user, requestBody } : user)),
    );
  }),
  // get all estimates
  http.get("https://api.example.com/estimates", () => {
    return HttpResponse.json(ESTIMATES_FIXTURE);
  }),
  // find estimate by id
  http.get("https://api.example.com/estimate/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(ESTIMATES_FIXTURE.find((e) => e.id === id));
  }),
  // delete estimate by id
  http.delete("https://api.example.com/estimate/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(ESTIMATES_FIXTURE.filter((e) => e.id !== id));
  }),
  // get all invoices
  http.get("https://api.example.com/invoices", () => {
    return HttpResponse.json(INVOICES_MOCKED_DATA);
  }),
  // get invoice by id
  http.get("https://api.example.com/invoice/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(INVOICES_MOCKED_DATA.find((i) => i.id === id));
  }),
  // delete invoice by id
  http.delete("https://api.example.com/invoice/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(INVOICES_MOCKED_DATA.filter((i) => i.id !== id));
  }),
  // update invoice by id
  http.put(
    "https://api.example.com/invoice/:id",
    async ({ params, request }) => {
      const { id } = params;
      const requestBody = await request.json();
      // spread the request body to the invoice object
      return HttpResponse.json(
        INVOICES_MOCKED_DATA.map((invoice) =>
          invoice.id === id ? { ...invoice, requestBody } : invoice,
        ),
      );
    },
  ),
  // get payment by id
  http.get("https://api.example.com/payment/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(PAYMENT_INFO.find((p) => p.id === id));
  }),
  // add payment to invoice
  http.post(
    "https://api.example.com/invoice/:id/payment",
    async ({ params, request }) => {
      const { id } = params;
      const requestBody = await request.json();
      // spread the request body to the invoice object
      return HttpResponse.json(
        INVOICES_MOCKED_DATA.map((invoice) =>
          invoice.id === id ? { ...invoice, requestBody } : invoice,
        ),
      );
    },
  ),
  // get all properties
  http.get("https://api.example.com/properties", () => {
    return HttpResponse.json(PROPERTIES);
  }),
  // get property by id
  http.get("https://api.example.com/property/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(PROPERTIES.find((p) => p.id === id));
  }),

  // get all documents
  http.get("https://api.example.com/documents", () => {
    return HttpResponse.json(MOCK_DOCUMENTS);
  }),
  // get all assets
  http.get("https://api.example.com/assets", () => {
    return HttpResponse.json(MOCK_ASSETS);
  }),
  // get business info
  http.get("https://api.example.com/business", () => {
    return HttpResponse.json(BUSINESS_INFO);
  }),
];
