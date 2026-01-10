import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Dev Physiotherapy Logo"
                className="w-10 h-10 rounded-full object-cover border-2 border-secondary shadow"
                draggable={false}
              />
              <div>
                <h3 className="text-lg font-bold">Dev Physiotherapy</h3>
                <p className="text-sm text-blue-200">& Healthcare Center</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Premium healthcare combining modern physiotherapy, traditional ayurvedic treatments,
              and advanced surgical care for comprehensive healing.
            </p>
            <div className="text-center">
              <p className="font-semibold text-secondary">Life is Motion — Motion is Life</p>
            </div>
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://www.facebook.com/share/16UTLKQWJ6/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z" /></svg>
              </a>
              <a href="https://www.instagram.com/dr_hitesh_d_prajapati?igsh=MXJwbjQ4NjFvanNuag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/dr-hitesh-prajapati-b52a9aa2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595zm0 0" /></svg>
              </a>
              <a href="https://youtube.com/@drhiteshprajapatiphysio?si=9JMWAvZuFkagsaEa" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.545 3.5 12 3.5 12 3.5s-7.545 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.027 0 12 0 12s0 3.973.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.455 20.5 12 20.5 12 20.5s7.545 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.973 24 12 24 12s0-3.973-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z" /></svg>
              </a>
              <a href="https://wa.me/919724385791" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.26-1.64A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.72.98.99-3.62-.25-.37C2.5 15.68 2 13.85 2 12 2 6.48 6.48 2 12 2c2.4 0 4.63.84 6.42 2.36A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2.01 3.07 4.88 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>Physiotherapy</li>
              <li>Neurotherapy</li>
              <li>Chiropractic Treatment</li>
              <li>Ayurvedic Medicine</li>
              <li>Pain Management</li>
              <li>Rehabilitation</li>
              <li>Home Visits</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <div className="text-sm">
                  <p>97243 85791</p>
                  <p>94285 61294</p>
                  <p>84870 94533</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-1" />
                <div className="text-sm text-blue-200">
                  <p className="font-medium">Gotri & Vasna</p>
                  <p>Vadodara, Gujarat</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-secondary mt-1" />
                <div className="text-sm text-blue-200">
                  <p>Mon-Sat: 9AM-9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © 2024 TEJASKP AI SOFTWARE. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-blue-200">
              <span>Reg. No.: GPC-7179</span>
              <span>|</span>
              <span>Certified Healthcare Provider</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};