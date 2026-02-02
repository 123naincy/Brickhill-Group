import { useState } from "react";
import video1 from "../../assets/Banner-one.mp4";
import video2 from "../../assets/Banner-two.mp4";

const videos = [video1, video2];

export default function Hero() {
  const [active, setActive] = useState(0);

  const handleVideoEnd = () => {
    setActive(prev => (prev + 1) % videos.length); // 🔁 second → first
  };

  return (
    <section className="relative h-screen pt-20 overflow-hidden mt-20">

      <video
        key={active}   // forces reload
        className="absolute inset-0 w-full h-full object-cover"
        src={videos[active]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />

    </section>
  );
}
