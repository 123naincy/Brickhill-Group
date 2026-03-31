import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable, type DropResult } from "react-beautiful-dnd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AddSection from "../admin/AddSection";
import Preview from "../admin/Preview";
import { deleteSection, getNewsletterById, updateSection, uploadImage } from "../admin/api";
import type { Newsletter, Section } from "../admin/types";

const reorder = (items: Section[], startIndex: number, endIndex: number) => {
  const result = [...items];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result.map((item, idx) => ({ ...item, position: idx + 1 }));
};

export default function AdminNewsletterEditorPage() {
  const { id = "" } = useParams();
  const [newsletter, setNewsletter] = useState<Newsletter | undefined>();
  const [sections, setSections] = useState<Section[]>([]);
  const [savingSectionId, setSavingSectionId] = useState<number | null>(null);
  const [uploadingSectionId, setUploadingSectionId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const nextPosition = useMemo(
    () => (sections.length ? Math.max(...sections.map((s) => s.position)) + 1 : 1),
    [sections]
  );

  const fetchNewsletter = async () => {
    try {
      setError("");
      const data = await getNewsletterById(id);
      setNewsletter(data.newsletter);
      setSections(data.sections);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to load newsletter details.");
    }
  };

  useEffect(() => {
    if (id) fetchNewsletter();
  }, [id]);

  const handleSectionSave = async (section: Section) => {
    try {
      setSavingSectionId(section.id);
      await updateSection(section.id, {
        type: section.type,
        title: section.title,
        content: section.content,
        image_url: section.image_url,
        position: section.position,
      });
      await fetchNewsletter();
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to save section.");
    } finally {
      setSavingSectionId(null);
    }
  };

  const handleDeleteSection = async (sectionId: number) => {
    try {
      await deleteSection(sectionId);
      await fetchNewsletter();
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to delete section.");
    }
  };

  const handleSectionImageUpload = async (sectionId: number, file: File | null) => {
    if (!file) return;
    try {
      setUploadingSectionId(sectionId);
      const url = await uploadImage(file);
      handleLocalChange(sectionId, { image_url: url });
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to upload image.");
    } finally {
      setUploadingSectionId(null);
    }
  };

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;
    const reordered = reorder(sections, result.source.index, result.destination.index);
    setSections(reordered);
    for (const section of reordered) {
      await updateSection(section.id, {
        type: section.type,
        title: section.title,
        content: section.content,
        image_url: section.image_url,
        position: section.position,
      });
    }
    await fetchNewsletter();
  };

  const handleLocalChange = (sectionId: number, changes: Partial<Section>) => {
    setSections((prev) =>
      prev.map((section) => (section.id === sectionId ? { ...section, ...changes } : section))
    );
  };

  return (
    <div className="admin-container">
      <div className="admin-left">
        <AddSection newsletterId={id} nextPosition={nextPosition} onAdded={fetchNewsletter} />
        {error && <p className="admin-error">{error}</p>}

        <div className="admin-card">
          <h3>Sections</h3>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="sections-list">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {sections.map((section, index) => (
                    <Draggable key={section.id} draggableId={String(section.id)} index={index}>
                      {(dragProvided) => (
                        <div
                          className="section-item"
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                        >
                          <div className="section-row">
                            <span className="drag-handle" {...dragProvided.dragHandleProps}>
                              :::
                            </span>
                            <select
                              className="admin-select"
                              value={section.type}
                              onChange={(e) =>
                                handleLocalChange(section.id, {
                                  type: e.target.value as Section["type"],
                                })
                              }
                            >
                              <option value="article">Article</option>
                              <option value="section-title">Section Heading</option>
                            </select>
                          </div>
                          <input
                            className="admin-input"
                            value={section.title}
                            onChange={(e) => handleLocalChange(section.id, { title: e.target.value })}
                            placeholder="Heading"
                          />
                          <ReactQuill
                            theme="snow"
                            value={section.content}
                            onChange={(value) => handleLocalChange(section.id, { content: value })}
                          />
                          <input
                            className="admin-input"
                            value={section.image_url || ""}
                            placeholder="Image URL"
                            onChange={(e) =>
                              handleLocalChange(section.id, {
                                image_url: e.target.value,
                              })
                            }
                          />
                          <input
                            className="admin-input"
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleSectionImageUpload(section.id, e.target.files?.[0] || null)
                            }
                          />
                          {uploadingSectionId === section.id ? (
                            <p className="admin-muted">Uploading image...</p>
                          ) : null}
                          <div className="section-actions">
                            <button
                              className="admin-btn admin-btn-sm"
                              onClick={() => handleSectionSave(section)}
                              disabled={savingSectionId === section.id}
                            >
                              {savingSectionId === section.id ? "Saving..." : "Save"}
                            </button>
                            <button
                              className="admin-btn admin-btn-danger admin-btn-sm"
                              onClick={() => handleDeleteSection(section.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>

      <div className="admin-right">
        <Preview newsletter={newsletter} sections={sections} />
      </div>
    </div>
  );
}
