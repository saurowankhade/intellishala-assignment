"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Test } from "@/types/tests";
import { TestStatus } from "@/utils/constants";
import TestsToolbar from "./TestsToolbar";
import TestsTable from "./TestsTable";
import Pagination from "./Pagination";
import EmptyState from "@/components/ui/EmptyState";
import HorizontalScroller from "@/components/ui/HorizontalScroller";

const PAGE_SIZE = 5;
const ALL = "all";

const toOptions = (allLabel: string, values: readonly string[]) => [
  { label: allLabel, value: ALL },
  ...values.map((v) => ({ label: v, value: v })),
];

interface MyTestsViewProps {
  tests: Test[];
}

const MyTestsView = ({ tests }: MyTestsViewProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const classFilter = params.get("class") ?? ALL;
  const statusFilter = params.get("status") ?? ALL;
  const [search, setSearch] = useState(() => params.get("search") ?? "");

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (!value || value === ALL) next.delete(key);
    else next.set(key, value);
    if (key !== "page") next.delete("page");
    router.replace(`?${next.toString()}`, { scroll: false });
  };

  const classNames = [...new Set(tests.map((t) => t.className))].sort();
  const classOptions = toOptions("All Classes", classNames);
  const statusOptions = toOptions("All Status", Object.values(TestStatus));

  const query = search.trim().toLowerCase();
  const filtered = tests.filter(
    (test) =>
      test.title.toLowerCase().includes(query) &&
      (classFilter === ALL || test.className === classFilter) &&
      (statusFilter === ALL || test.status === statusFilter)
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, Number(params.get("page")) || 1), totalPages);
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-gray-100 bg-white p-4 sm:p-6">
      <TestsToolbar
        count={filtered.length}
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setParam("search", value);
        }}
        classValue={classFilter}
        onClassChange={(value) => setParam("class", value)}
        classOptions={classOptions}
        statusValue={statusFilter}
        onStatusChange={(value) => setParam("status", value)}
        statusOptions={statusOptions}
      />

      <HorizontalScroller>
        <TestsTable
          className="min-w-264"
          minBodyHeight="min-h-[34rem]"
          tests={pageItems}
          emptyState={
            tests.length === 0 ? (
              // No data at all.
              <EmptyState
                title="No tests yet"
                description="Tests you create will show up here."
              />
            ) : (
              // Data exists, but the current search/filters match nothing.
              <EmptyState
                title="No tests found"
                description="Try adjusting your search or filters."
              />
            )
          }
        />
      </HorizontalScroller>

      <Pagination
        page={page}
        pageSize={PAGE_SIZE}
        total={filtered.length}
        onPageChange={(next) => setParam("page", String(next))}
      />
    </div>
  );
};

export default MyTestsView;
