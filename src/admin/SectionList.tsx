import type { Newsletter } from "./types";

interface SectionListProps {
  newsletters: Newsletter[];
  onOpen: (id: string) => void;
}

export default function SectionList({ newsletters, onOpen }: SectionListProps) {
  return (
    <div className="admin-card">
      <h3>Newsletters</h3>
      <div className="admin-list">
        {newsletters.length === 0 && <p className="admin-empty">No newsletters yet.</p>}
        {newsletters.map((newsletter) => (
          <div key={newsletter.id} className="newsletter-card">
            <div>
              <strong>{newsletter.title}</strong>
              <p className="admin-muted">{newsletter.id}</p>
            </div>
            <button className="admin-btn admin-btn-sm" onClick={() => onOpen(newsletter.id)}>
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}