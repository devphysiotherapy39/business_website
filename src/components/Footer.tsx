
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
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">
                D
              </div>
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
                  <p>Mon-Sat: 9AM-1PM</p>
                  <p>Evening: 4PM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © 2024 Dev Physiotherapy & Healthcare Center. All rights reserved.
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
