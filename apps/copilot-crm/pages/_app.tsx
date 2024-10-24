import "@repo/ui/globals.css";
// import "@repo/copilot-crm/overrides.css";
// import "@/styles/collapsible.css";
import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // Add this to the body so that it works on portaled components
  useEffect(() => {
    document.body.classList.add(fontSans.variable);
    return () => {
      document.body.classList.remove(fontSans.variable);
    };
  }, []);

  useEffect(() => {
    // if (process.env.NODE_ENV === "development") {
    import("@repo/mocks/browser").then(({ worker }) => {
      worker.start();
    });
    // }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div id="__app_root">
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
