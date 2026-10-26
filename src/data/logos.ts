import infra from "../assets/logos/BHL-Infra.png";
import Landbase from "../assets/logos/BHL-Landbase-Logo-B.png";
import goBoundaryLogo from "../assets/logos/go-boundary-logo.png";
import realtorsLogo from "../assets/logos/BHL-Realtors.png";
import Newsletter from "../assets/logos/BHL-Newsletter.png";
import Studioz from "../assets/logos/BHL-Studioz.png";
import Vediya from "../assets/logos/vediya.png";
import LogiPrime from "../assets/logos/logi-prime.png";
import Aaranya from "../assets/logos/Aaranya-Logo.png";
import Mecproud from "../assets/logos/Mec-Proud.png";

export type PartnerLogo = {
  id: string;
  name: string;
  src: string;
};

/** Add or replace logos here — or drop files in public/assets/logos/ and use `/assets/logos/name.png` */
export const partnerLogos: PartnerLogo[] = [
  { id: "bhl", name: "BHL Infra", src: infra },
  { id: "bhl-footer", name: "BHL Landbase", src: Landbase },
  { id: "go-boundary", name: "Go Boundary", src: goBoundaryLogo },
  { id: "realtors", name: "BHL Realtors", src: realtorsLogo },
  { id: "logi-prime", name: "Logi Prime", src: LogiPrime },
  { id: "Aaranya", name: "Aaranya", src: Aaranya },
  { id: "Mec-Proud", name: "Mec Proud", src: Mecproud },
  { id: "Newsletter", name: "BHL Newsletter", src: Newsletter },
  { id: "Studioz", name: "BHL Studioz", src: Studioz },
  { id: "Vediya", name: "Vediya", src: Vediya },
];
