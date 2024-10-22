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
        "**/next-env.d.ts",
      ],
      all: true,
      enabled: true,
      thresholds: {
        lines: 2.65,
        functions: 6.97,
        branches: 38.51,
        statements: 2.65,
      },
    },
  },
});
