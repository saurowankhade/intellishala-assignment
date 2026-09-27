import type { ButtonHTMLAttributes, ElementType, ReactNode } from "react";
import { Spinner } from "@/components/icons";

type ButtonColor = "blue" | "gray";
type ButtonWeight = "solid" | "flat";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  as?: ElementType;
  flat?: boolean;
  small?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconOnly?: boolean;
  loading?: boolean;
  children: ReactNode;
}

type ButtonProps = Omit<BaseButtonProps, "color">;

const base =
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

const STYLES: Record<ButtonColor, Record<ButtonWeight, string>> = {
  blue: {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    flat: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
  },
  gray: {
    solid: "bg-gray-900 text-white hover:bg-gray-800",
    flat: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
  },
};

function getButtonSizeClassName(small: boolean, iconOnly: boolean) {
  if (small) {
    return `h-9 text-sm ${iconOnly ? "w-9 rounded-md" : "px-4 rounded-lg"}`;
  }
  return `h-11 text-sm ${iconOnly ? "w-11 rounded-lg" : "px-5 rounded-xl"}`;
}

function BaseButton({
  color = "blue",
  as: Component = "button",
  flat = false,
  small = false,
  leftIcon,
  rightIcon,
  iconOnly = false,
  loading = false,
  disabled,
  className = "",
  children,
  ...props
}: BaseButtonProps) {
  const weight: ButtonWeight = flat ? "flat" : "solid";
  const sizeClasses = getButtonSizeClassName(small, iconOnly);


  return (
    <Component
      className={`${base} ${STYLES[color][weight]} ${sizeClasses} ${className}`}
      disabled={disabled || loading }
      {...props}
    >
      {iconOnly ? (
        loading ? (
          <Spinner size={16} />
        ) : (
          children
        )
      ) : (
        <>
          {loading ? <Spinner size={16} /> : leftIcon}
          {children}
          {!loading && rightIcon}
        </>
      )}
    </Component>
  );
}

function Blue(props: ButtonProps) {
  return <BaseButton color="blue" {...props} />;
}

function Gray(props: ButtonProps) {
  return <BaseButton color="gray" {...props} />;
}


export const Button = {
  Blue,
  Gray,
};
