import { Badge } from "@/components/ui/Badge";
import { TestStatus } from "@/utils/constants";
import type { TestStatus as TestStatusType } from "@/types/tests";

const statusBadge: Record<TestStatusType, typeof Badge.Blue> = {
  [TestStatus.Active]: Badge.Amber,
  [TestStatus.Scheduled]: Badge.Blue,
  [TestStatus.Completed]: Badge.Gray,
  [TestStatus.Published]: Badge.Green,
  [TestStatus.Overdue]: Badge.Red,
  [TestStatus.Draft]: Badge.Gray,
};

export function StatusBadge({ status }: { status: TestStatusType }) {
  const StatusColor = statusBadge[status];
  return <StatusColor>{status}</StatusColor>;
}
