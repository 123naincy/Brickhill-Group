// ✅ Project Images Imports
import edenStreet from "../assets/projects/eden-properties.jpeg";
import bridalSquare from "../assets/projects/bridal-about.png";
import panipatIndustrial from "../assets/projects/industrial.jpg";
import logiPrime from "../assets/projects/warehouse.jpg";
import kbdPlaza from "../assets/projects/plaza-117.png";
import himalayanCity from "../assets/projects/himalayan-city.png";
import yashHomes from "../assets/projects/yash-homes.png";

import commercialFallback from "../assets/projects/commercial.png";
import residentialFallback from "../assets/projects/residential.png";

/* ✅ All Images Map */
export const allImages: Record<string, string> = {
  // Commercial Projects
  edenStreet,
  bridalSquare,
  kbdPlaza,
  kbdPlaza21: commercialFallback,

  // Industrial / Warehouse
  panipatIndustrial,
  logiPrime,

  // Residential Projects
  himalayanCity,
  yashHomes,

  // ✅ Himalayan City 2
  kbdHimalayanCity2: himalayanCity,

  // Fallback Images
  commercialFallback,
  residentialFallback,
};

/* ✅ Default fallback image */
export const fallbackImage = commercialFallback;
