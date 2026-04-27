
import { MessageCircle } from "lucide-react";

export const FloatingWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919724385791"; // WhatsApp number with country code
    const message = "Hello! I would like to book an appointment at Dev Physiotherapy & Healthcare Center.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
    </button>
  );
};
