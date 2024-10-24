# Beacon Rock Development Guide

## Application Quick Start Guide:

### Prerequisites

- Have `just` installed
  - `brew install just`
- Have docker installed
  - [docker-desktop](https://www.docker.com/products/docker-desktop/)

### Running the applications

In order to build and run all of the applications, you just need to run the following command:

```
just up
```

This should handle installing the latest, building the application, then running the application.

## Install Dependencies

To install the necessary dependencies, run:

```sh
pnpm install
```

## Starting Development Servers

Start the dev server for all apps, run:

```bash
pnpm dev
```

To start a specific app use the alias helper

**Copilot-CRM** app:

```bash
pnpm dev:crm
```

**Client-Portal** app:

```bash
pnpm dev:portal
```

## Code Formatting with Prettier

To manually format the entire codebase with Prettier:

```bash
pnpm format
```

## Linting

To manually run ESLint across the codebase:

```bash
pnpm lint
```

## Building All Apps

To build all applications and packages:

```sh
pnpm build
```

## Testing

Run tests for all packages and apps:

```sh
pnpm test
```

For additional details and testing guidelines, see the [Testing Documentation](./src/test/README.md)

## Filtering Commands in Turborepo

Turborepo allows you to filter which apps and packages the command should apply to. For example, to run the `build` command only on the `client-portal` app:

```sh
pnpm build --filter=@repo/client-portal
```

## Structure

This Monorepo includes the following apps and packages:

### Apps

- `@repo/copilot-crm`: a [Next.js](https://nextjs.org/) app
- `@repo/client-portal`: a [Next.js](https://nextjs.org/) app

### Packages

- `@repo/ui`: React component library powered by **shadcn/ui**
  [See Docs here on how to use and customize the ui package](./packages/ui/README.md).

- `@repo/eslint-config`: ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)

- `@repo/typescript-config`: `tsconfig.json` files used throughout the monorepo

- `@repo/types`: Shared types

- `@repo/mocks`: Mock API requests for testing and development using [MSW](https://mswjs.io/)

## Remote Caching with Turborepo

Turborepo supports [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching), allowing you to share cache artifacts across machines for faster builds, including CI/CD pipelines.

By default, Turborepo caches locally. To enable remote caching, you'll need a Vercel account. If you don't have one, [create an account](https://vercel.com/signup), then authenticate with Turborepo:

```sh
npx turbo login
```

To link your Turborepo to your remote cache, run:

```sh
npx turbo link
```

## Useful Resources

Learn more about Turborepo:

- [Running Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

Learn more about **shadcn/ui**:

- [Documentation](https://ui.shadcn.com/docs)

## Contributor's Guide

### 1. **Identify or Create a GitHub Issue**

Before starting any work, ensure that a GitHub issue exists outlining the task. If not, create one with relevant details, including acceptance criteria. Assign the issue to yourself for ownership.

### 2. **Create a Branch**

Use the following branch naming convention:

**Format:** `<issue-number>-<short-description>`

- **Issue Number**: Include the corresponding issue number.
- **Short Description**: Use a concise description in kebab-case.

Example: `43-setup-storybook`

Alternatively, use GitHub's sidebar feature to auto-generate a branch name from the issue.

### 3. **Commit Guidelines**

Use descriptive commit messages, ideally following [Conventional Commits](https://www.conventionalcommits.org/).

#### Best Practices

- **Be Concise**: Summarize the work in a few words.
- **Use Imperative Mood**: Example: "adds feature" instead of "added feature."
- **Commit Regularly**: Make small, logical commits.

### 4. **Open a Pull Request (PR)**

After completing your work, open a PR. Be sure to link the associated issue by referencing its number (e.g., `Closes #123`).

_TODO: Add a PR template, possibly with screenshots or a breakdown of changes._

### 5. **Merge the PR**

Once approved and all checks have passed, use "Merge Pull Request", all commits will be added to the base branch via a merge commit.

### 6. **Delete the Branch**

Delete the branch post-merge to keep the repository clean.

## Data Loading

We use **TanStack Query** for fetching API data. The query client is configured in the entry file and accessible via the `useQuery` hook.

## Mocking API Requests with MSW

To add a new handler for mocking API requests, modify the `@repo/mocks/handlers.ts` file. The mock server will automatically reload. It starts on `pnpm dev`.

## Bundle Analysis

Run The bundle analyzer To analyze all apps:

```sh
pnpm analyze
```

This will open multiple bundle analyzer windows in your browser.

### Run Bundlewatch

To monitor bundle size changes over time, use `bundlewatch`. Run a build first, then:

```sh
pnpm bundlewatch
```

Bundlewatch tracks bundle sizes in the CI/CD pipeline, and you can set thresholds to catch unexpected changes.
