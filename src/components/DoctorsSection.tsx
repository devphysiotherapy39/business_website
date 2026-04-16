import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Award, GraduationCap } from "lucide-react";

export const DoctorsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
                  {/* Doctor Banner Image */}
<div className="w-full max-w-6xl mx-auto mb-12">
  <img
    src="/assets/services/Poster2.jpeg"
    alt="Clinic Doctors"
    className="
      w-full
      h-auto
      rounded-2xl
      shadow-lg
      object-contain
    "
  />
</div>
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our team of highly qualified specialists brings years of experience
            and expertise to provide you with the best possible care
          </p>

          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Doctor Cards: always vertical */}
        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          {/* Dr. Hitesh D. Prajapati */}
          <Card className="overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 animate-fade-in-up border-0 bg-gradient-to-br from-white to-blue-50/30">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <img
                  src="/drhiteshprajapati.jpeg"
                  alt="Dr. Hitesh D. Prajapati"
                  className="w-32 h-32 object-cover object-top bg-gradient-primary rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-lg"
                />

                <h3 className="text-2xl font-bold text-primary mb-2">
                  Dr. Hitesh D. Prajapati
                </h3>

                <div className="bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <p className="text-primary font-semibold">MPT (Neuro), BPT, MIAP, GSCPT
                    MIAFT, YTTC, NIBS</p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center gap-2 text-gray-700">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm">Consultant Neurophysiotherapist</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-700">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">Brain & Spine Specialist</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-700">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">Chiropractor</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 w-full mb-6 shadow-soft text-left">
                  <h4 className="font-semibold text-primary mb-2">Brief Introduction:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                    <li>Postgraduate: Master of Physiotherapy in Neurological & Psychosomatic Disorders from Rajiv Gandhi University of Health Science, Bangalore in 2017.</li>
                    <li>Graduated in Bachelor of Physiotherapy from Maharaja Sayajirao University in 2011.</li>
                    <li>Completed 6 months Yoga teacher training course from MSU in 2013.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 w-full mb-6 shadow-soft text-left">
                  <h4 className="font-semibold text-primary mb-2">Professional Certifications & Advanced Trainings:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-decimal pl-5">
                    <li>Certificate in Manipulation Therapy (CMT)
                      Manual Therapy Academy, India
                      Completed Continuing Professional Development in
                      “Modified Chiropractic & Osteopathic Manipulation Therapy”
                      | Vadodara |  2024
                      This training includes advanced hands-on techniques in spinal and peripheral joint manipulation, focusing on safe and evidence-based manual therapy practice.</li>
                    <li>5-day Seminar Cum Workshop on Non-invasive Brain Stimulation, Dry needle based Brain stimulation and Neuromuscular Brain Mapping by Advance Institute of Neurosciences, Hyderabad, 2021.</li>
                    <li>Workshop of Aerobics Instructor Training + Fitness-Diet and Nutrition by Indian Academy of Fitness Training, Mangalore, 2012.</li>
                    <li>Participated in CME On Neuro Regenerative Rehabilitation Therapy (NRRT) by Neurogen Brain & Spine Institute, 2012.</li>
                    <li>Seminar on WOMEN'S HEALTH-A PSYCHOPHYSICAL APPROACH by Indian Association of Physiotherapists (IAP), 2012.</li>
                    <li>Workshop on Comprehensive Approach in Low Back pain and Shoulder pain syndromes by IAP, 2011.</li>
                    <li>Seminar on Myofascial release and Muscle energy techniques at SSGH by IAP, 2010.</li>
                    <li>Seminar on Current Concepts in Musculoskeletal & Sports physiotherapy at SSGH by IAP, 2009.</li>
                    <li>Seminar on Integrative Manual therapy utilising strain counter Strain technique at SSGH by IAP, 2011.</li>
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                  <Phone className="w-4 h-4" />
                  <span>97243 85791</span>
                </div>

                <Button
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                  onClick={() => window.open('tel:9724385791')}
                >
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dr. Bhumika H. Prajapati */}
          <Card className="overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-200 border-0 bg-gradient-to-br from-white to-orange-50/30">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <img
                  src="/DrBhumikaprajapati.jpeg"
                  alt="Dr. Bhumika H. Prajapati"
                  className="w-32 h-32 object-cover object-top bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-lg"
                />

                <h3 className="text-2xl font-bold text-primary mb-2">
                  Dr. Bhumika H. Prajapati
                </h3>

                <div className="bg-orange-100 px-4 py-2 rounded-full mb-4">
                  <p className="text-orange-600 font-semibold">BAMS, CCDE</p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center gap-2 text-gray-700">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm">Ayurvedic Consultant</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-700">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">Ayush Premium Certified</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 w-full mb-6 shadow-soft text-left">
                  <h4 className="font-semibold text-primary mb-2">Brief Introduction:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                    <li>Graduated Bachelor of Ayurvedic Medicine & Surgery from Gujarat Ayurved University, J. S. Ayurved Mahavidyalaya, Nadiad, Gujarat in 2011.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 w-full mb-6 shadow-soft text-left">
                  <h4 className="font-semibold text-primary mb-2">Certifications & Trainings:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-decimal pl-5">
                    <li>Participated in District Hospital Physicians Training (DHPT) Program at GVK Emergency Management and Research Institute Ahmedabad by Stanford School of Medicine USA, 2017.</li>
                    <li>Certification course in Diabetes Education Academy (DMDEA) & IADE, June 2014-March 2015.</li>
                    <li>Training course on Integrated Management of Neonatal and Childhood Illnesses by NHM, 2015.</li>
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                  <Phone className="w-4 h-4" />
                  <span>94285 61294</span>
                </div>

                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
                  onClick={() => window.open('tel:9428561294')}
                >
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 animate-fade-in-up animation-delay-400">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Why Choose Our Doctors?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-3">
                  🏆
                </div>
                <h4 className="font-semibold text-primary mb-2">Certified Experts</h4>
                <p className="text-sm text-gray-600 text-center">
                  Highly qualified professionals with multiple certifications
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl mb-3">
                  🎯
                </div>
                <h4 className="font-semibold text-primary mb-2">Specialized Care</h4>
                <p className="text-sm text-gray-600 text-center">
                  Focused expertise in neurophysiotherapy and ayurvedic medicine
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl mb-3">
                  ❤️
                </div>
                <h4 className="font-semibold text-primary mb-2">Patient-Centered</h4>
                <p className="text-sm text-gray-600 text-center">
                  Personalized treatment plans for optimal recovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};