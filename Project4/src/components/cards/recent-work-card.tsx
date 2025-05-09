import React, { useState } from "react";
import arrowWhite from "../../assets/arrow_white.svg"
import arrowBlack from "../../assets/arrow_black.svg"

interface ServiceLinkCardProps {
    title: string;
    subtitle: string;
    href: string;
}
  
const ServiceLinkCard: React.FC<ServiceLinkCardProps> = ({ title, subtitle, href }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col items-start gap-5 w-full">
                <h2 className="text-6xl font-normal text-black">{title}</h2>
                <p className="text-sm text-gray-700">{subtitle}</p>
            </div>
            <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[85.25px] h-[85.25px] gap-[10px] opacity-80 border border-black rounded-[180px] p-[20px] hover:bg-black hover:text-white transition my-5 ml-5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <img src={isHovered ? arrowWhite : arrowBlack} className={`transition-transform duration-300 ${isHovered ? "rotate-45" : "rotate-0"}`}/>
            </a>
        </div>
    );
};

export default ServiceLinkCard;