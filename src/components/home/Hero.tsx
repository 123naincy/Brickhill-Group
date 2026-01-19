import { useEffect, useState } from "react";
import banner1 from "../../assets/Banner-1.jpg";
import banner2 from "../../assets/Banner-2.jpg";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen pt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 mt-20"
        style={{ backgroundImage: `url(${active === 0 ? banner1 : banner2})` }}
      />
    </section>
  );
}
