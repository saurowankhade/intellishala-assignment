import type { ReactNode } from "react";

export type BadgeVariant = "blue" | "green" | "gray" | "red" | "amber";
type BadgeWeight = "flat" | "solid";

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
  blue: { flat: "bg-blue-50 text-blue-600", solid: "bg-blue-600 text-white" },
  green: {
    flat: "bg-green-50 text-green-600",
    solid: "bg-green-600 text-white",
  },
  gray: { flat: "bg-gray-100 text-gray-500", solid: "bg-gray-600 text-white" },
  red: { flat: "bg-red-50 text-red-600", solid: "bg-red-600 text-white" },
  amber: {
    flat: "bg-amber-50 text-amber-600",
    solid: "bg-amber-600 text-white",
  },
};

function getBadgeSizeClassName(small: boolean) {
  if (small) {
    return "h-7 px-3 text-xs";
  }
  return "h-11 px-4 text-sm";
}

function BaseBadge({
  variant = "blue",
  solid = false,
  small = false,
  rounded = false,
  className = "",
  children,
}: BadgeProps) {
  const weight: BadgeWeight = solid ? "solid" : "flat";
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

type BadgeColorProps = Omit<BadgeProps, "variant">;

function Blue(props: BadgeColorProps) {
  return <BaseBadge variant="blue" {...props} />;
}

function Green(props: BadgeColorProps) {
  return <BaseBadge variant="green" {...props} />;
}

function Gray(props: BadgeColorProps) {
  return <BaseBadge variant="gray" {...props} />;
}

function Red(props: BadgeColorProps) {
  return <BaseBadge variant="red" {...props} />;
}

function Amber(props: BadgeColorProps) {
  return <BaseBadge variant="amber" {...props} />;
}

export const Badge = {
  Blue,
  Green,
  Gray,
  Red,
  Amber,
};
