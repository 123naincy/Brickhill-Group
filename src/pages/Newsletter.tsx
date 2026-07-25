
import NewsletterCard from "../components/newsletter/NewsletterCard";
import { newsletters } from "../data/newsletters";
import { Helmet } from "react-helmet-async";

const Newsletter = () => {
  return (
    <>
      <Helmet>
        <title>{"Monthly Newsletters | BHL Group"}</title>
      </Helmet>

      <section className="newsletter-page">
      <div className="container">
        <div className="newsletter-grid">

          {newsletters.map((item) => (
            <NewsletterCard
              key={item.id}
              newsletter={item}
            />
          ))}

        </div>

      </div>

    </section>
    </>
  );
};

export default Newsletter;