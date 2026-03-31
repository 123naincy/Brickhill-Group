import type { Newsletter, Section } from "./types";

interface PreviewProps {
  newsletter?: Newsletter;
  sections: Section[];
}

export default function Preview({ newsletter, sections }: PreviewProps) {
  return (
    <div>
      <h2>Live Preview</h2>
      {newsletter && <h3 className="admin-preview-title">{newsletter.title}</h3>}

      {sections.map((sec) => {
        switch (sec.type) {
          case "article":
            return (
              <div key={sec.id} className="admin-preview-card">
                {sec.image_url && (
                  <img
                    className="admin-preview-image"
                    src={sec.image_url}
                    alt={sec.title || "Section image"}
                  />
                )}
                <h3>{sec.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: sec.content }} />
              </div>
            );

          case "section-title":
            return (
              <h2 className="admin-section-title" key={sec.id}>
                {sec.title}
              </h2>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}