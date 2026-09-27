import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { TestStatus } from "@/utils/constants";
import type { TestStatus as TestStatusType } from "@/types/tests";

const statusVariant: Record<TestStatusType, BadgeVariant> = {
  [TestStatus.Active]: "amber",
  [TestStatus.Scheduled]: "blue",
  [TestStatus.Completed]: "gray",
  [TestStatus.Published]: "green",
  [TestStatus.Overdue]: "red",
  [TestStatus.Draft]: "gray",
};

export function StatusBadge({ status }: { status: TestStatusType }) {
  return (
    <Badge variant={statusVariant[status]}>{status}</Badge>
  );
}
