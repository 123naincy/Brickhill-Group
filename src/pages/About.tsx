import AboutSection from "../components/About";
import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import { getPageSeo } from "../seo/manifest";

export default function About() {
  const entry = getPageSeo("/about");

  return (
    <main className="pt-24 lg:pt-32">
      <Seo entry={entry} />
      <Breadcrumbs items={entry.breadcrumbs} />
      <AboutSection isPage />
    </main>
  );
}
