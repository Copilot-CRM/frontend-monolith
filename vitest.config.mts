import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

const isCI = process.env.CI === "true";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.ts"], // maybe move the test setup to another config package?
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    coverage: {
      provider: "v8", // or 'istanbul'
      reporter: isCI ? ["text"] : ["text", "json", "html"],
      reportsDirectory: "./coverage-report",
      include: ["apps/**/*.{ts,tsx}", "packages/ui/**/*.{ts,tsx}"],
      exclude: [
        "**/node_modules/**",
        "**/test/**",
        "**/types/**",
        "**/mocks/**",
        "**/.next/**",
        "**/coverage/**",
        "**/eslint-config/**",
        "**/.eslintrc.js/**",
        "**/next.config.mjs/**",
        "**/sentry.*",
        "**/.storybook/**",
        "**/storybook-static/**",
        "**/*.stories.*",
      ],
      all: true,
      enabled: true,
      thresholds: {
        lines: 2.65,
        functions: 9.09,
        branches: 39.41,
        statements: 2.65,
      },
    },
  },
});
