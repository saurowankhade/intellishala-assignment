import type { ComponentType } from "react";
import {
  GraduationCap,
  ClipboardPlus,
  ClipboardList,
  Book,
  BookOpen,
  Folder,
  ClipboardChart,
  Sparkles,
} from "@/components/icons";

export const TestStatus = {
  Active: "Active",
  Scheduled: "Scheduled",
  Completed: "Completed",
  Published: "Published",
  Overdue: "Overdue",
  Draft: "Draft",
} as const;

export const subjectColors: Record<string, string> = {
  Maths: "text-blue-600",
  Mathematics: "text-blue-600",
  English: "text-purple-600",
  Science: "text-green-600",
  "Social Science": "text-amber-600",
  "Social Studies": "text-amber-600",
};

export const DEFAULT_SUBJECT_COLOR = "text-gray-500";

export const DEMO_PROFILE = {
  name: "Demo Teacher",
  initials: "DT",
  email: "teacher@intellishala.com",
  workspace: "Demo 2",
  role: "Teacher",
} as const;

export interface NavLink {
  key: string;
  label: string;
  icon: ComponentType<{ size?: number }>;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { key: "my-classes", label: "My Classes", icon: GraduationCap, href: "#" },
  { key: "create-test", label: "Create Test", icon: ClipboardPlus, href: "#" },
  { key: "my-tests", label: "My Tests", icon: ClipboardList, href: "#" },
  { key: "homework", label: "Homework", icon: Book, href: "#" },
  { key: "question-bank", label: "Question Bank", icon: BookOpen, href: "#" },
  { key: "my-files", label: "My Files", icon: Folder, href: "#" },
  { key: "result", label: "Result", icon: ClipboardChart, href: "#" },
  { key: "ai-assistant", label: "AI Assistant", icon: Sparkles, href: "#" },
];

