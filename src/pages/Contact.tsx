import ContactSection from "../components/Contact";
import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import { getPageSeo } from "../seo/manifest";

export default function Contact() {
  const entry = getPageSeo("/contact");

  return (
    <main className="pt-24 lg:pt-32">
      <Seo entry={entry} />
      <Breadcrumbs items={entry.breadcrumbs} />
      <ContactSection />
    </main>
  );
}
