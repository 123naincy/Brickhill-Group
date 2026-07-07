import { partnerLogos } from "../../data/logos";

type LogoSliderProps = {
  speed?: "slow" | "normal" | "fast";
};

export default function LogoSlider({ speed = "normal" }: LogoSliderProps) {
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="relative py-4 md:py-4 bg-white overflow-hidden border-y border-[#edf3fa]">
      <div className="logo-marquee">
        <div className={`logo-marquee-track logo-marquee-${speed}`}>
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="logo-marquee-item">
              <img
                src={logo.src}
                alt={logo.name}
                className="logo-marquee-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
