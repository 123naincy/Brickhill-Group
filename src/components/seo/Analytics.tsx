import { useEffect } from "react";

/**
 * Analytics is intentionally inactive until real IDs are provided.
 * Set one of these in the environment (do not commit live IDs to source):
 *   VITE_GA_MEASUREMENT_ID=G-XXXXXXXX
 *   VITE_GTM_ID=GTM-XXXXXXX
 * If both are set, only Google Tag Manager is loaded so the same hit is not sent twice.
 * Add the GA4 tag inside GTM when using a container.
 */
function isGaId(value: string | undefined): value is string {
  return !!value && /^G-[A-Z0-9]+$/.test(value);
}

function isGtmId(value: string | undefined): value is string {
  return !!value && /^GTM-[A-Z0-9]+$/.test(value);
}

export default function Analytics() {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
    const gtmId = import.meta.env.VITE_GTM_ID as string | undefined;

    if (isGtmId(gtmId)) {
      if (document.getElementById("gtm-script")) return;
      const script = document.createElement("script");
      script.id = "gtm-script";
      script.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`;
      document.head.appendChild(script);
      return;
    }

    if (isGaId(gaId) && !document.getElementById("ga-script")) {
      const loader = document.createElement("script");
      loader.id = "ga-script";
      loader.async = true;
      loader.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(loader);

      const inline = document.createElement("script");
      inline.id = "ga-inline";
      inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`;
      document.head.appendChild(inline);
    }
  }, []);

  return null;
}
