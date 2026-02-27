import { Section } from "../../data/types/newsletter";

interface Props {
  section: Section;
}

export default function SectionBlock({ section }: Props) {
  return (
    <div className="section-block mb-5">

      {/* Section Title */}
      <h2 className="premium-section-title">
        {section.sectionTitle}
      </h2>

      {/* Articles */}
      {section.articles.map((article) => (
        <div key={article.id} className="premium-article-card">

          <div className="article-image-wrap">
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
          </div>

          <div className="article-content">
            <h3 className="article-heading">{article.title}</h3>
            <p className="article-text">{article.content}</p>
          </div>

        </div>
      ))}
    </div>
  );
}