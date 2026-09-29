import type { ReactNode } from "react";
import type { Test, TestStatus as TestStatusType } from "@/types/tests";
import Table, { type Column } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  TestStatus,
  subjectColors,
  DEFAULT_SUBJECT_COLOR,
} from "@/utils/constants";
import { formatDate } from "@/utils/helpers";

const statusBadge: Record<TestStatusType, typeof Badge.Blue> = {
  [TestStatus.Active]: Badge.Amber,
  [TestStatus.Scheduled]: Badge.Blue,
  [TestStatus.Completed]: Badge.Purple,
  [TestStatus.Published]: Badge.Green,
  [TestStatus.Overdue]: Badge.Red,
  [TestStatus.Draft]: Badge.Gray,
};

const StatusPill = ({ status }: { status: TestStatusType }) => {
  const Pill = statusBadge[status];
  return <Pill>{status}</Pill>;
};

const DateText = ({ date }: { date: string | null }) => (
  <span className="whitespace-nowrap text-sm text-gray-500">
    {formatDate(date) ?? "–"}
  </span>
);

const columns: Column<Test>[] = [
  {
    key: "title",
    label: "Title",
    width: "flex-[2.2]",
    cellRenderer: (test) => (
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-gray-900">{test.title}</span>
        <span className="text-sm text-gray-400">
          {test.questionCount}{" "}
          {test.questionCount === 1 ? "Question" : "Questions"}
        </span>
      </div>
    ),
  },
  {
    key: "classSubject",
    label: "Class & Subject",
    width: "flex-[1.6]",
    cellRenderer: (test) => (
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-gray-900">{test.className}</span>
        <span
          className={`text-sm font-medium ${
            subjectColors[test.subject] ?? DEFAULT_SUBJECT_COLOR
          }`}
        >
          {test.subject}
        </span>
      </div>
    ),
  },
  {
    key: "assignedAt",
    label: "Assigned",
    width: "flex-[1.3]",
    cellRenderer: (test) => <DateText date={test.assignedAt} />,
  },
  {
    key: "dueAt",
    label: "Due",
    width: "flex-[1.3]",
    cellRenderer: (test) => <DateText date={test.dueAt} />,
  },
  {
    key: "status",
    label: "Status",
    width: "flex-1",
    cellRenderer: (test) => <StatusPill status={test.status} />,
  },
  {
    key: "submissions",
    label: "Submissions",
    width: "flex-1",
    align: "center",
    cellRenderer: (test) => {
      const { submitted, total } = test.submissions;
      return (
        <span className="text-sm text-gray-500">
          {total === 0 ? "–" : `${submitted}/${total}`}
        </span>
      );
    },
  },
  {
    key: "actions",
    label: "Action",
    width: "w-44 shrink-0",
    cellRenderer: () => (
      <div className="flex items-center gap-2">
        <Button.Gray flat small>
          View
        </Button.Gray>
        <Button.Gray flat small>
          Result
        </Button.Gray>
      </div>
    ),
  },
];

interface TestsTableProps {
  tests: Test[];
  loading?: boolean;
  emptyState?: ReactNode;
  className?: string;
  minBodyHeight?: string;
}

const TestsTable = ({
  tests,
  loading,
  emptyState,
  className,
  minBodyHeight,
}: TestsTableProps) => {
  return (
    <Table
      data={tests}
      columns={columns}
      loading={loading}
      emptyState={emptyState}
      getRowKey={(test) => test.id}
      className={className}
      minBodyHeight={minBodyHeight}
    />
  );
};

export default TestsTable;
