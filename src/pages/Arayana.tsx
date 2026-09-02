import React from "react";
import ArayanaHero from "../components/Arayana/ArayanaHero";
import ArayanaPhases from "../components/Arayana/ArayanaPhases";
import ArayanaLifestyle from "../components/Arayana/ArayanaLifestyle";
import ArayanaLocation from "../components/Arayana/ArayanaLocation";
import ArayanaAmenities from "../components/Arayana/ArayanaAmenities";
import ArayanaResidences from "../components/Arayana/ArayanaResidences";
import ArayanaGallery from "../components/Arayana/ArayanaGallery";
import ArayanaContact from "../components/Arayana/ArayanaContact";

const App: React.FC = () => {
  return (
    <>
      <ArayanaHero />
<ArayanaPhases />
     <ArayanaLifestyle />
     <ArayanaLocation />
     <ArayanaAmenities />
     <ArayanaResidences />
     <ArayanaGallery />
     <ArayanaContact />
    </>
  );
};

export default App;
