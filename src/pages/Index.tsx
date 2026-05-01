
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesPreview } from "@/components/ServicesPreview";
import { DoctorsSection } from "@/components/DoctorsSection";
import { BranchesSection } from "@/components/BranchesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { TreatmentApproachSection } from "@/components/TreatmentApproachSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesPreview />
      <DoctorsSection />
      <TreatmentApproachSection />
      <BranchesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
