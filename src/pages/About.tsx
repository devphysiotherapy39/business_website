
import { Header } from "@/components/Header";
import { DoctorsSection } from "@/components/DoctorsSection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Excellence",
      description: "Multiple certifications and specialized training programs completed"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "10000+ Happy Patients",
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

      <Footer />
    </div>
  );
};

export default About;
