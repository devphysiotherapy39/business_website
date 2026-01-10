
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Patel",
      condition: "Back Pain Recovery",
      text: "After years of chronic back pain, Dr. Hitesh's treatment has given me my life back. The combination of physiotherapy and chiropractic care worked wonderfully.",
      rating: 5,
      location: "Gotri, Vadodara"
    },
    {
      name: "Priya Sharma",
      condition: "Post-Stroke Rehabilitation",
      text: "The neurophysiotherapy sessions helped my father recover remarkably after his stroke. Dr. Hitesh's expertise and care made all the difference.",
      rating: 5,
      location: "Vasna, Vadodara"
    },
    {
      name: "Amit Gandhi",
      condition: "Sports Injury",
      text: "As a cricket player, the sports injury treatment I received was exceptional. Quick recovery and professional guidance throughout the process.",
      rating: 5,
      location: "Alkapuri, Vadodara"
    },
    {
      name: "Kavita Desai",
      condition: "Ayurvedic Treatment",
      text: "Dr. Bhumika's ayurvedic treatment for my chronic digestive issues was incredibly effective. Natural healing at its best!",
      rating: 5,
      location: "Manjalpur, Vadodara"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real stories from real patients who have experienced exceptional care 
            and successful treatment outcomes at our clinic
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="shadow-soft hover:shadow-premium transition-all duration-300 animate-fade-in-up border-0 bg-gradient-to-br from-white to-gray-50/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.condition}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-600">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">13+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-gray-600">Convenient Locations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-gray-600">Recovery Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};
