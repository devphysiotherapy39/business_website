import { CheckCircle2 } from "lucide-react";

export const TreatmentApproachSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            🔴 OUR UNIQUE TREATMENT APPROACH
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At <strong>Dev Physiotherapy & Healthcare Center</strong>, we believe that the human body works as an interconnected system through neurological pathways and movement chains. Pain in one area is often linked to dysfunction in another part of the body.
            <br /><br />
            Under the guidance and leadership of <strong>Dr. Hitesh D. Prajapati</strong>, we follow a specialized chain-based assessment and treatment approach, developed through extensive clinical experience and research on 15,000+ patients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* What Makes Our Approach Different? */}
          <div className="bg-white rounded-2xl p-8 shadow-premium mb-12 animate-fade-in-up animation-delay-100">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="text-3xl">🔬</span> What Makes Our Approach Different?
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Detailed assessment beyond the painful area",
                "Identification of interconnected body segments (muscle & nerve chains)",
                "Prediction of future problem areas",
                "Complete whole-body treatment planning",
                "Focus on root cause treatment with long-term recovery, not temporary relief"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 p-6 rounded-xl space-y-4">
              <p className="text-lg text-blue-900 font-medium flex items-start gap-2 bg-yellow-100 p-3 rounded-lg border-l-4 border-red-500 shadow-sm">
                <span className="text-xl">👉</span> 
                <span className="font-bold text-red-600 text-xl tracking-wide">We don’t just treat where it hurts — we treat why it hurts.</span>
              </p>
              <p className="text-lg text-blue-900 font-medium flex items-start gap-2">
                <span className="text-xl">👉</span> This method allows us to treat the actual source of the problem, ensuring better and lasting results.
              </p>
              <p className="text-lg text-blue-900 font-medium flex items-start gap-2">
                <span className="text-xl">👉</span> These techniques are continuously refined by Dr. Hitesh Prajapati through years of hands-on clinical practice and patient outcomes.
              </p>
            </div>
          </div>

          {/* Diagram Image */}
          <div className="w-full mb-12 animate-fade-in-up animation-delay-200">
            <img 
              src="/poster.jpeg" 
              alt="Why Full Body Treatment? Pain Travels & Builds Up Along the Body's Chain" 
              className="w-full h-auto rounded-2xl shadow-xl object-contain border-4 border-white"
            />
          </div>

          {/* Consistent Quality */}
          <div className="bg-white rounded-2xl p-8 shadow-premium mb-12 animate-fade-in-up animation-delay-300">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="text-3xl">🏠</span> Consistent Quality – Clinic & Home Visit
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We ensure the same high standard of care and advanced treatment at:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700"><strong>In-Clinic Sessions</strong> (Structured & Equipment-based Therapy)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700"><strong>Home Visit Services</strong> (Personalized One-to-One Care)</span>
              </li>
            </ul>
            <p className="text-lg text-primary font-semibold flex items-center gap-2 bg-blue-50/50 p-4 rounded-lg">
              <span>👉</span> Delivering convenience without compromising quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up animation-delay-400">
            {/* Treatment Goal */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-premium border border-blue-100">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="text-3xl">🎯</span> OUR TREATMENT GOAL
              </h3>
              <ul className="space-y-4">
                {[
                  "Eliminate pain from the root cause",
                  "Restore full-body function",
                  "Prevent recurrence of the condition",
                  "Provide long-term, sustainable recovery"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Promise */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-premium border border-orange-100 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                <span className="text-3xl">💬</span> Our Promise
              </h3>
              <p className="text-xl text-gray-800 font-medium italic leading-relaxed">
                "We don’t just treat the pain — <br/>
                <span className="text-primary font-bold">We understand the chain behind it and treat the cause.</span>"
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-primary text-white rounded-2xl p-8 shadow-premium text-center animate-fade-in-up animation-delay-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3 relative z-10">
              <span className="text-3xl">💡</span> OUR MISSION
            </h3>
            <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto relative z-10 font-medium">
              To provide high-quality, ethical, and result-oriented healthcare through a perfect blend of modern physiotherapy and traditional healing systems, ensuring complete recovery and long-term wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
