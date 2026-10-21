# GenomeHub

GenomeHub is a full-stack research workspace for genomic datasets, computational pipelines, collaborative projects, and analysis reports.

## Run locally in VS Code

### Requirements

- Node.js 22 or newer
- VS Code
- Google Chrome

### Windows setup

1. Extract this project and open the `genomehub` folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Run:

```powershell
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install
pnpm db:generate
pnpm dev
```

4. Wait until the terminal shows the local address.
5. Open Chrome and visit `http://localhost:3000`.

Stop the application with `Ctrl + C` in the terminal.

## Main commands

```powershell
pnpm dev       # Start the development server
pnpm build     # Create a production build
pnpm lint      # Check the source code
```

## Main modules

- Dashboard overview
- Dataset catalog and validation states
- Pipeline monitoring and progress
- Project collaboration workspace
- Analysis report registry
- Notifications, team directory, settings, filters, record details, and search
- REST endpoints at `/api/records`

## Technology

React, TypeScript, Vinext/Next-compatible routing, REST APIs, Drizzle ORM, SQLite/D1-compatible relational storage, and responsive CSS.
