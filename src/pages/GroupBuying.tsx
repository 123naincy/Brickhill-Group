import { useState } from "react";
import rawData from "../data/group-buying-properties.json";
import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import { getPageSeo } from "../seo/manifest";
import { PropertyCard } from "../components/groupBuying/PropertyCard";
import { PropertyModal } from "../components/groupBuying/PropertyModal";
import GroupBuyingHero from "../components/groupBuying/GroupBuyingHero";
import GroupBuyingCTA from "../components/groupBuying/GroupBuyingCTA";
import HowGroupBuyingFlow from "../components/groupBuying/HowGroupBuyingFlow";
import HowItWorks from "../components/groupBuying/HowItWorks";

import type { GroupBuyingData, Participation, Property } from "../data/types/groupBuying";

// ✅ ensure JSON matches expected type
const data = rawData as GroupBuyingData;

export default function GroupBuying() {
  const [participations, setParticipations] = useState<Participation[]>(
    data.participations || []
  );

  const [selected, setSelected] = useState<Property | null>(null);

  const getParticipations = (propertyId: string) =>
    participations.filter((p) => p.property_id === propertyId);

  const entry = getPageSeo("/group-buying");

  return (
    <main className="pt-24 lg:pt-32">
      <Seo entry={entry} />
      <Breadcrumbs items={entry.breadcrumbs} />
      <GroupBuyingHero />
      <div className="max-w-7xl mx-auto p-10">
        <h2 className="text-4xl font-bold mb-8 text-[#073762]">Group Buying Properties</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {(data.properties || []).map((p) => (
            <PropertyCard
              key={p.id}
              property={p}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>

        {selected && (
          <PropertyModal
            property={selected}
            participations={getParticipations(selected.id)}
            onClose={() => setSelected(null)}
            onSuccess={(newParticipation) =>
              setParticipations((prev) => [...prev, newParticipation])
            }
          />
        )}
      </div>

      <HowGroupBuyingFlow />
      <HowItWorks />
      <GroupBuyingCTA />
    </main>
  );
}
