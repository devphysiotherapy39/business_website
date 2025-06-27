
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 medical-pattern opacity-5"></div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Main Heading */}
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                  Dev Physiotherapy
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-700 mb-6">
                  & Healthcare Center
                </h2>
              </div>

              {/* Tagline */}
              <div className="animate-fade-in-up animation-delay-200">
                <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                  <span className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-lg font-medium">
                    Ayurvedic
                  </span>
                  <span className="text-2xl font-light text-gray-400 hidden md:block">|</span>
                  <span className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-lg font-medium">
                    Surgical
                  </span>
                </div>
              </div>

              {/* Slogan */}
              <div className="animate-fade-in-up animation-delay-400">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-premium">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-primary rounded-full animate-float"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2">
                    Center for Pain & Paralysis
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 font-medium">
                    Life is Motion — Motion is Life
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 animate-fade-in-up animation-delay-200 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 animate-pulse-glow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80"
                  alt="Professional physiotherapy treatment"
                  className="relative w-full h-[280px] lg:h-[350px] object-cover rounded-2xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center animate-fade-in-up animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Take Prior Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Home Visit Available
              </Button>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center animate-fade-in-up animation-delay-800">
            <div className="bg-primary text-white rounded-xl p-6 inline-block shadow-lg">
              <h4 className="text-lg font-semibold mb-2">Consulting Hours</h4>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">Monday - Saturday</span></p>
                <p>Morning: 9:00 AM - 1:00 PM</p>
                <p>Evening: 4:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float animation-delay-400"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-primary/20 rounded-full animate-float animation-delay-200"></div>
    </section>
  );
};
