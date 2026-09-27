import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "@/components/icons";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

export function Select({ options, className = "", ...props }: SelectProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        className="h-11 w-full appearance-none rounded-xl border border-gray-200 bg-white pl-4 pr-10 text-sm text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        <ChevronDown size={16} />
      </span>
    </div>
  );
}
