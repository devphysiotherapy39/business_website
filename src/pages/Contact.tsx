
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { BranchesSection } from "@/components/BranchesSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your journey to better health? Get in touch with our
              expert team today to schedule your consultation.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <BranchesSection />
      <Footer />
    </div>
  );
};

export default Contact;
