import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

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
      icon: "👩‍⚕️",
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
      icon: "👨‍⚕️",
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
      icon: "👩‍⚕️",
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
      icon: "👩‍⚕️",
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
    <div className="min-h-screen">
      <Header />



      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Leadership</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Dev Physiotherapy & Healthcare Center, our strength lies in a dedicated team of experts committed to delivering advanced, patient-centered care. Our multidisciplinary approach ensures faster recovery, long-term results, and holistic wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
              <Card 
                key={leader.id} 
                className="overflow-hidden shadow-premium border-0 animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 h-full">
                    <div className="w-56 h-56 flex-shrink-0 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg mt-4">
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center sm:pt-6 bg-white z-10 relative text-center sm:text-left">
                      <h3 className="text-3xl font-bold text-primary mb-2">{leader.name}</h3>
                      <p className="text-secondary text-lg font-medium mb-6">{leader.role}</p>
                      {leader.details ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-max mx-auto sm:mx-0 bg-primary hover:bg-primary/90 text-white shadow-soft">
                              View Profile
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
                            
                            <div className="space-y-6 text-gray-700 mt-2 px-2 sm:px-6 pb-6">
                              <div className="text-center space-y-1 bg-gray-50 p-4 rounded-xl shadow-inner">
                                <p className="font-semibold text-primary">{leader.details.qualifications}</p>
                                <p className="text-sm font-medium">{leader.details.designation}</p>
                                <p className="font-medium flex items-center justify-center gap-1 mt-3">📍 <span className="text-secondary">Experience:</span> {leader.details.experience}</p>
                              </div>

                              <div>
                                 <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 About:</h4>
                                 <p className="leading-relaxed text-sm sm:text-base text-justify">{leader.details.about}</p>
                              </div>

                              <div>
                                 <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 Expertise:</h4>
                                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                   {leader.details.expertise.map((item, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm sm:text-base bg-white border border-gray-100 p-2 rounded-lg shadow-sm">
                                        <span className="text-secondary mt-0.5">✔</span>
                                        <span className="flex-1">{item}</span>
                                      </li>
                                   ))}
                                 </ul>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Button className="w-max mx-auto sm:mx-0 bg-primary hover:bg-primary/90 text-white shadow-soft">
                          View Profile
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

        </div>
      </section>

      {/* Team Members Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Experts</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.id} 
                className="overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 animate-fade-in-up border-0 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center pt-8 pb-4">
                  <div className="w-48 h-48 overflow-hidden rounded-full border-4 border-primary/10 shadow-inner">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <CardContent className="px-6 pb-6 pt-0 text-center flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1 transition-colors group-hover:text-secondary">{member.name}</h3>
                    <p className="text-gray-600 text-sm font-medium mb-5">{member.role}</p>
                  </div>
                  {member.details ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white transition-colors">
                          View Profile
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
                          <div className="text-center space-y-1 bg-gray-50 p-4 rounded-xl shadow-inner">
                            <p className="font-semibold text-primary">{member.details.qualifications}</p>
                            {member.details.designation && <p className="text-sm font-medium">{member.details.designation}</p>}
                            <p className="font-medium flex items-center justify-center gap-1 mt-3">📍 <span className="text-secondary">{member.details.experience.includes('Joined') ? '' : 'Experience:'}</span> {member.details.experience}</p>
                          </div>

                          <div>
                             <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 About:</h4>
                             <p className="leading-relaxed text-sm sm:text-base text-justify">{member.details.about}</p>
                          </div>

                          <div>
                             <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 Expertise:</h4>
                             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                               {member.details.expertise.map((item: string, idx: number) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm sm:text-base bg-white border border-gray-100 p-2 rounded-lg shadow-sm">
                                    <span className="text-secondary mt-0.5">✔</span>
                                    <span className="flex-1">{item}</span>
                                  </li>
                               ))}
                             </ul>
                          </div>

                          {member.details.specialSkills && (
                            <div>
                               <h4 className="font-bold text-primary text-lg flex items-center gap-2 mb-3">🔹 Special Skills:</h4>
                               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                 {member.details.specialSkills.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base bg-white border border-gray-100 p-2 rounded-lg shadow-sm">
                                      <span className="text-secondary mt-0.5">✔</span>
                                      <span className="flex-1">{item}</span>
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
                                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base bg-white border border-gray-100 p-2 rounded-lg shadow-sm">
                                      <span className="text-secondary mt-0.5">✔</span>
                                      <span className="flex-1">{item}</span>
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
                                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base bg-white border border-gray-100 p-2 rounded-lg shadow-sm">
                                      <span className="text-secondary mt-0.5">✔</span>
                                      <span className="flex-1">{item}</span>
                                    </li>
                                 ))}
                               </ul>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white transition-colors">
                      View Profile
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
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

export default OurTeam;
