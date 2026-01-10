import { Megaphone } from "lucide-react";

export const NotificationSection = () => {
    return (
        <div className="w-full bg-gradient-to-r from-primary/90 to-secondary/80 shadow-lg rounded-b-xl py-2 px-4 flex items-center gap-4 animate-fade-in-down">
            <span className="flex items-center gap-2 text-white font-semibold text-lg md:text-xl">
                <Megaphone className="w-5 h-5 text-yellow-300" />
                Latest Updates
            </span>
            <div className="overflow-hidden flex-1">
                <span className="block whitespace-nowrap animate-marquee text-white font-medium text-base md:text-lg">
                    We are committed to giving high quality care at affordable levels to those in need of PHYSIOTHERAPY SERVICES
                    <a
                        href="https://posts.gle/WQksdd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 underline text-yellow-200 hover:text-yellow-300 transition-colors"
                    >
                        Click here for more information
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