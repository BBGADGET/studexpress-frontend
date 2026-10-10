"use client";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const navButtonClass =
  "h-[50px] rounded-md border border-[#e4e4e2] bg-white px-4 text-base text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-primary";

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Trips pages"
      className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
    >
      <button
        type="button"
        className={`${navButtonClass} min-w-[82px]`}
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>

      <div className="flex items-center gap-2">
        {pages.map((pageNumber) => {
          const isActive = pageNumber === page;
          return (
            <button
              key={pageNumber}
              type="button"
              aria-current={isActive ? "page" : undefined}
              aria-label={`Page ${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
              className={`h-[50px] w-[50px] rounded-md border text-base transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-[#e4e4e2] bg-white text-foreground hover:bg-muted"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="h-[50px] min-w-[86px] rounded-md bg-primary px-4 text-base text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-primary"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </nav>
  );
}