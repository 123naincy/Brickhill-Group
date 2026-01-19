import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Testimonials from "../components/home/Testimonials";
import AboutSection from "../components/About";
import Gallery from "../components/Gallery";
import BlogSection from "../components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <Gallery />
      <BlogSection />
    </>
  );
}
