import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeTab, setActiveTab] = useState('physiotherapy');

  const physiotherapyServices = [
    {
      title: "Chiropractic Treatment",
      description: "Specialized spine alignment and joint mobilization for optimal musculoskeletal health",
      image: "/assets/services/ChiropracticTreatment.png",
      features: ["Spinal adjustments", "Joint mobilization", "Postural correction", "Pain relief"]
    },
    {
      title: "Electrotherapy",
      description: "Advanced electrical stimulation techniques for pain management and muscle rehabilitation",
      image: "/assets/services/Electrotherapy.png",
      features: ["TENS therapy", "Ultrasound treatment", "IFT application", "SWD therapy", "Spine Traction", "Wax Bath", "IG/SF-Muscle and Nerve Stimulation", "Slimming Machine Therapy for Weight Loss"]
    },
    {
      title: "Exercise Therapy",
      description: "Customized therapeutic exercises for strength, flexibility, and functional improvement",
     image: "/assets/services/Exercise Therapy.png",
      features: ["Strengthening exercises", "Stretching programs", "Balance training", "Gait training"]
    },
    {
      title: "Manual Therapy",
      description: "Hands-on techniques for tissue mobilization and joint manipulation",
     image: "/assets/services/ManualTherapy.png",
      features: ["Myofascial release", "Trigger point therapy", "Joint mobilization", "Soft tissue massage"]
    },
    {
      title: "Neurological Rehabilitation",
      description: "Specialized treatment for neurological conditions and brain injuries",
     image: "/assets/services/Neurological Rehabilitation.png",
      features: ["Stroke rehabilitation", "Parkinson's therapy", "Multiple sclerosis care", "Spinal cord injury"]
    },
    {
      title: "Sports Physiotherapy",
      description: "Comprehensive care for sports injuries and performance enhancement",
      image: "/assets/services/Sports Physiotherapy.png",
      features: ["Injury prevention", "Performance optimization", "Return to sport programs", "Biomechanical analysis"]
    },
    {
      title: "Other Services",
      description: "Other services offered by the clinic",
      image: "/assets/services/Other Services.png",
      features: ["Geriatric Physiotherapy", "Paediatric Physiotherapy", "MFR- Myofascial Release", "Acupressure", "Acupuncture", "Sensory Stimulation", "Shock wave Therapy", "Mackenzie/Pilates", "Neurodevelopmental Therapy", "PNF-Proprioceptive Neuromuscular Facilitation", "Aerobics"]
    },

   {
  title: "Yoga Therapy & Wellness Classes",
  description: "Holistic yoga sessions designed to improve flexibility, posture, mental relaxation, and overall physical wellness under professional physiotherapy guidance. Available in both offline and online modes.",
  image: "/assets/services/Yoga.jpeg",
      features: ["Therapeutic Yoga Sessions",
    "Offline & Online Classes",
    "Posture Correction Yoga",
    "Stress & Anxiety Relief",
    "Flexibility & Mobility Improvement",
    "Breathing & Meditation Techniques",
    "Pain Management Support",
    "Beginner Friendly Programs"]
    }
  ];

  const ayurvedicServices = [
  {
    title: "Panchakarma Therapy",
    description: "Traditional detoxification and rejuvenation treatments for complete wellness",
    image: "/assets/services/panchakarma.jpg",
    features: [
      "Abhyanga massage",
      "Shirodhara therapy",
      "Nasya treatment",
      "Basti therapy"
    ]
  },
  {
    title: "Chronic Disease Management",
    description: "Natural treatment approaches for long-term health conditions",
    
    features: [
      "Diabetes care",
      "Hypertension management",
      "Arthritis treatment",
      "Digestive disorders"
    ]
  },
  {
    title: "Women's Health",
    description: "Specialized ayurvedic care for women's unique health needs",
    image: "/assets/services/women.png",
    features: [
      "Menstrual disorders",
      "Fertility support",
      "Pregnancy care",
      "Menopausal support"
    ]
  },

  {
    title: "Skin & Hair Care",
    description: "Natural treatments for dermatological and cosmetic concerns",
    image: "/assets/services/skinhair.png",
    features: [
      "Acne treatment",
      "Hair loss therapy",
      "Skin rejuvenation",
      "Anti-aging care"
    ]
  },
    {
    title: "Stress & Mental Wellness",
    description: "Holistic approaches to mental health and stress management",
   
    features: [
      "Anxiety relief",
      "Depression support",
      "Sleep disorders",
      "Mind-body balance"
    ]
  },
  {
    title: "Lifestyle Counseling",
    description: "Personalized guidance for optimal health and wellness",
    image: "/assets/services/lifestyle.jpg",
    features: [
      "Diet planning",
      "Exercise recommendations",
      "Lifestyle modifications",
      "Preventive care"
    ]
  }
];
  const conditions = [
    "Neck & Shoulder Pain", "Lower Back Pain", "Sciatica", "Arthritis",
    "Stroke Recovery", "Paralysis", "Sports Injuries", "Post-surgical Rehabilitation",
    "Chronic Pain", "Headaches & Migraines", "Vertigo", "Neuropathy",
    "Diabetes", "Hypertension", "Digestive Issues", "Skin Problems"
  ];

  const currentServices =
    activeTab === 'physiotherapy'
      ? physiotherapyServices
      : ayurvedicServices;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions combining modern medical techniques
              with traditional healing practices
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 animate-fade-in-up px-4">
            <div className="bg-gray-100 rounded-2xl sm:rounded-full p-1.5 flex flex-col sm:flex-row w-full max-w-md sm:max-w-max">
              <button
                onClick={() => setActiveTab('physiotherapy')}
                className={`px-6 py-3 sm:px-8 rounded-xl sm:rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === 'physiotherapy'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                Physiotherapy Services
              </button>

              <button
                onClick={() => setActiveTab('ayurvedic')}
                className={`px-6 py-3 sm:px-8 rounded-xl sm:rounded-full font-semibold transition-all duration-300 text-sm sm:text-base mt-1 sm:mt-0 ${
                  activeTab === 'ayurvedic'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                Ayurvedic Services
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentServices.map((service: any, index) => (
              <Card
                key={service.title}
                className="shadow-soft hover:shadow-premium transition-all duration-300 animate-fade-in-up border-0 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
               <CardContent className="p-6">

  {/* FULL IMAGE FOR YOGA SERVICE */}
  {service.title === "Yoga Therapy & Wellness Classes" ? (

    <div className="overflow-hidden rounded-lg">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    </div>

  ) : (

    <>
      {service.image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
        {service.title}
      </h3>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            {feature}
          </li>
        ))}
      </ul>
    </>

  )}

</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses a wide range of health conditions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animation-delay-200">
            {conditions.map((condition) => (
              <span
                key={condition}
                className="px-4 py-2 bg-white text-primary rounded-full text-sm font-medium shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default border border-primary/20"
              >
                {condition}
              </span>
            ))}
          </div>

          <div className="text-center animate-fade-in-up animation-delay-400">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;