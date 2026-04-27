
import { Header } from "@/components/Header";
import { DoctorsSection } from "@/components/DoctorsSection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Excellence",
      description: "Multiple certifications and specialized training programs completed"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "15000+ Happy Patients",
      description: "Successfully treated patients across Vadodara and surrounding areas"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "Patient-centered approach with personalized treatment plans"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "High Success Rate",
      description: "99% patient satisfaction and successful recovery outcomes"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in comprehensive healthcare with a perfect blend of
              modern physiotherapy and traditional ayurvedic healing
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-premium border-0 animate-fade-in-up">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To provide exceptional healthcare services that combine the best of modern
                  physiotherapy, neurological rehabilitation, and traditional ayurvedic medicine
                  to help our patients achieve optimal health and wellness.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to delivering personalized care with compassion,
                  utilizing advanced treatment techniques and maintaining the highest
                  standards of medical excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-premium border-0 animate-fade-in-up animation-delay-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To be the premier healthcare destination in Gujarat, recognized for our
                  innovative treatment approaches, exceptional patient outcomes, and
                  comprehensive wellness solutions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We envision a healthier community where every individual has access to
                  quality healthcare that addresses not just symptoms, but promotes
                  overall well-being and quality of life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized excellence in healthcare delivery and patient satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="text-center shadow-soft hover:shadow-premium transition-all duration-300 animate-fade-in-up border-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <DoctorsSection />

      {/* Our Unique Treatment Approach */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 flex items-center justify-center gap-3">
              <span className="text-yellow-500">🌟</span> OUR UNIQUE TREATMENT APPROACH
            </h2>
            <div className="w-32 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft text-left border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg md:text-xl">
                At Dev Physiotherapy & Healthcare Center, we believe that the human body works as an interconnected system through neurological pathways and movement chains. <strong className="text-primary">Pain in one area is often linked to dysfunction in another part of the body.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                Under the guidance and leadership of Dr. Hitesh D. Prajapati, we follow a specialized chain-based assessment and treatment approach, developed through extensive clinical experience and research on 15,000+ patients.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span>🔬</span> What Makes Our Approach Different?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Detailed assessment beyond the painful area",
                    "Identification of interconnected body segments (muscle & nerve chains)",
                    "Prediction of future problem areas",
                    "Complete whole-body treatment planning",
                    "Focus on root cause treatment with long-term recovery, not temporary relief"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <span className="text-secondary mt-0.5">✔</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary space-y-4 mt-8">
                <p className="text-gray-800 font-medium flex items-start gap-3">
                  <span className="text-secondary text-xl">👉</span> We don't just treat where it hurts — we treat why it hurts.
                </p>
                <p className="text-gray-800 font-medium flex items-start gap-3">
                  <span className="text-secondary text-xl">👉</span> This method allows us to treat the actual source of the problem, ensuring better and lasting results.
                </p>
                <p className="text-gray-800 font-medium flex items-start gap-3">
                  <span className="text-secondary text-xl">👉</span> These techniques are continuously refined by Dr. Hitesh Prajapati through years of hands-on clinical practice and patient outcomes.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>

              <div className="w-full rounded-2xl overflow-hidden shadow-premium border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 my-6">
                <img src="/poster.jpeg" alt="Why Full Body Treatment Approach" className="w-full h-auto object-cover" />
              </div>

              <Card className="border-0 shadow-soft hover:shadow-premium transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                    <span>🏠</span> Consistent Quality – Clinic & Home Visit
                  </h3>
                  <p className="text-gray-600 mb-4">We ensure the same high standard of care and advanced treatment at:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-secondary">✔</span> <strong>In-Clinic Sessions</strong> (Structured Therapy)
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-secondary">✔</span> <strong>Home Visit Services</strong> (One-to-One Care)
                    </li>
                  </ul>
                  <p className="text-primary font-semibold flex items-center gap-2 bg-primary/5 p-3 rounded-lg text-sm">
                    <span className="text-secondary">👉</span> Delivering convenience without compromising quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Card className="border-0 shadow-soft hover:shadow-premium transition-shadow bg-primary text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <CardContent className="p-8 h-full flex flex-col justify-center relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span>🎯</span> OUR TREATMENT GOAL
                </h3>
                <ul className="space-y-4">
                  {[
                    "Eliminate pain from the root cause",
                    "Restore full-body function",
                    "Prevent recurrence of the condition",
                    "Provide long-term, sustainable recovery"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-medium bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="bg-white p-8 rounded-3xl text-center shadow-soft flex flex-col justify-center border-4 border-gray-50">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center justify-center gap-3">
                <span>💬</span> Our Promise
              </h2>
              <p className="text-2xl font-medium leading-relaxed text-gray-700 italic">
                "We don't just treat the pain — <br/>
                <span className="text-secondary font-bold inline-block mt-4 not-italic">We understand the chain behind it and treat the cause.</span>"
              </p>
            </div>
          </div>

          {/* Why Choose Our Doctors? */}
          <div className="mt-16 bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100 animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-8">
                Why Choose Our Doctors?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-md">
                    🏆
                  </div>
                  <h4 className="font-semibold text-primary mb-2 text-lg">Certified Experts</h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Highly qualified professionals with multiple certifications
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-md">
                    🎯
                  </div>
                  <h4 className="font-semibold text-primary mb-2 text-lg">Specialized Care</h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Focused expertise in neurophysiotherapy and ayurvedic medicine
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-md">
                    ❤️
                  </div>
                  <h4 className="font-semibold text-primary mb-2 text-lg">Patient-Centered</h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Personalized treatment plans for optimal recovery
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Our Team Stands Out Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="text-yellow-500">🌟</span> WHY OUR TEAM STANDS OUT
              </h2>
              <ul className="space-y-4">
                {[
                  "Experienced & Highly Qualified Professionals",
                  "Advanced & Innovative Treatment Techniques",
                  "Personalized Patient-Centered Care",
                  "Integrated Physiotherapy + Ayurveda Approach",
                  "Trusted by Thousands of Patients"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl shadow-sm border border-gray-100">
                    <span className="text-secondary mt-0.5">✔</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 shadow-soft relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 relative z-10">
                  <span>💡</span> OUR MISSION
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                  To provide high-quality, ethical, and result-oriented healthcare through a perfect blend of modern physiotherapy and traditional healing systems, ensuring complete recovery and long-term wellness.
                </p>
              </div>
            </div>

          </div>

          <div className="bg-primary text-white p-8 md:p-12 rounded-3xl text-center shadow-premium animate-fade-in-up relative overflow-hidden" style={{ animationDelay: '200ms' }}>
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
             <div className="relative z-10 max-w-2xl mx-auto space-y-6">
               <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
                 <span>📞</span> Book Your Appointment Today
               </h2>
               <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">
                 Experience expert care with a personalized treatment approach designed for complete recovery.
               </p>
               <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 max-w-xs sm:max-w-none mx-auto">
                 <a href="tel:+919724385791" className="w-full sm:w-auto">
                   <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-6 md:px-8 py-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 w-full">
                     <span className="text-xl">📲</span> Call
                   </Button>
                 </a>
                 <a href="https://wa.me/919724385791" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                   <Button className="bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold px-6 md:px-8 py-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 w-full">
                     <span className="text-xl">💬</span> WhatsApp
                   </Button>
                 </a>
                 <Link to="/contact" className="w-full sm:w-auto">
                   <Button variant="outline" className="border-4 border-white text-white hover:bg-white hover:text-primary font-bold px-6 md:px-8 py-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 bg-transparent w-full">
                     <span className="text-xl">🏥</span> Visit Clinic
                   </Button>
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
