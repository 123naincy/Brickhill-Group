import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import { getPageSeo } from "../seo/manifest";

import Hero from "../components/webinar/Hero";
import BenefitsSection from "../components/webinar/BenefitsSection";
import Testimonials from "../components/webinar/Testimonials";
import FAQSection from "../components/webinar/FAQSection";
import FinalCTA from "../components/webinar/FinalCTA";
import LearnSection from "../components/webinar/LearnSection";

const WebinarPage = () => {
  const entry = getPageSeo("/webinar");

  return (
    <main className="pt-24 lg:pt-32">
      <Seo entry={entry} />
      <Breadcrumbs items={entry.breadcrumbs} />
      <Hero />
      <LearnSection />
      <BenefitsSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </main>
  );
};

export default WebinarPage;