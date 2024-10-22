import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const isCI = process.env.CI === "true";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    tsconfigPaths(),
  ],
  resolve: {
    preserveSymlinks: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime"],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.ts"],
    coverage: {
      provider: "v8",
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
