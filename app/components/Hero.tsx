
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative bg-gradient-to-br from-french-grey to-white overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-french-blue/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-french-red/5 blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="max-w-3xl">
            <h2 className="text-lg md:text-xl font-medium text-french-blue mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Bonjour, je suis
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Développeur <br />
              <span className="gradient-text">Full Stack</span>
            </h1>
            <p className="text-lg md:text-xl text-french-navy/80 max-w-xl mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Passionné par la création d'applications web élégantes et performantes, 
              j'apporte "la French Touch" à chacun de mes projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-french-blue text-white rounded-md hover:bg-french-navy transition-colors duration-300 text-center font-medium"
              >
                Voir mes projets
              </a>
              <a 
                href="/services" 
                className="px-8 py-3 border border-french-blue text-french-blue rounded-md hover:bg-french-blue/5 transition-colors duration-300 text-center font-medium"
              >
                Mes services
              </a>
            </div>
          </div>
          
          <div className="md:flex-shrink-0 animate-slide-left opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-french-blue to-french-red rounded-full p-1">
                <Avatar className="w-full h-full rounded-full border-4 border-white">
                  <AvatarImage src="/placeholder.svg" alt="Photo de profil" className="object-cover" />
                  <AvatarFallback className="bg-french-grey">FD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-french-navy/50 hover:text-french-blue transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
