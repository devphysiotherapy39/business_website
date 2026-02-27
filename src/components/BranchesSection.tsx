
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Clock, Navigation } from "lucide-react";

// type Branch = {
//   name: string;
//   address: string;
//   location: string;
//   area: string;
//   phone: string;
//   isMain: boolean;
//   mapUrl: string;
//   sundayTiming?: string; // 👈 important
// };


// export const BranchesSection = () => {
//   const branches: Branch[] = [
//     {
//       name: "Gotri Branch",
//       address: "GF/42, Kalpvrux Complex",
//       location: "Opposite GEB Substation, Near GMERS",
//       area: "Gotri Road, Vadodara - 390021",
//       phone: "97243 85791",
//       isMain: true,
//       mapUrl: "https://maps.google.com?q=Gotri+Branch+Dev+Physiotherapy+Vadodara"
//       // mapUrl: "https://www.google.com/maps/search/?api=1&query=Dr+Hitesh+D.+Prajapati+(NeuroPhysiotherapist)+Chiropractor+Pain+%26+Paralysis+Specialist+Vasna+Vadodara"
//     },

//     {
//       name: "Vasna Branch -   For Physiotherapy Treatment and For Ayurdedic Treatment",
//       address: "E/13, Megha Park",
//       location: "Near Khodiyar Dughdhalay, Near Saint Kabir School",
//       area: "Vasna Road, Vadodara - 390007",
//       phone: "9428561294",
//       isMain: false,
//       sundayTiming: "10:30 AM to 11:30 AM", // ✅ ADD THIS
//       mapUrl: "https://www.google.com/maps/search/?api=1&query=Dev+Ayurvedic+Center+Dr+Bhumika+Prajapati+BAMS+CCDE,+E/13,+Megha+Park+Society,+Near+Khodiyar+Dugdhalay,+Vasna+Road,+Vadodara+390007"
//     }


//   ];

//   return (
//     <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
//             Our Locations
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             Conveniently located branches in Vadodara to serve you better.
//             Choose the location that's most convenient for you.
//           </p>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
//         </div>

//         {/* Branches Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
//           {branches.map((branch, index) => (
//             <Card
//               key={branch.name}
//               className={`overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 animate-fade-in-up border-0 ${branch.isMain
//                 ? 'bg-gradient-to-br from-white to-primary/5 ring-2 ring-primary/20'
//                 : 'bg-gradient-to-br from-white to-secondary/5'
//                 }`}
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               <CardContent className="p-8">
//                 <div className="flex flex-col">
//                   {/* Header */}
//                   <div className="flex items-center justify-between mb-6">
//                     <h3 className="text-2xl font-bold text-primary">
//                       {branch.name}
//                     </h3>
//                     {branch.isMain && (
//                       <span className="bg-primary text-white
//                  px-4 py-1.5
//                  rounded-full
//                  text-[11px] font-semibold
//                  tracking-wide leading-none">
//                         Main&nbsp;Branch
//                       </span>
//                     )}
//                   </div>

//                   {/* Address */}
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-start gap-3">
//                       <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
//                       <div className="text-gray-700">
//                         <p className="font-semibold">{branch.address}</p>
//                         <p className="text-sm">{branch.location}</p>
//                         <p className="text-sm text-primary font-medium">{branch.area}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <Phone className="w-5 h-5 text-primary" />
//                       <a
//                         href={`tel:${branch.phone}`}
//                         className="text-primary font-semibold hover:underline transition-colors"
//                       >
//                         {branch.phone}
//                       </a>
//                     </div>

//                     <div className="flex items-start gap-3">
//                       <Clock className="w-5 h-5 text-primary mt-1" />
//                       <div className="text-sm text-gray-600">
//                         <p className="font-medium">Mon - Sat</p>
//                         <p>9:00 AM - 9:00 PM</p>

//                         {branch.sundayTiming && (
//                           <p className="font-medium">
//                             Sunday: {branch.sundayTiming}
//                           </p>
//                         )}
//                       </div>

//                     </div>
//                   </div>

//                   {/* Actions */}
//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <Button
//                       className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full"
//                       onClick={() => window.open(`tel:${branch.phone}`)}
//                     >
//                       <Phone className="w-4 h-4 mr-2" />
//                       Call Now
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="flex-1 border-primary text-primary hover:bg-primary hover:text-white rounded-full"
//                       onClick={() => window.open(branch.mapUrl, '_blank')}
//                     >
//                       <Navigation className="w-4 h-4 mr-2" />
//                       Get Directions
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Quick Contact Info */}
//         <div className="bg-white rounded-2xl p-8 shadow-soft animate-fade-in-up animation-delay-400">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-primary mb-6">
//               Multiple Contact Numbers
//             </h3>
//             <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
//               <a
//                 href="tel:9724385791"
//                 className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-semibold"
//               >
//                 <Phone className="w-4 h-4" />
//                 97243 85791
//               </a>
//               <a
//                 href="tel:9428561294"
//                 className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-colors font-semibold"
//               >
//                 <Phone className="w-4 h-4" />
//                 94285 61294
//               </a>
//               <a
//                 href="tel:8487094533"
//                 className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors font-semibold"
//               >
//                 <Phone className="w-4 h-4" />
//                 84870 94533
//               </a>
//             </div>
//             <p className="text-gray-600">
//               Call any of our numbers for appointments, queries, or home visit requests
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

type Branch = {
  name: string;
  address: string;
  location: string;
  area: string;
  phone: string;
  timing: string;
  extraTiming?: string;
  isMain?: boolean;
  mapUrl: string;
};

const IconClass = "w-5 h-5 text-primary flex-shrink-0";

export const BranchesSection = () => {
  const branches: Branch[] = [
    {
      name: "Gotri Branch – Physiotherapy",
      address: "GF/42, Kalpvrux Complex",
      location: "Opposite GEB Substation, Near GMERS",
      area: "Gotri Road, Vadodara - 390021",
      phone: "9724385791",
      timing: "Mon – Sat: 9:00 AM – 9:00 PM",
      extraTiming:
        "Yoga Classes start from 16th February 2026 | 08:00 AM – 09:00 AM & 04:00 PM – 05:00 PM",
      isMain: true,
      mapUrl: "https://maps.google.com?q=Gotri+Branch+Dev+Physiotherapy+Vadodara"
    },
    {
      name: "Vasna Branch – Physiotherapy Treatment",
      address: "E/13, Megha Park",
      location: "Near Khodiyar Dughdhalay, Near Saint Kabir School",
      area: "Vasna Road, Vadodara - 390007",
      phone: "8487094533",
      timing: "Mon – Sat: 9:00 AM – 9:00 PM | Sun: 9:30 AM – 11:30 AM",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Dr+Hitesh+D.+Prajapati+(NeuroPhysiotherapist)+Vasna+Vadodara"
    },
    {
      name: "Vasna Branch – Ayurvedic Treatment",
      address: "E/13, Megha Park",
      location: "Near Khodiyar Dughdhalay, Near Saint Kabir School",
      area: "Vasna Road, Vadodara - 390007",
      phone: "9428561294",
      timing: "Mon – Sat: 9:00 AM – 9:00 PM | Sun: 9:30 AM – 11:35 AM",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Dev+Ayurvedic+Center+Dr+Bhumika+Prajapati+Vasna+Vadodara"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the branch and treatment that’s most convenient for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {branches.map((branch, index) => (
            <Card
              key={index}
              className={`border-0 shadow-premium hover:shadow-2xl transition-all ${branch.isMain ? "ring-2 ring-primary/20" : ""
                }`}
            >
              <CardContent className="p-8 flex flex-col h-full">

                {/* Title */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-primary">
                    {branch.name}
                  </h3>
                  {branch.isMain && (
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Main
                    </span>
                  )}
                </div>

                {/* Address & Info */}
                <div className="space-y-4 mb-6 text-gray-700">

                  <div className="flex gap-3 items-start">
                    <MapPin className={IconClass} />
                    <div>
                      <p className="font-semibold">{branch.address}</p>
                      <p className="text-sm">{branch.location}</p>
                      <p className="text-sm text-primary font-medium">
                        {branch.area}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <Phone className={IconClass} />
                    <a
                      href={`tel:${branch.phone}`}
                      className="font-semibold text-primary"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Clock className={IconClass} />
                    <div className="text-sm">
                      <p>{branch.timing}</p>

                      {branch.extraTiming && (
                        <p className="mt-3 font-semibold text-primary">
                          {branch.extraTiming}
                        </p>
                      )}
                    </div>
                  </div>

                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">
                  <Button
                    className="flex-1 bg-primary text-white rounded-full"
                    onClick={() => window.open(`tel:${branch.phone}`)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white rounded-full"
                    onClick={() => window.open(branch.mapUrl, "_blank")}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
