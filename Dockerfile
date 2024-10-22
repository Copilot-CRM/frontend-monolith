# Base image for building dependencies and building the app
FROM node:18-alpine AS builder

# Install pnpm and turbo globally
RUN npm install -g pnpm turbo

# Set working directory
WORKDIR /app

# Copy lockfile and workspace config for dependency installation
COPY ../../pnpm-lock.yaml ../../package.json ../../pnpm-workspace.yaml ./

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Copy the whole repo
COPY ../../ ./

# Build the specific app (using an argument to specify the app)
ARG APP_NAME
RUN turbo run build --filter="@repo/${APP_NAME}"

# Production image
FROM node:18-alpine AS runner

# Install pnpm globally in the runner stage
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

ARG APP_NAME

# Copy the relevant app files from the builder stage
COPY --from=builder /app/apps/${APP_NAME}/.next .next
COPY --from=builder /app/apps/${APP_NAME}/package.json .

# Copy only the production dependencies
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/packages ./packages

# Reinstall production dependencies to ensure all needed modules are there
RUN pnpm install --prod --filter="@repo/${APP_NAME}"

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
# Add node_modules/.bin to PATH to ensure commands like "next" can be found
ENV PATH=/app/node_modules/.bin:$PATH

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
