import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="section-padding bg-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our clinic, patient recovery stories, and memorable moments.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Videos Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center animate-fade-in-up">
              Patient Recovery Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
                <video loop autoPlay muted className="w-full h-full object-cover">
                  <source src="/video%201.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Video 2 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
                <video loop autoPlay muted className="w-full h-full object-cover">
                  <source src="/video%202.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Video Placeholder 3 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
                <video loop autoPlay muted className="w-full h-full object-cover">
                  <source src="/video3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Patient Recovery Images Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center animate-fade-in-up">
              Patient Recovery Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Recovery Image 1 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img src="/recovery%201.jpg" alt="Patient Recovery 1" className="w-full h-full object-cover" />
              </div>

              {/* Recovery Image 2 */}
              {/* <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img src="/recovery%202.jpg" alt="Patient Recovery 2" className="w-full h-full object-cover" />
              </div> */}

              {/* Recovery Image 3 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img src="/recovery%203.jpg" alt="Patient Recovery 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center animate-fade-in-up">
              Clinic Images
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto">
              {/* Clinic Image 2 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow">
                <img src="/clinic%202.jpg" alt="Clinic 2" className="w-full h-full object-cover" />
              </div>
              {/* Clinic Image 3 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow">
                <img src="/clinic%203.jpg" alt="Clinic 3" className="w-full h-full object-cover" />
              </div>
              {/* Clinic Image 4 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow">
                <img src="/clinic%204.jpg" alt="Clinic 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Educational Blog / Resources Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center animate-fade-in-up">
              Educational Blog / Resources
            </h3>
            <div className="columns-2 md:columns-3 gap-6">
              {/* Educational Blog Image 1 */}
              <div className="rounded-lg overflow-hidden shadow mb-6 break-inside-avoid">
                <img src="/assets/educational_blogs/education_blog_1.jpeg" alt="Educational Resource 1" className="block w-full" />
              </div>
              {/* Educational Blog Image 2 */}
              <div className="rounded-lg overflow-hidden shadow mb-6 break-inside-avoid">
                <img src="/assets/educational_blogs/education_blog_2.jpeg" alt="Educational Resource 2" className="block w-full" />
              </div>
              {/* Educational Blog Image 3 */}
              <div className="rounded-lg overflow-hidden shadow mb-6 break-inside-avoid">
                <img src="/assets/educational_blogs/education_blog_3.jpeg" alt="Educational Resource 3" className="block w-full" />
              </div>
              {/* Educational Blog Image 4 */}
              <div className="rounded-lg overflow-hidden shadow mb-6 break-inside-avoid">
                <img src="/assets/educational_blogs/education_blog_4.jpeg" alt="Educational Resource 4" className="block w-full" />
              </div>
              {/* Educational Blog Image 5 */}
              <div className="rounded-lg overflow-hidden shadow mb-6 break-inside-avoid">
                <img src="/assets/educational_blogs/education_blog_5.jpeg" alt="Educational Resource 5" className="block w-full" />
              </div>
              {/* Educational Blog Image 6 */}
              <div className="rounded-lg overflow-hidden shadow mb-6 break-inside-avoid">
                <img src="/assets/educational_blogs/education_blog_6.jpeg" alt="Educational Resource 6" className="block w-full" />
              </div>
            </div>
          </div>


          {/* Surgical Images Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center animate-fade-in-up">
              Surgical Images
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto">
              {/* Surgical Image 2 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow">
                <img src="/assets/surgical/adult_diapers.jpeg" alt="Surgical 2" className="w-full h-full object-cover" />
              </div>
              {/* Surgical Image 3 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow">
                <img src="/assets/surgical/knee_caps.jpeg" alt="Surgical 3" className="w-full h-full object-cover" />
              </div>
              {/* Surgical Image 4 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden shadow">
                <img src="/assets/surgical/rent_services.jpeg" alt="Surgical 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;