import Hero from "../components/home/Hero";
import LogoSlider from "../components/home/LogoSlider";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Testimonials from "../components/home/Testimonials";
import AboutSection from "../components/About";
import BlogSection from "../components/Blog";
import PopupForm from "../components/home/PopupForm";
import BusinessTabs from "../components/home/BusinessTabs";
import FAQPage from "../components/home/FAQPage";
import Seo from "../components/seo/Seo";
import { getPageSeo } from "../seo/manifest";

export default function Home() {
  return (
    <main>
      <Seo entry={getPageSeo("/")} />
      <Hero />
      <BusinessTabs />
      <PopupForm />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <BlogSection />
      <FAQPage />
      <LogoSlider />
    </main>
  );
}
