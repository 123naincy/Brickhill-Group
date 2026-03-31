import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateNewsletter from "../admin/CreateNewsletter";
import SectionList from "../admin/SectionList";
import { getNewsletters } from "../admin/api";
import type { Newsletter } from "../admin/types";

export default function AdminPage() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchAllNewsletters = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getNewsletters();
      setNewsletters(data);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to load newsletters.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNewsletters();
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-left">
        <CreateNewsletter
          onCreated={(id) => navigate(`/admin/newsletter/${id}`)}
          onRefresh={fetchAllNewsletters}
        />
        {loading ? <p className="admin-muted">Loading newsletters...</p> : null}
        {error ? <p className="admin-error">{error}</p> : null}
        <SectionList newsletters={newsletters} onOpen={(id) => navigate(`/admin/newsletter/${id}`)} />
      </div>
      <div className="admin-right">
        <h2>Newsletter CMS</h2>
        <p className="admin-muted">
          Create a newsletter, then open it to add/edit/delete sections with live preview.
        </p>
      </div>
    </div>
  );
}