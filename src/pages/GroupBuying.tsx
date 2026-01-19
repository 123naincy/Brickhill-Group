import { useState } from 'react';
import data from '../data/group-buying-properties.json';
import { PropertyCard } from '../components/groupBuying/PropertyCard';
import { PropertyModal } from '../components/groupBuying/PropertyModal';
import { GroupBuyingStats } from '../components/groupBuying/GroupBuyingStats';
import GroupBuyingHero from '../components/groupBuying/GroupBuyingHero';
import GroupBuyingCTA from '../components/groupBuying/GroupBuyingCTA';
import HowGroupBuyingFlow from "../components/groupBuying/HowGroupBuyingFlow"
import HowItWorks from '../components/groupBuying/HowItWorks';
type Participation = { id:string; property_id:string; participant_name:string; participant_email:string; investment_amount:number; created_at:string; };


export default function GroupBuying(){
const [participations,setParticipations]=useState<Participation[]>(data.participations);
const [selected,setSelected]=useState<any>(null);


const stats = (id:string)=>{
const list = participations.filter(p=>p.property_id===id);
return { participantCount:list.length, totalInvested:list.reduce((s,p)=>s+p.investment_amount,0), list };
};


return (
 <>
<GroupBuyingHero />
  <GroupBuyingStats
  propertiesCount={data.properties.length}
  investorsCount={participations.length}
  totalInvested={participations.reduce((s,p)=>s+p.investment_amount,0)}
  avgInvestment={
    participations.length === 0 ? 0 :
    participations.reduce((s,p)=>s+p.investment_amount,0) / participations.length
  }
/>

<div className="max-w-7xl mx-auto p-10">
<h1 className="text-4xl font-bold mb-8">Group Buying Properties</h1>
<div className="grid md:grid-cols-3 gap-8">
{data.properties.map(p=>{ const s=stats(p.id); return (
<PropertyCard key={p.id} property={p} participantCount={s.participantCount} totalInvested={s.totalInvested} onClick={()=>setSelected(p)} />
);})}
</div>


{selected && <PropertyModal property={selected} participations={stats(selected.id).list} onClose={()=>setSelected(null)} onSuccess={p=>setParticipations(prev=>[...prev,p])} />}
</div>
<HowGroupBuyingFlow />
<HowItWorks />
<GroupBuyingCTA />
 </>
);
}