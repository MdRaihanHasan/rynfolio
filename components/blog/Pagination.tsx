import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  /** Active filters to preserve in page links (q, tag, category). */
  query?: Record<string, string | undefined>;
};

function pageHref(page: number, query: Record<string, string | undefined> = {}) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value) params.set(key, value);
  }
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/blog?${qs}` : "/blog";
}

export default function Pagination({ currentPage, totalPages, query }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className="pagination justify-content-center flex-wrap mt-20 wow fadeInUp delay-0-2s">
      <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
        {currentPage === 1 ? (
          <span className="page-link">
            <i className="far fa-angle-left"></i>
          </span>
        ) : (
          <Link className="page-link" href={pageHref(currentPage - 1, query)}>
            <i className="far fa-angle-left"></i>
          </Link>
        )}
      </li>
      {pages.map((page) => (
        <li className={`page-item${page === currentPage ? " active" : ""}`} key={page}>
          <Link className="page-link" href={pageHref(page, query)}>
            {String(page).padStart(2, "0")}
          </Link>
        </li>
      ))}
      <li className={`page-item${currentPage === totalPages ? " disabled" : ""}`}>
        {currentPage === totalPages ? (
          <span className="page-link">
            <i className="far fa-angle-right"></i>
          </span>
        ) : (
          <Link className="page-link" href={pageHref(currentPage + 1, query)}>
            <i className="far fa-angle-right"></i>
          </Link>
        )}
      </li>
    </ul>
  );
}
