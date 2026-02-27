import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

/* ================================
   TypeScript Interface
================================ */
interface Testimonial {
  name: string;
  condition: string;
  text: string;
  rating: number;
  location: string;
  reviewLink?: string;
}

export const TestimonialsSection = () => {

  const testimonials: Testimonial[] = [
    {
      name: "Vitthal Parmar",
      condition: "Neurophysiotherapy",
      text: "Now we are visiting Dev Physiotherapy, Gotri Branch for further recovery of her arm, wrist, and fingers, and she is gradually regaining strength. We are very thankful to Dr. Hitesh for his excellent treatment and dedication. 🙏",
      rating: 5,
      location: "Gotri, Vadodara",
      reviewLink: "https://maps.app.goo.gl/5Dg17StYEHUut1aU6"
    },
    {
      name: "Heena Patel",
      condition: "Chiropractic and Physiotherapy ",
      text: "The assessment was thorough and the treatment was well planned. Very professional care and good guidance throughout the sessions. Highly recommended for pain management and rehabilitation.",
      rating: 5,
      location: "Vasna, Vadodara",
      reviewLink: "https://maps.app.goo.gl/U9LX37UGj89BW6CVA"
    },
    {
      name: "Dhara chauhan",
      condition: "exercises and therapy",
      text: "I'm thrilled to share my experience with Doctor Hitesh , who helped me get rid of my wrist pain in just 3 weeks! Their expertise, personalized care, and tailored treatment plan made all the difference. ",
      rating: 5,
      location: "Alkapuri, Vadodara",
      reviewLink: "https://maps.app.goo.gl/ZnLCjAjd6y4HHCdc9"
    },
    {
      name: "Hemu Sharma",
      condition: "Physiotherapy treatment",
      text: "I had undergone bilateral TKR and was facing severe pain, stiffness, and difficulty in walking. I started my Physiotherapy treatment here, and within just 2 months I experienced significant improvement",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/swh8xaXSNy75LLiz5"
    },
    {
      name: "Nirav Vadhel",
      condition: "Chiropractic",
      text: "I was suffering from severe back pain and was even unable to sit properly. I was diagnosed with mechanical scoliosis and had a lot of stiffness and flexibility issues Very systematic treatment, excellent guidance, and truly effective care.",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/VxY9Kqz6SPJF1A877"
    },
    {
      name: "mahendram nai",
      condition: "Chiropractic and Physiotherapy treatment",
      text: "I was suffering from right shoulder pain for a long time,Very professional assessment, effective treatment, and caring approach. We are both very satisfied with the results Highly recommended for shoulder, back, and neck pain management.",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/FcyRpqiBaKZY4Hip7"
    },
    {
      name: "Binita Ojha",
      condition: "Ayurvedic Treatment",
      text: "After taking treatment for about 3–4 months, I got significant relief. Now I can walk comfortably and do my daily activities very well. I am very satisfied with the treatment and truly grateful for the care and guidance. Highly recommended.",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/C1oT5R9juDvegfTe9"
    },
    {
      name: "Vijay.b Patel",
      condition: "Ayurvedic Treatment",
      text: "Even daily activities were becoming very challenging After taking regular physiotherapy treatment from Dr. Hitesh Prajapati for one year, my condition has improved tremendously.",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/qG9wJKwoUh36Dbpa8"
    },
    {
      name: "Bina Patel",
      condition: "Chiropractic and Physiotherapy",
      text: "After taking Chiropractic and Physiotherapy treatment from Dr. Hitesh at Dev Physiotherapy, I feel much better now. My pain has reduced and balance has improved significantly.",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/LH1nWYKPpmavhmbf8"
    },
    {
      name: "Dilipsinh Parmar",
      condition: "Ayurvedic Treatment",
      text: "My wife had severe back pain for many years. She couldn’t bend forward or sit cross-legged because of the discomfort. We consulted Dr. Hitesh Prajapati at Dev Physiotherapy, and after just one week of chiropractic physiotherapy, she experienced significant relief from her constant pain Now she is completely pain-free.Highly recommended!",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/LSf32jeQ53Y3S9QZ8"
    },
    {
      name: "Mahobatsinh jadav",
      condition: "Neurophysiotherapy treatment",
      text: "after taking Neurophysiotherapy treatment at Dev Physiotherapy, she started recovering much faster than we expected. Within just 2 months, she regained her shoulder mobility and now she is able to do all household work happily and confidently We are truly thankful to Dev Physiotherapy for bringing positive change in her life. Highly recommended! 👏💪",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/qJ2f3tiLjvZY1yTh7"
    },
    {
      name: "Naitik Padhiyar",
      condition: " Neuro Physiotherapy and Chiropractic mobilization",
      text: "After starting treatment at Dev Physiotherapy & Healthcare Center, including Neuro Physiotherapy and Chiropractic mobilization, I experienced tremendous improvement. The tremors reduced, the pain disappeared, and now I feel completely recovered.Thank you to the team for helping me get back to my normal routine without discomfort!",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/yTKBsUkEEWjzxUQU8"
    },
    {
      name: "Shriya Rathod",
      condition: "Neurological",
      text: "I was suffering from Sensory loss over my left half of tongue after removal of my Wisdom teeth since 1 month, I have been very pleased with the results and the Sensations started coming back from 2nd week of treatment Highly recommended for any Neurological problems.",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/eKT9zCZfcsd5HNc7A"
    },
    {
      name: "Autar Jalali",
      condition: "Physiotherapists ",
      text: "Physiotherapists  for more than 3 years I engaged Dr Hitesh Prajapati since March last year.  I am observing perceptible  positive development in body. I am able to move my right side of the body now.  I had got a stroke at USA. I had moved to India when COVID was at its peak and everything was at stand still. Dr hitesh has given new purpose to my life. His human touch desires special  reference.!",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/oDRLqSME7BRiW4Xr9"
    },
    {
      name: "Vishwasrao sonawane",
      condition: "chiropractic physiotherapy",
      text: "am 79 years old.I had pain in my whole spine and chest since last six months which was not relieved by any medication Then I have consulted Dr.Hitesh Prajapati and taken chiropractic physiotherapy,feeling much better in just 15 sessions and now there is no pain.!",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/mXhaQVHFAbzymsXz9"
    },
    {
      name: "Mahesh Kotadiya",
      condition: "Physiotherapy",
      text: "we got reference of Dev Physiotherapy - after diagnosed by Doctor and he performed several times exercises and treatment and no any painkiller medicine given and within 12 hours he started to walk with minor pain and he went school without any problems.",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/cLEPAPETALFRGhf27"
    },
    {
      name: "Dharmendra Joshi",
      condition: "Neuro physiotherapist",
      text: "I have taken vertin tablet but very less results.I consulted Dr Hitesh - Neuro physiotherapist for that. He has explained my problem & given solution for that by using his different methods of treatment. Now, I recovered more than 90%.Now, I can drive my vehicle & no vertigo.Now I don't need any allopathic medicines.",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/m26S7MfnYdDiWbJa9"
    },
    {
      name: "Mayur Shirude",
      condition: " Neuro Physiotherapy and Chiropractic mobilization",
      text: " I contact Dr.Hitesh Prajapati (Neuro Physiotherapist) and Dr.Bhumi Prajapati (Ayurvedic Doctor). I said them my problem and my story that how much level of problem I was suffering. They said Don't worry it will be solved.",
      rating: 5,
      location: "Manjalpur, Vadodara",
      reviewLink: "https://maps.app.goo.gl/YVbHh9x1TQv1c7G3A"
    },
    

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
            Real stories from real patients who experienced successful recovery at our clinic
          </p>

          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {testimonials.map((testimonial, index) => (

            <Card
              key={testimonial.name}
              className="shadow-soft hover:shadow-premium transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center gap-4">

                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map(n => n[0])
                        .join("")}
                    </div>

                    {/* Details */}
                    <div>

                      {/* Clickable Name */}
                      {testimonial.reviewLink ? (
                        <a
                          href={testimonial.reviewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-primary hover:text-blue-600 hover:underline transition"
                        >
                          {testimonial.name}
                        </a>
                      ) : (
                        <h4 className="font-semibold text-primary">
                          {testimonial.name}
                        </h4>
                      )}

                      <p className="text-sm text-gray-600">
                        {testimonial.condition}
                      </p>

                      <p className="text-xs text-gray-500">
                        {testimonial.location}
                      </p>

                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>

          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10000+</div>
            <div className="text-sm text-gray-600">Happy Patients</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-primary mb-2">14+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-gray-600">Locations</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-gray-600">Recovery Success</div>
          </div>
        </div>

      </div>
    </section>
  );
};