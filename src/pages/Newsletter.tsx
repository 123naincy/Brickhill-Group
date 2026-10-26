import NewsletterCard from "../components/newsletter/NewsletterCard";
import { newsletters } from "../data/newsletters";
import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import { getPageSeo } from "../seo/manifest";

const Newsletter = () => {
  const entry = getPageSeo("/newsletter");

  return (
    <main className="newsletter-page">
      <Seo entry={entry} />
      <Breadcrumbs items={entry.breadcrumbs} />
      <div className="container">
        <div className="heading">
          <h1>Brickhill Group Newsletters</h1>
          <p>
            Monthly updates on business, real estate, and company news from Brickhill Group.
          </p>
        </div>
        <div className="newsletter-grid">
          {newsletters.map((item) => (
            <NewsletterCard key={item.id} newsletter={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Newsletter;
