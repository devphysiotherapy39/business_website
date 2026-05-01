import { Megaphone } from "lucide-react";

export const NotificationSection = () => {
    return (
        <div className="w-full bg-gradient-to-r from-primary/90 to-secondary/80 shadow-lg rounded-b-xl py-2 px-4 flex items-center gap-4 animate-fade-in-down">
            <span className="flex items-center gap-2 text-white font-semibold text-lg md:text-xl">
                <Megaphone className="w-5 h-5 text-yellow-300" />
                Latest Updates
            </span>
            <div className="overflow-hidden flex-1">
                <span className="block whitespace-nowrap animate-marquee text-white font-medium text-base md:text-lg flex items-center">
                    <span className="text-yellow-300 font-bold italic mr-3">“Smart people don’t chase relief - they fix the cause.”</span>
                    <span className="opacity-90 hidden md:inline">• Dev Physiotherapy & Healthcare Center - Vadodara</span>
                    <a
                        href="https://share.google/4cLBFAYDICHhcs9QJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 bg-white text-primary px-4 py-1 rounded-full text-sm font-bold hover:bg-yellow-100 transition-colors shadow-sm"
                    >
                        Read More
                    </a>
                </span>
            </div>
        </div>
    );
};

// Add the following CSS to your global styles (e.g., index.css or App.css):
// .animate-marquee {
//   display: inline-block;
//   animation: marquee 18s linear infinite;
// }
// @keyframes marquee {
//   0% { transform: translateX(100%); }
//   100% { transform: translateX(-100%); }
// } 