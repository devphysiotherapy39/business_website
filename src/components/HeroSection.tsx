import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 medical-pattern opacity-5 z-10"></div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-10"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-7xl font-bold text-primary mb-4 leading-tight">
              Dev Physiotherapy
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-6">
              & Healthcare Center
            </h2>
          </div>

          {/* Tagline */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4 mb-8">
              <span className="px-4 py-1.5 md:px-6 md:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-base md:text-lg font-medium shadow-md">
                Ayurvedic
              </span>
              <span className="text-xl md:text-2xl font-light text-gray-400 hidden sm:block">|</span>
              <span className="px-4 py-1.5 md:px-6 md:py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-base md:text-lg font-medium shadow-md">
                Surgical
              </span>
            </div>
          </div>

          {/* Slogan */}
          <div className="animate-fade-in-up animation-delay-400">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10 shadow-premium mx-2 sm:mx-0">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-primary mb-2 leading-tight">
                Center for Pain & Paralysis
              </h3>
              <p className="text-lg md:text-2xl text-gray-600 font-medium">
                Life is Motion — Motion is Life
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-10 px-4">
              <Button 
                asChild
                size="lg" 
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-6 py-6 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">Take Prior Appointment</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-6 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              >
                <Link to="/contact">Home Visit Available</Link>
              </Button>
            </div>
          </div>

          {/* Hours */}
          <div className="animate-fade-in-up animation-delay-800">
            <div className="bg-primary text-white rounded-xl p-6 inline-block shadow-lg">
              <h4 className="text-lg font-semibold mb-2">Consulting Hours</h4>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">Monday - Saturday</span></p>
                <p>9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float z-20"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float animation-delay-400 z-20"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-primary/20 rounded-full animate-float animation-delay-200 z-20"></div>
    </section>
  );
};