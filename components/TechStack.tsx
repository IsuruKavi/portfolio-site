'use client'
import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaNodeJs,

  FaJs,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { FaAws, FaDocker } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export default function TechStack() {
  const techIcons = [
    { icon: <FaAws />, color: "text-orange-500", id: 0 },
    { icon: <FaDocker />, color: "text-blue-500", id: 1 },
    { icon: <FaJs />, color: "text-yellow-400", id: 2 },
    { icon: <SiTypescript />, color: "text-blue-400", id: 3 },
    { icon: <FaReact />, color: "text-cyan-400", id: 4 },
    { icon: <SiTailwindcss />, color: "text-teal-400", id: 5 },
    { icon: <FaNodeJs />, color: "text-green-500", id: 6 },
    { icon: <SiPostgresql />, color: "text-blue-300", id: 7 },
    { icon: <FaJava />, color: "text-red-500", id: 8 },
    { icon: <SiMongodb />, color: "text-green-400", id: 9 },
    { icon: <FaGithub />, color: "text-white", id: 10 },
  ];

  const [activeIcon, setActiveIcon] = useState<number | null>(null);
  const [isAutoAnimating, setIsAutoAnimating] = useState(true);

  // Smoother random animation
  useEffect(() => {
    if (!isAutoAnimating) return;

    let timeout: NodeJS.Timeout;

    const animate = () => {
      const randomIndex = Math.floor(Math.random() * techIcons.length);
      setActiveIcon(randomIndex);
      
      timeout = setTimeout(() => {
        setActiveIcon(null);
        timeout = setTimeout(animate, 1500); // Delay between animations
      }, 1000); // Highlight duration
    };

    timeout = setTimeout(animate, 1000); // Initial delay

    return () => clearTimeout(timeout);
  }, [techIcons.length, isAutoAnimating]);

  const handleMouseEnter = (id: number) => {
    setIsAutoAnimating(false);
    setActiveIcon(id);
  };

  const handleMouseLeave = () => {
    setIsAutoAnimating(true);
    setActiveIcon(null);
  };

  return (
    <div className="bg-black-100 md:pb-16 md:pt-5 px-4">
      <h2 className="text-white text-center text-2xl md:text-4xl font-semibold mb-10 font-poppins">
        My Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {techIcons.map((tech) => (
          <div 
            key={tech.id}
            onMouseEnter={() => handleMouseEnter(tech.id)}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer"
          >
            <TechIcon 
              icon={tech.icon} 
              color={tech.color}
              isActive={activeIcon === tech.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TechIcon({ 
  icon, 
  color, 
  isActive 
}: { 
  icon: React.ReactNode; 
  color: string;
  isActive: boolean;
}) {
  return (
    <div className={`
      relative
      transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
      transform ${isActive ? 'scale-110 grayscale-0' : 'scale-100 grayscale'}
      ${color} text-4xl md:text-5xl filter
      will-change-transform
    `}>
      <div className="absolute inset-0 transition-all duration-300 opacity-0 hover:opacity-100">
        {icon}
      </div>
      <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-100'}`}>
        {icon}
      </div>
    </div>
  );
}