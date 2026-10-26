import { Link } from "react-router-dom";
import type { Crumb } from "../../seo/site";

export default function Breadcrumbs({ items }: { items?: Crumb[] }) {
  if (!items || items.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-[#f7fbff] border-b border-[#e5eef8]">
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm list-none m-0">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.path}-${item.name}`} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" style={{ color: "#9fc5e9" }}>
                  /
                </span>
              )}
              {last ? (
                <span aria-current="page" className="font-semibold" style={{ color: "#073762" }}>
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} style={{ color: "#0b5394" }}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
