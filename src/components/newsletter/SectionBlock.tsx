import {Section}  from "../../data/types/newsletter";

interface Props {
  section: Section;
}

export default function SectionBlock({ section }: Props) {
  return (
    <div className="section-block">
      <h2 className="section-title">{section.sectionTitle}</h2>

      {section.articles.map((article) => (
        <div key={article.id} className="news-article">
          <img src={article.image} alt={article.title} />
          <div>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}