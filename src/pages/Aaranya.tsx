import AaranyaHero from "../components/Aaranya/AaranyaHero";
import AaranyaPhases from "../components/Aaranya/AaranyaPhases";
import AaranyaLifestyle from "../components/Aaranya/AaranyaLifestyle";
import AaranyaLocation from "../components/Aaranya/AaranyaLocation";
import AaranyaAmenities from "../components/Aaranya/AaranyaAmenities";
import AaranyaResidences from "../components/Aaranya/AaranyaResidences";
import AaranyaGallery from "../components/Aaranya/AaranyaGallery";
import AaranyaContact from "../components/Aaranya/AaranyaContact";
import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import { getPageSeo } from "../seo/manifest";

export default function AaranyaPage() {
  const entry = getPageSeo("/aaranya");

  return (
    <main className="pt-24 lg:pt-32">
      <Seo entry={entry} />
      <Breadcrumbs items={entry.breadcrumbs} />
      <AaranyaHero />
      <AaranyaPhases />
      <AaranyaLifestyle />
      <AaranyaLocation />
      <AaranyaAmenities />
      <AaranyaResidences />
      <AaranyaGallery />
      <AaranyaContact />
    </main>
  );
}
