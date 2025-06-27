
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ServicesPreview = () => {
  const services = [
    {
      title: "Chiropractic Treatment",
      description: "Specialized spine alignment and joint mobilization therapy",
      icon: "🦴",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Physiotherapy",
      description: "Complete rehabilitation with modern equipment and techniques",
      icon: "💪",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Neurotherapy",
      description: "Advanced treatment for brain and spine conditions",
      icon: "🧠",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Ayurvedic Treatment",
      description: "Traditional medicine for holistic healing and wellness",
      icon: "🌿",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Pain Management",
      description: "Comprehensive solutions for chronic and acute pain",
      icon: "⚡",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Rehabilitation",
      description: "Post-surgery and injury recovery programs",
      icon: "🏃‍♂️",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const conditions = [
    "Neck & Back Pain", "Sciatica", "Arthritis", "Stroke Recovery", 
    "Paralysis", "Sports Injuries", "Post-surgical Rehab", "Chronic Pain"
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive healthcare solutions combining modern physiotherapy, 
            traditional ayurvedic treatments, and advanced surgical care
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group hover:shadow-premium transform hover:scale-105 transition-all duration-300 animate-fade-in-up border-0 overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conditions We Treat */}
        <div className="bg-white rounded-2xl p-8 shadow-soft animate-fade-in-up">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Conditions We Treat
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {conditions.map((condition, index) => (
              <span 
                key={condition}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {condition}
              </span>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
