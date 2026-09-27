import type { ReactNode } from "react";

export type BadgeVariant = "blue" | "green" | "gray" | "red" | "amber";
type BadgeWeight = "soft" | "solid";

interface BadgeProps {
  variant?: BadgeVariant;
  solid?: boolean;
  small?: boolean;
  rounded?: boolean;
  className?: string;
  children: ReactNode;
}

const base = "inline-flex items-center justify-center font-medium";

const STYLES: Record<BadgeVariant, Record<BadgeWeight, string>> = {
  blue: { soft: "bg-blue-50 text-blue-600", solid: "bg-blue-600 text-white" },
  green: {
    soft: "bg-green-50 text-green-600",
    solid: "bg-green-600 text-white",
  },
  gray: { soft: "bg-gray-100 text-gray-500", solid: "bg-gray-600 text-white" },
  red: { soft: "bg-red-50 text-red-600", solid: "bg-red-600 text-white" },
  amber: {
    soft: "bg-amber-50 text-amber-600",
    solid: "bg-amber-600 text-white",
  },
};

function getBadgeSizeClassName(small: boolean) {
  return small ? "h-7 px-3 text-xs" : "h-11 px-4 text-sm";
}

export function Badge({
  variant = "blue",
  solid = false,
  small = false,
  rounded = false,
  className = "",
  children,
}: BadgeProps) {
  const weight: BadgeWeight = solid ? "solid" : "soft";
  const sizeClasses = getBadgeSizeClassName(small);
  const shape = rounded ? "rounded-full" : "rounded-md";

  return (
    <span
      className={`${base} ${shape} ${sizeClasses} ${STYLES[variant][weight]} ${className}`}
    >
      {children}
    </span>
  );
}
