import { TestStatus } from "@/utils/constants";

export type TestStatus = (typeof TestStatus)[keyof typeof TestStatus];

export interface Test {
  id: string;
  title: string;
  questionCount: number;
  className: string;
  subject: string;
  assignedAt: string | null;
  dueAt: string | null;
  status: TestStatus;
  submissions: {
    submitted: number;
    total: number;
  };
}