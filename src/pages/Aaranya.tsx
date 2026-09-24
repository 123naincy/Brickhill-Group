import React from "react";
import AaranyaHero from "../components/Aaranya/AaranyaHero";
import AaranyaPhases from "../components/Aaranya/AaranyaPhases";
import AaranyaLifestyle from "../components/Aaranya/AaranyaLifestyle";
import AaranyaLocation from "../components/Aaranya/AaranyaLocation";
import AaranyaAmenities from "../components/Aaranya/AaranyaAmenities";
import AaranyaResidences from "../components/Aaranya/AaranyaResidences";
import AaranyaGallery from "../components/Aaranya/AaranyaGallery";
import AaranyaContact from "../components/Aaranya/AaranyaContact";

const App: React.FC = () => {
  return (
    <>
      <AaranyaHero />
      <AaranyaPhases />
     <AaranyaLifestyle />
     <AaranyaLocation />
     <AaranyaAmenities />
     <AaranyaResidences />
     <AaranyaGallery />
     <AaranyaContact />
    </>
  );
};

export default App;
