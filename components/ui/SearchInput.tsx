import type { InputHTMLAttributes } from "react";
import { Search, Close } from "@/components/icons";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export function SearchInput({
  className = "",
  value,
  onClear,
  ...props
}: SearchInputProps) {
  const showClear = Boolean(value) && Boolean(onClear);

  return (
    <div className={`relative ${className}`}>
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={18} />
      </span>
      <input
        type="text"
        value={value}
        className={`h-11 w-full rounded-xl border border-gray-200 bg-white pl-11 text-sm text-gray-700 placeholder:text-gray-400 transition-colors hover:bg-gray-50 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 ${
          showClear ? "pr-11" : "pr-4"
        }`}
        {...props}
      />
      {showClear && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={onClear}
          className="absolute cursor-pointer right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <Close size={16} />
        </button>
      )}
    </div>
  );
}
