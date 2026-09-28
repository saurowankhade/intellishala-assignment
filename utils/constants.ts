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

export const DEMO_PROFILE = {
  name: "Demo Teacher",
  initials: "DT",
  email: "teacher@educore.com",
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

