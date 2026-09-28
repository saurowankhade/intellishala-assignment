import type { ReactNode } from "react";
import { Spinner } from "@/components/icons";
import EmptyState from "@/components/ui/EmptyState";

export interface Column<T> {
  key: string;
  label: string;
  width?: string;
  align?: "left" | "center" | "right";
  cellRenderer?: (item: T, index: number) => ReactNode;
  headerClassName?: string;
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  emptyState?: ReactNode;
  getRowKey?: (item: T, index: number) => string;
  className?: string;
  minBodyHeight?: string;
}

const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;


function cellPadding(index: number, count: number): string {
  if (count === 1) return "";
  if (index === 0) return "pr-4";
  if (index === count - 1) return "pl-4";
  return "px-4";
}

function getCellValue<T>(item: T, column: Column<T>, index: number): ReactNode {
  if (column.cellRenderer) return column.cellRenderer(item, index);
  const value = (item as Record<string, unknown>)[column.key];
  return (value as ReactNode) ?? "–";
}

const Table = <T,>({
  data,
  columns,
  loading = false,
  emptyState = <EmptyState />,
  getRowKey,
  className = "",
  minBodyHeight = "min-h-80",
}: TableProps<T>) => {
  return (
    <div className={className}>
      <div className="flex items-center border-b border-gray-100 pb-3">
        {columns.map((column, index) => (
          <div
            key={column.key}
            className={`${
              column.width ?? "flex-1"
            } min-w-0 ${cellPadding(index, columns.length)} text-xs font-medium uppercase tracking-wide text-gray-400 ${
              alignClass[column.align ?? "left"]
            } ${column.headerClassName ?? ""}`}
          >
            {column.label}
          </div>
        ))}
      </div>

      {loading ? (
        <div className={`flex ${minBodyHeight} items-center justify-center text-gray-300`}>
          <Spinner size={32} />
        </div>
      ) : data.length === 0 ? (
        <div className={`flex ${minBodyHeight} items-center justify-center`}>
          {emptyState}
        </div>
      ) : (
        <div className={`divide-y border-b border-gray-100 divide-gray-100 ${minBodyHeight}`}>
          {data.map((item, index) => (
            <div
              key={getRowKey ? getRowKey(item, index) : index}
              className="flex items-center py-5 transition-colors hover:bg-gray-50/60"
            >
              {columns.map((column, colIndex) => (
                <div
                  key={column.key}
                  className={`${column.width ?? "flex-1"} min-w-0 ${cellPadding(
                    colIndex,
                    columns.length
                  )} ${alignClass[column.align ?? "left"]} ${
                    column.className ?? ""
                  }`}
                >
                  {getCellValue(item, column, index)}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
