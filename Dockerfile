ARG NODE_IMAGE=node:20-alpine

################################################################################
# build
################################################################################
# Base image for building dependencies and building the app
FROM ${NODE_IMAGE} AS builder

# Install pnpm and turbo globally
RUN npm install -g pnpm turbo

# Set working directory
WORKDIR /workspace

# Copy lockfile and workspace config for dependency installation
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml turbo.json .npmrc ./
COPY apps/client-portal/package.json apps/client-portal/package.json
COPY apps/copilot-crm/package.json apps/copilot-crm/package.json
COPY packages/mocks/package.json packages/mocks/package.json
COPY packages/types/package.json packages/types/package.json
COPY packages/typescript-config packages/typescript-config
COPY packages/ui/package.json packages/ui/package.json

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Copy apps
COPY apps apps
COPY packages/mocks packages/mocks
COPY packages/types packages/types
COPY packages/ui packages/ui

# Build apps
RUN pnpm turbo run build

################################################################################
# base
################################################################################
FROM ${NODE_IMAGE} AS base

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV PATH=/workspace/node_modules/.bin:$PATH

# Set working directory
WORKDIR /workspace

# Copy the relevant app files from the builder stage
COPY --from=builder /workspace/node_modules node_modules

################################################################################
# client-portal
################################################################################
FROM base AS client-portal

ENV PATH=/workspace/apps/client-portal/node_modules/.bin:$PATH

WORKDIR /workspace/apps/client-portal

COPY --from=builder /workspace/apps/client-portal/node_modules node_modules
COPY --from=builder /workspace/apps/client-portal/package.json package.json
COPY --from=builder /workspace/apps/client-portal/.next .next
COPY --from=builder /workspace/apps/client-portal/.turbo .turbo

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]

################################################################################
# copilot-crm
################################################################################
FROM base AS copilot-crm

ENV PATH=/workspace/apps/copilot-crm/node_modules/.bin:$PATH

WORKDIR /workspace/apps/copilot-crm

COPY --from=builder /workspace/apps/copilot-crm/node_modules node_modules
COPY --from=builder /workspace/apps/copilot-crm/package.json package.json
COPY --from=builder /workspace/apps/copilot-crm/.next .next
COPY --from=builder /workspace/apps/copilot-crm/.turbo .turbo

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
