import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  CheckCircle2, Phone, MessageSquare, Star, ArrowRight, ShieldCheck, 
  Activity, Award, Brain, PhoneCall, Search, UserCheck, Calendar 
} from "lucide-react";

interface ProfileDetails {
  qualifications: string;
  designation?: string;
  experience: string;
  about: string;
  expertise: string[];
  specialSkills?: string[];
  certifications?: string[];
  advancedTraining?: string[];
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  icon?: string;
  highlights?: string[];
  shortExpertise?: string;
  details?: ProfileDetails;
}

const OurTeam = () => {
  const leaders: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Hitesh D. Prajapati",
      role: "Founder & CEO",
      image: "/drhiteshprajapati.jpeg",
      icon: "👨‍⚕️",
      highlights: [
        "16+ Years Experience",
        "Neuro & Spine Specialist",
        "Expert in Advanced Physiotherapy",
        "15000+ Patients Treated"
      ],
      details: {
        qualifications: "MPT (Neuro), BPT, MIAP, CMT, YTTC, NIBS",
        designation: "Consultant Neuro Physiotherapist | Brain & Spine Specialist",
        experience: "16+ Years",
        about: "Dr. Hitesh D. Prajapati is the Founder and CEO of Dev Physiotherapy & Healthcare Center. He is a highly experienced Neuro Physiotherapist specializing in brain and spine rehabilitation. With a vision to provide advanced and ethical patient care, he has successfully treated thousands of patients with neurological and musculoskeletal conditions.",
        expertise: [
          "Neuro Rehabilitation (Stroke, Paralysis, Parkinson’s)",
          "Spine & Disc Disorders (Slip Disc, Sciatica, Cervical Pain)",
          "Manual Therapy & Chiropractic Techniques",
          "Post-Surgical Rehabilitation",
          "Cardiopulmonary Physiotherapy",
          "Geriatric & Pediatric Care",
          "Home Visit Physiotherapy"
        ]
      }
    },
    {
      id: 2,
      name: "Dr. Bhumika H. Prajapati",
      role: "Co-Chairperson",
      image: "/DrBhumikaprajapati.jpeg",
      icon: "👩‍⚕️",
      highlights: [
        "16+ Years Experience",
        "Ayurvedic Consultant",
        "Holistic Health Expert",
        "Lifestyle & Natural Healing"
      ],
      details: {
        qualifications: "BAMS, CCDE",
        designation: "Ayurvedic Consultant | Holistic Health Expert",
        experience: "16+ Years",
        about: "Dr. Bhumika Prajapati serves as the Co-Chairperson of the center and plays a key role in integrating Ayurvedic principles with modern physiotherapy care. She focuses on holistic healing and lifestyle-based treatment approaches.",
        expertise: [
          "Ayurvedic Treatment & Lifestyle Management",
          "Diabetes & Chronic Disease Care",
          "Women’s Health & Hormonal Balance",
          "Diet & Natural Healing"
        ]
      }
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 3,
      name: "Dr. Nirali Thakkar",
      role: "Consultant Physiotherapist",
      image: "/niralithakkar.jpeg",
      details: {
        qualifications: "MPT (Orthopaedics)",
        experience: "Joined: September 2024",
        about: "Dr. Nirali Thakkar holds a Master’s degree in Orthopaedics from AIMS, Ahmedabad (2020). She has extensive experience in treating a wide range of conditions with a patient-centric approach.",
        expertise: [
          "Musculoskeletal Rehabilitation",
          "Neurological Conditions",
          "Cardiopulmonary Physiotherapy",
          "Geriatric & Pediatric Care",
          "Women’s Health (Pre & Post Natal Rehabilitation)"
        ],
        specialSkills: [
          "Certified Pilates Instructor",
          "Theraband Exercise Training",
          "Taping Techniques",
          "IASTM"
        ]
      }
    },
    {
      id: 4,
      name: "Dr. Urvesh Y. Patil",
      role: "Clinical Physiotherapist",
      image: "/Drurveshpatil.jpeg",
      details: {
        qualifications: "BPT",
        experience: "Joined: March 2026",
        about: "Dr. Urvesh Patil completed his Bachelor of Physiotherapy from Sumandeep Vidyapeeth. He is dedicated to delivering effective rehabilitation with a strong focus on patient recovery.",
        expertise: [
          "Orthopaedic Rehabilitation",
          "Neurological Rehabilitation",
          "Functional Exercise Therapy"
        ],
        certifications: [
          "Advanced Manipulation Workshop",
          "PNF (Proprioceptive Neuromuscular Facilitation)"
        ]
      }
    },
    {
      id: 5,
      name: "Dr. Dhvani Patel",
      role: "Clinical Physiotherapist",
      image: "/dhvanipatel.jpeg",
      details: {
        qualifications: "BPT",
        experience: "Joined: September 2024",
        about: "Dr. Dhvani Patel completed her graduation from Shree Swaminarayan Physiotherapy College, Ahmedabad (2021). She specializes in modern pain management techniques.",
        expertise: [
          "IASTM (Instrument Assisted Soft Tissue Mobilization)",
          "Kinesio Taping",
          "Dry Needling",
          "Pain Management Therapy"
        ],
        advancedTraining: [
          "FOMT – Fellowship in Osteopathy & Manipulative Therapy"
        ]
      }
    },
    {
      id: 6,
      name: "Dr. Rina Sharma",
      role: "Clinical Physiotherapist",
      image: "/rinasharma.jpeg",
      details: {
        qualifications: "MPT (Orthopedic & Sports Injury)",
        experience: "Joined: May 2023",
        about: "Dr. Rina Sharma specializes in pain management and rehabilitation, helping patients regain mobility and function effectively.",
        expertise: [
          "Pain Management",
          "Cardio Rehabilitation",
          "Neuro Rehabilitation"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fbfa]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#eef5fa] border-b-[12px] border-primary">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 max-w-7xl">
          
          {/* Left Image area */}
          <div className="flex-1 relative mb-10 lg:mb-0 flex justify-center lg:justify-start lg:pl-16">
             <div className="relative w-[320px] shrink-0">
                <div className="absolute -left-40 top-1/2 -translate-y-1/2 space-y-3 hidden lg:block z-20">
                   <div className="bg-white px-4 py-2.5 rounded-xl shadow-lg flex items-center justify-between gap-3 border-r-4 border-primary w-[190px]">
                     <span className="font-bold text-primary text-xs leading-tight text-right w-full">Neuro<br/>Rehabilitation</span>
                     <Brain className="text-primary w-6 h-6 shrink-0" />
                   </div>
                   <div className="bg-white px-4 py-2.5 rounded-xl shadow-lg flex items-center justify-between gap-3 border-r-4 border-primary w-[190px]">
                     <span className="font-bold text-primary text-xs leading-tight text-right w-full">Spine & Pain<br/>Management</span>
                     <img src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png" className="w-6 h-6 opacity-80 shrink-0" alt="spine" />
                   </div>
                   <div className="bg-white px-4 py-2.5 rounded-xl shadow-lg flex items-center justify-between gap-3 border-r-4 border-[#4CAF50] w-[190px]">
                     <span className="font-bold text-primary text-xs leading-tight text-right w-full">Ayurvedic<br/>Care</span>
                     <span className="text-[#4CAF50] text-2xl shrink-0 leading-none">🌿</span>
                   </div>
                   <div className="bg-white px-4 py-2.5 rounded-xl shadow-lg flex items-center justify-between gap-3 border-r-4 border-primary w-[190px]">
                     <span className="font-bold text-primary text-xs leading-tight text-right w-full">Rehab &<br/>Support<br/>Products</span>
                     <img src="https://cdn-icons-png.flaticon.com/512/2804/2804791.png" className="w-6 h-6 opacity-80 shrink-0" alt="support" />
                   </div>
                </div>
                <img src="/drhiteshprajapati.jpeg" alt="Dev Physiotherapy Doctor" className="w-[320px] h-[320px] object-cover object-top rounded-full shadow-2xl relative z-10 border-[10px] border-white mx-auto" /> 
             </div>
          </div>

          {/* Right Text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <p className="text-primary font-bold tracking-widest text-xs sm:text-sm uppercase flex items-center justify-center lg:justify-start gap-2">
              <span className="text-secondary">MOVE BETTER</span> <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> 
              <span className="text-secondary">FEEL BETTER</span> <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span> 
              <span className="text-secondary">LIVE BETTER</span>
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight tracking-tight">
              EXPERT CARE FOR <br /> <span className="text-primary">COMPLETE RECOVERY</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-[#4CAF50] flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              Physiotherapy <span className="text-primary text-xl">•</span> Ayurveda <span className="text-primary text-xl">•</span> Home Visit Care
            </h2>
            <p className="text-gray-700 text-lg max-w-xl mx-auto lg:mx-0 font-medium">
              Advanced, ethical & patient-centered care with a unique approach for faster recovery and long-term wellness.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
               <div className="bg-white border border-gray-200 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-sm min-w-[160px]">
                 <div className="border border-primary rounded-full p-1.5 shrink-0">
                   <Award className="text-primary w-5 h-5" />
                 </div>
                 <div className="text-left leading-tight">
                   <p className="font-bold text-primary text-lg">16+</p>
                   <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Years Experience</p>
                 </div>
               </div>
               <div className="bg-white border border-gray-200 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-sm min-w-[160px]">
                 <div className="border border-primary rounded-full p-1.5 shrink-0">
                   <ShieldCheck className="text-primary w-5 h-5" />
                 </div>
                 <div className="text-left leading-tight">
                   <p className="font-bold text-primary text-lg">15000+</p>
                   <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Patients Treated</p>
                 </div>
               </div>
               <div className="bg-white border border-gray-200 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-sm min-w-[160px]">
                 <div className="border border-primary rounded-full p-1.5 shrink-0">
                   <PhoneCall className="text-primary w-5 h-5" />
                 </div>
                 <div className="text-left leading-tight">
                   <p className="font-bold text-primary text-lg">Home Visit</p>
                   <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Available</p>
                 </div>
               </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 font-semibold shadow-premium h-14 text-base">
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" /> Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl px-8 font-semibold shadow-premium h-14 text-base">
                <a href="https://wa.me/919724385791" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 mr-1" /> WhatsApp Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OUR LEADERSHIP */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl font-bold text-primary tracking-widest uppercase">OUR LEADERSHIP</h2>
            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 flex items-center w-full max-w-3xl">
               <div className="h-[1px] bg-gray-200 flex-1"></div>
               <div className="text-secondary mx-4">★</div>
               <div className="h-[1px] bg-gray-200 flex-1"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leaders.map(leader => (
               <div key={leader.id} className="bg-[#fff9f4] border border-orange-100 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-sm">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-md flex-shrink-0">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="flex-1 space-y-4 text-center sm:text-left w-full">
                     <div>
                       <h3 className="text-2xl font-bold text-primary">{leader.name}</h3>
                       <p className="text-secondary font-semibold text-lg">{leader.role}</p>
                     </div>
                     <div className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-md inline-block">
                        {leader.highlights ? leader.highlights[0] : "16+ Years Experience"}
                     </div>
                     <ul className="space-y-2 text-sm text-gray-800 font-medium text-left">
                       {leader.highlights?.slice(1).map((hl, i) => (
                         <li key={i} className="flex items-start gap-2">
                           <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0 fill-green-100" />
                           {hl}
                         </li>
                       ))}
                     </ul>

                     {leader.details ? (
                       <Dialog>
                         <DialogTrigger asChild>
                           <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white group mt-4 h-12 px-8 rounded-xl font-bold cursor-pointer">
                              View Full Profile <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                           </Button>
                         </DialogTrigger>
                         <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto sm:rounded-2xl">
                           <DialogHeader>
                             <DialogTitle className="hidden">Profile Details</DialogTitle>
                             <div className="flex flex-col items-center mb-4 mt-2">
                               <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-md mb-4 bg-white">
                                 <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                               </div>
                               <h3 className="text-2xl font-bold text-primary flex items-center gap-2 flex-wrap justify-center text-center">{leader.icon || "👤"} {leader.name}</h3>
                               <p className="text-secondary font-medium text-lg text-center mt-1">{leader.role}</p>
                             </div>
                           </DialogHeader>
                           
                           <div className="space-y-6 text-gray-700 mt-2 px-2 sm:px-6 pb-6 text-left">
                             <div className="text-center space-y-1 bg-gray-50 p-4 rounded-xl shadow-inner border border-gray-100">
                               <p className="font-semibold text-primary text-lg">{leader.details.qualifications}</p>
                               {leader.details.designation && <p className="text-sm font-medium text-gray-600">{leader.details.designation}</p>}
                               <p className="font-bold flex items-center justify-center gap-2 mt-3 bg-white py-2 px-4 rounded-lg inline-block shadow-sm">📍 <span className="text-secondary">Experience:</span> {leader.details.experience}</p>
                             </div>

                             <div>
                                <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 About:</h4>
                                <p className="leading-relaxed text-sm sm:text-base text-justify bg-white p-4 rounded-xl border border-gray-100 shadow-sm">{leader.details.about}</p>
                             </div>

                             <div>
                                <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 Expertise:</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {leader.details.expertise.map((item, idx) => (
                                     <li key={idx} className="flex items-start gap-2 text-sm sm:text-base bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                                       <span className="text-secondary mt-0.5">✔</span>
                                       <span className="flex-1 font-medium text-gray-700">{item}</span>
                                     </li>
                                  ))}
                                </ul>
                             </div>
                           </div>
                         </DialogContent>
                       </Dialog>
                     ) : (
                       <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white group mt-4 h-12 px-8 rounded-xl font-bold cursor-pointer">
                          View Full Profile <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                       </Button>
                     )}
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR UNIQUE TREATMENT APPROACH */}
      <section className="py-20 bg-[#f4f8f6] border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
             
             {/* Left Text */}
             <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-primary leading-tight flex items-start gap-3">
                  <span className="text-yellow-500 text-4xl leading-none mt-1">☀</span>
                  <span>OUR UNIQUE<br/>TREATMENT APPROACH</span>
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  The human body works as an interconnected system through neurological pathways and movement chains. <strong>Pain in one area is often linked to dysfunction in another part of the body.</strong>
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Under the guidance of Dr. Hitesh Prajapati, we follow a specialized chain-based assessment and treatment approach developed through clinical experience on 15,000+ patients.
                </p>
             </div>

             {/* Center Graphic */}
             <div className="flex justify-center relative">
                <img src="/poster.jpeg" alt="Treatment Chain" className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-full border-[12px] border-white shadow-xl bg-white" />
             </div>

             {/* Right Features & Quote */}
             <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm border border-gray-100">
                   <div className="bg-[#4CAF50] p-3 rounded-full text-white shrink-0">
                      <Search className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-primary text-base">Identifies Root Cause</h4>
                     <p className="text-xs text-gray-500 font-medium mt-0.5">We look beyond the painful area.</p>
                   </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm border border-gray-100">
                   <div className="bg-[#4CAF50] p-3 rounded-full text-white shrink-0">
                      <Activity className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-primary text-base">Treats Full Body Chain</h4>
                     <p className="text-xs text-gray-500 font-medium mt-0.5">Complete body assessment & treatment.</p>
                   </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm border border-gray-100">
                   <div className="bg-[#4CAF50] p-3 rounded-full text-white shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-primary text-base">Prevents Future Pain</h4>
                     <p className="text-xs text-gray-500 font-medium mt-0.5">Predicts & prevents potential problems.</p>
                   </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm border border-gray-100 mb-6">
                   <div className="bg-[#4CAF50] p-3 rounded-full text-white shrink-0">
                      <UserCheck className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-primary text-base">Personalized Recovery Plan</h4>
                     <p className="text-xs text-gray-500 font-medium mt-0.5">Tailored care for long-term results.</p>
                   </div>
                </div>

                <div className="bg-[#1a2f4c] text-white p-6 rounded-xl shadow-lg relative mt-8 ml-4">
                   <div className="absolute -top-6 -left-4 text-6xl text-yellow-500 font-serif leading-none">“</div>
                   <p className="font-medium text-lg lg:text-xl leading-snug relative z-10">
                     We don't treat where it hurts, <span className="text-yellow-400 font-bold">we treat why it hurts.</span>
                   </p>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* OUR EXPERT TEAM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl font-bold text-primary tracking-widest uppercase">OUR EXPERT TEAM</h2>
            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 flex items-center w-full max-w-3xl">
               <div className="h-[1px] bg-gray-200 flex-1"></div>
               <div className="text-secondary mx-4">★</div>
               <div className="h-[1px] bg-gray-200 flex-1"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
               <div key={member.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col h-full group">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                     </div>
                     <div>
                       <h3 className="font-bold text-primary text-base leading-tight mb-1">{member.name}</h3>
                       <p className="text-xs text-[#4CAF50] font-bold">{member.role}</p>
                       <p className="text-[11px] text-gray-800 font-bold mt-1">{member.details?.qualifications}</p>
                     </div>
                  </div>
                  
                  <ul className="space-y-2.5 text-xs text-gray-600 font-medium mb-8 flex-1 text-left">
                     {member.details?.expertise.map((item, i) => (
                       <li key={i} className="flex items-start gap-2">
                         <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5 fill-green-50" />
                         <span className="leading-tight">{item}</span>
                       </li>
                     ))}
                  </ul>

                  {member.details ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full text-primary border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-colors group-hover:border-primary font-bold h-10 cursor-pointer">
                           View Full Profile <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto sm:rounded-2xl">
                        <DialogHeader>
                          <DialogTitle className="hidden">Profile Details</DialogTitle>
                          <div className="flex flex-col items-center mb-4 mt-2">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-md mb-4 bg-white">
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary flex items-center gap-2 flex-wrap justify-center text-center">{member.icon || "👤"} {member.name}</h3>
                            <p className="text-secondary font-medium text-lg text-center mt-1">{member.role}</p>
                          </div>
                        </DialogHeader>
                        
                        <div className="space-y-6 text-gray-700 mt-2 px-2 sm:px-6 pb-6 text-left">
                          <div className="text-center space-y-1 bg-gray-50 p-4 rounded-xl shadow-inner border border-gray-100">
                            <p className="font-semibold text-primary text-lg">{member.details.qualifications}</p>
                            {member.details.designation && <p className="text-sm font-medium text-gray-600">{member.details.designation}</p>}
                            <p className="font-bold flex items-center justify-center gap-2 mt-3 bg-white py-2 px-4 rounded-lg inline-block shadow-sm">📍 <span className="text-secondary">{member.details.experience.includes('Joined') ? '' : 'Experience:'}</span> {member.details.experience}</p>
                          </div>

                          <div>
                             <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 About:</h4>
                             <p className="leading-relaxed text-sm sm:text-base text-justify bg-white p-4 rounded-xl border border-gray-100 shadow-sm">{member.details.about}</p>
                          </div>

                          <div>
                             <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 Expertise:</h4>
                             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                               {member.details.expertise.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm sm:text-base bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                                    <span className="text-secondary mt-0.5">✔</span>
                                    <span className="flex-1 font-medium text-gray-700">{item}</span>
                                  </li>
                               ))}
                             </ul>
                          </div>
                          
                          {member.details.specialSkills && (
                            <div>
                               <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 Special Skills:</h4>
                               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                 {member.details.specialSkills.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                                      <span className="text-secondary mt-0.5">✔</span>
                                      <span className="flex-1 font-medium text-gray-700">{item}</span>
                                    </li>
                                 ))}
                               </ul>
                            </div>
                          )}

                          {member.details.certifications && (
                            <div>
                               <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 Certifications:</h4>
                               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                 {member.details.certifications.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                                      <span className="text-secondary mt-0.5">✔</span>
                                      <span className="flex-1 font-medium text-gray-700">{item}</span>
                                    </li>
                                 ))}
                               </ul>
                            </div>
                          )}

                          {member.details.advancedTraining && (
                            <div>
                               <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 Advanced Training:</h4>
                               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                 {member.details.advancedTraining.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                                      <span className="text-secondary mt-0.5">✔</span>
                                      <span className="flex-1 font-medium text-gray-700">{item}</span>
                                    </li>
                                 ))}
                               </ul>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button variant="outline" className="w-full text-primary border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-colors group-hover:border-primary font-bold h-10 cursor-pointer">
                       View Full Profile <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETE CARE UNDER ONE ROOF */}
      <section className="py-20 bg-[#f4f7f6]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl font-bold text-primary tracking-widest uppercase">COMPLETE CARE UNDER ONE ROOF</h2>
            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 flex items-center w-full max-w-3xl">
               <div className="h-[1px] bg-gray-300 flex-1"></div>
               <div className="text-secondary mx-4">★</div>
               <div className="h-[1px] bg-gray-300 flex-1"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {/* Box 1: Physiotherapy */}
             <div className="bg-primary text-white rounded-3xl overflow-hidden relative group h-[450px]">
                <img src="/clinic 1.jpg" alt="Physiotherapy" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-transparent"></div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                   <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                     <div className="p-2 bg-white/10 rounded-lg shrink-0 border border-white/20">
                       <Activity className="w-8 h-8 text-white" />
                     </div>
                     <h3 className="text-xl font-bold uppercase tracking-wider leading-tight">PHYSIOTHERAPY CARE</h3>
                   </div>
                   <ul className="space-y-3 text-sm font-medium">
                     {["Neuro Rehabilitation\n(Stroke, Paralysis, Parkinson's)", "Spine & Disc Disorders", "Orthopaedic Rehabilitation", "Post-Surgical Rehab", "Pain Management", "Home Visit Physiotherapy"].map((item, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <span className="text-secondary font-bold text-lg leading-none">»</span> 
                         <span className="whitespace-pre-line leading-tight">{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Box 2: Ayurvedic */}
             <div className="bg-[#4CAF50] text-white rounded-3xl overflow-hidden relative group h-[450px]">
                <img src="/assets/services/Poster2.jpeg" alt="Ayurveda" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4CAF50] via-[#4CAF50]/90 to-transparent"></div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                   <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                     <div className="p-2 bg-white/10 rounded-lg shrink-0 border border-white/20 text-3xl leading-none">
                       🌿
                     </div>
                     <h3 className="text-xl font-bold uppercase tracking-wider leading-tight">AYURVEDIC CARE</h3>
                   </div>
                   <ul className="space-y-4 text-sm font-medium">
                     {["Ayurvedic Treatment", "Lifestyle Management", "Diabetes & Chronic Care", "Women's Health", "Diet & Natural Healing"].map((item, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <span className="text-green-200 font-bold text-lg leading-none">»</span> 
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Box 3: Products */}
             <div className="bg-[#fcf8f2] text-primary rounded-3xl overflow-hidden relative group h-[450px] shadow-sm border border-gray-200">
                <img src="/clinic 3.jpg" alt="Products" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fcf8f2] via-[#fcf8f2]/95 to-white/50"></div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                   <div className="flex items-center gap-4 mb-6 border-b border-primary/20 pb-4">
                     <div className="p-2 bg-primary/5 rounded-lg shrink-0 border border-primary/10 text-3xl leading-none">
                       🛒
                     </div>
                     <h3 className="text-lg font-bold uppercase tracking-wider leading-tight">REHABILITATION &<br/>SURGICAL PRODUCTS</h3>
                   </div>
                   <ul className="space-y-4 text-sm font-bold text-gray-700">
                     {["Knee Caps & Supports", "Belts & Braces", "Cervical Collars", "Exercise Accessories", "Ayurvedic Medicines", "Post-Surgery Aids"].map((item, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <span className="text-secondary font-bold text-lg leading-none">»</span> 
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* START YOUR RECOVERY TODAY! */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-primary flex flex-col lg:flex-row items-center justify-between gap-8 rounded-3xl p-6 lg:p-8 relative overflow-hidden shadow-2xl">
             {/* Background map/glow */}
             <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
             
             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10 text-center sm:text-left">
               <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                 <Calendar className="text-primary w-10 h-10" />
               </div>
               <div className="space-y-1">
                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-wide">
                   START YOUR <span className="text-yellow-400">RECOVERY TODAY!</span>
                 </h2>
                 <p className="text-white font-medium text-lg">Clinic Visit & Home Visit Available</p>
                 <p className="text-white/80 text-sm">Personalized Treatment for Faster & Lasting Results</p>
               </div>
             </div>

             <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full lg:w-auto">
               <a href="tel:+919724385791" className="flex items-center justify-center gap-3 bg-primary text-white border-2 border-white/20 hover:bg-white/10 px-6 py-4 rounded-xl transition-colors w-full sm:w-auto min-w-[200px]">
                 <PhoneCall className="w-6 h-6" />
                 <div className="text-left">
                   <p className="text-[11px] opacity-80 leading-none mb-1 font-medium uppercase tracking-wider">Call Now</p>
                   <p className="font-bold text-lg leading-none">97243 85791</p>
                 </div>
               </a>
               <a href="https://wa.me/919724385791" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl transition-colors w-full sm:w-auto min-w-[200px] shadow-lg">
                 <MessageSquare className="w-6 h-6" />
                 <div className="text-left">
                   <p className="text-[11px] opacity-90 leading-none mb-1 font-medium uppercase tracking-wider">WhatsApp Us</p>
                   <p className="font-bold text-lg leading-none">97243 85791</p>
                 </div>
               </a>
               

             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;
