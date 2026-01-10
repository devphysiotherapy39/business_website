import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Clock, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NotificationSection } from "@/components/NotificationSection";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },   // <-- Add this line
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 9AM-2PM, 5PM-10PM</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Gotri & Vasna, Vadodara</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:9724385791" className="flex items-center gap-1 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                <span>97243 85791</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : 'bg-white/95'
        }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Dev Physiotherapy Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary shadow"
                draggable={false}
              />
              <div>
                <h1 className="text-xl font-bold text-primary">Dev Physiotherapy</h1>
                <p className="text-sm text-gray-600">& Healthcare Center</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-700'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link to="/contact">Home Visit Available</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors ${isActive(item.href) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link to="/contact">Home Visit Available</Link>
                </Button>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      <NotificationSection />
    </>
  );
};