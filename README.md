# Intellishala - My Tests

The "My Tests" page for a teacher: a list of tests they have created, with search,
a class filter, a status filter, a count chip, and pagination. Built as a standalone
Next.js app from the provided design.

Live: https://intellishala-assignment.vercel.app/

Demo recording: [public/demo.mov](public/demo.mov)

## Tech

- Next.js (App Router)
- TypeScript
- Tailwind CSS

No component libraries. The table, pills, inputs, select and buttons are hand-written.

## Run it

Requires Node 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm start
```

## Data

`lib/tests.json` (27 tests) is loaded as a static import in `app/page.tsx` and passed
down as a typed `Test[]`. Search and both filters work together on that data. The count
chip shows how many tests match the current filters.

## Notes and decisions

- Status colors: design colors three; chose the rest to fit (Active amber, Overdue red, Completed gray).
- Empty states: separate ones for no data and for filters matching nothing.
- Icons: hand-authored inline SVGs, based on Hugeicons, close to the design (not exact).


## Structure

```
app/            layout (dashboard shell + title), page (loads data)
components/
  layout/       Sidebar, DashboardLayout, Logo, etc.
  tests/        MyTestsView (filter/paginate), TestsToolbar, TestsTable, Pagination
  ui/           Button, Badge, Select, SearchInput, Table, EmptyState, HorizontalScroller
  icons/        inline SVG icons
lib/tests.json  the 27 tests
types/          Test and TestStatus types
utils/          constants and helpers
```
