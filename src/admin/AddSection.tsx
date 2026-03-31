import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createSection, uploadImage } from "./api";
import type { SectionType } from "./types";

interface AddSectionProps {
  newsletterId: string;
  nextPosition: number;
  onAdded: () => Promise<void>;
}

export default function AddSection({ newsletterId, nextPosition, onAdded }: AddSectionProps) {
  const [type, setType] = useState<SectionType>("article");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (file: File | null) => {
    if (!file) return;
    try {
      setUploading(true);
      const url = await uploadImage(file);
      setImageUrl(url);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleAdd = async () => {
    if (!title.trim()) {
      setError("Section heading is required.");
      return;
    }
    try {
      setError("");
      setSaving(true);
      await createSection({
        newsletter_id: newsletterId,
        type,
        title: title.trim(),
        content,
        image_url: imageUrl,
        position: nextPosition,
      });
      setTitle("");
      setContent("");
      setImageUrl("");
      await onAdded();
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to add section.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-card">
      <h3>Add Section</h3>
      <select
        className="admin-select"
        value={type}
        onChange={(e) => setType(e.target.value as SectionType)}
      >
        <option value="article">Article</option>
        <option value="section-title">Section Heading</option>
      </select>
      <input
        className="admin-input"
        placeholder="Heading"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <input
        className="admin-input"
        type="file"
        accept="image/*"
        onChange={(e) => handleUpload(e.target.files?.[0] || null)}
      />
      {uploading && <p className="admin-muted">Uploading image...</p>}
      {imageUrl && <img className="admin-preview-image" src={imageUrl} alt="Uploaded preview" />}
      {error && <p className="admin-error">{error}</p>}
      <button className="admin-btn" onClick={handleAdd} disabled={saving || uploading}>
        {saving ? "Saving..." : "Add Section"}
      </button>
    </div>
  );
}