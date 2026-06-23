// ✅ imports
import edenStreet from "../assets/projects/eden-properties.jpeg";
import bridalSquare from "../assets/projects/bridal-about.png";
import panipatIndustrial from "../assets/projects/industrial.jpg";
import logiPrime from "../assets/projects/warehouse.jpg";
import kbdPlaza from "../assets/projects/plaza-117.png";
import himalayanCity from "../assets/projects/himalayan-city.png";
import yashHomes from "../assets/projects/yash-homes.png";
import Goa from "../assets/projects/goa.jpg";
import commercialFallback from "../assets/projects/commercial.png";
import residentialFallback from "../assets/projects/residential.png";

// ✅ MUST be named export
export const allImages: Record<string, string> = {
  edenStreet,
  bridalSquare,
  panipatIndustrial,
  logiPrime,
  kbdPlaza,
  himalayanCity,
  yashHomes,
  Goa,
  // reuse images (optional)
  kbdPlaza21: kbdPlaza,
  kbdHimalayanCity2: himalayanCity,
  yashHomes2: yashHomes,

  commercialFallback,
  residentialFallback,
};

// ✅ fallback export
export const fallbackImage = commercialFallback;