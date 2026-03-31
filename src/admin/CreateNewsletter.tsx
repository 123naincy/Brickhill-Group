import { useMemo, useState } from "react";
import { createNewsletter } from "./api";
import { toSlug } from "./slug";

interface CreateNewsletterProps {
  onCreated: (newsletterId: string) => void;
  onRefresh: () => Promise<void>;
}

export default function CreateNewsletter({ onCreated, onRefresh }: CreateNewsletterProps) {
  const [title, setTitle] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const suggestedSlug = useMemo(() => toSlug(title), [title]);

  const handleCreate = async () => {
    if (!title.trim()) {
      setError("Newsletter title is required.");
      return;
    }
    if (!suggestedSlug) {
      setError("Title must include letters or numbers.");
      return;
    }

    try {
      setError("");
      setIsSaving(true);
      await createNewsletter({ id: suggestedSlug, title: title.trim() });
      await onRefresh();
      onCreated(suggestedSlug);
      setTitle("");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to create newsletter.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="admin-card">
      <h3>Create Newsletter</h3>
      <input
        className="admin-input"
        placeholder="Newsletter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="admin-hint">Slug: {suggestedSlug || "n/a"}</div>
      {error && <p className="admin-error">{error}</p>}
      <button className="admin-btn" onClick={handleCreate} disabled={isSaving}>
        {isSaving ? "Creating..." : "Create Newsletter"}
      </button>
    </div>
  );
}