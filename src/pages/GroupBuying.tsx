import { useMemo, useState } from "react";
import rawData from "../data/group-buying-properties.json";
import { Helmet } from "react-helmet-async";
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

  const totalInvested = useMemo(
    () => participations.reduce((sum, p) => sum + (Number(p.investment_amount) || 0), 0),
    [participations]
  );

  const getParticipations = (propertyId: string) =>
    participations.filter((p) => p.property_id === propertyId);

  return (
    <>
    <Helmet>
        {/* Title */}
        <title>
          Group Buying Property Investment | BHL Group
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Invest in premium real estate through BHL Group's group buying model. Access residential, commercial, industrial and warehouse investment opportunities at builder-level pricing."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="group buying property India, real estate group investment, commercial property group buying, property investment platform India, BHL Group investments"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="BHL Group" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brickhillgroup.com/group-buying"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brickhillgroup.com/group-buying"
        />

        <meta
          property="og:title"
          content="Group Buying Real Estate Investment | BHL Group"
        />

        <meta
          property="og:description"
          content="Discover exclusive property investment opportunities through BHL Group's group buying platform."
        />

        <meta
          property="og:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Group Buying Property Investment | BHL Group"
        />

        <meta
          name="twitter:description"
          content="Invest together and unlock builder-level property pricing through BHL Group's group buying platform."
        />

        <meta
          name="twitter:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />
      </Helmet>
      <GroupBuyingHero />
      <div className="max-w-7xl mx-auto p-10">
        <h1 className="text-4xl font-bold mb-8">Group Buying Properties</h1>

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
    </>
  );
}
