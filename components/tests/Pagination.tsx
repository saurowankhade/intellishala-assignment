import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "@/components/icons";

interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ page, pageSize, total, onPageChange }: PaginationProps) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-gray-500">
        Showing {from} To {to} Of {total} {total === 1 ? "Test" : "Tests"}
      </p>

      <div className="flex items-center gap-2">
        <Button.Gray
          flat
          small
          iconOnly
          aria-label="Previous page"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          <ChevronLeft size={16} />
        </Button.Gray>

        {pages.map((p) =>
          p === page ? (
            <Button.Blue key={p} small iconOnly aria-current="page">
              {p}
            </Button.Blue>
          ) : (
            <Button.Gray
              key={p}
              flat
              small
              iconOnly
              onClick={() => onPageChange(p)}
            >
              {p}
            </Button.Gray>
          )
        )}

        <Button.Gray
          flat
          small
          iconOnly
          aria-label="Next page"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          <ChevronRight size={16} />
        </Button.Gray>
      </div>
    </div>
  );
};

export default Pagination;
