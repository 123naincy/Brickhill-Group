import Hero from "../components/webinar/Hero";
import TrustIndicators from "../components/webinar/TrustIndicators";
import BenefitsSection from "../components/webinar/BenefitsSection";
import Testimonials from "../components/webinar/Testimonials";
import FAQSection from "../components/webinar/FAQSection";
import FinalCTA from "../components/webinar/FinalCTA";
import LearnSection from "../components/webinar/LearnSection";


const WebinarPage = () => {
  return (
    <>
     <Hero />
      <TrustIndicators />
      <LearnSection />
      <BenefitsSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      
    </>
  );
};

export default WebinarPage;
