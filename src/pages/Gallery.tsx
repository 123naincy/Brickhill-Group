import GallerySection from "../components/GallerySection";
import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import { getPageSeo } from "../seo/manifest";

export default function GalleryPage() {
  const entry = getPageSeo("/gallery");

  return (
    <main className="pt-24 lg:pt-32">
      <Seo entry={entry} />
      <Breadcrumbs items={entry.breadcrumbs} />
      <GallerySection />
    </main>
  );
}
