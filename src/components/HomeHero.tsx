
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import AshParticles from './AshParticles';

const HomeHero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Ash Particles Effect */}
      <AshParticles />
      
      {/* Background image with overlay */}
      <div 
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/736x/44/25/d6/4425d68e062d66a1f07393d7ed1fed43.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/70 to-charcoal-900"></div>
      </div>
      
      <div className="container max-w-[60vw] relative z-20">
        <div className="overflow-visible">
          <div ref={titleRef} className="mb-6">
            <h1 className="font-serif text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] font-medium text-white leading-tight tracking-wide">
              L'arte della <span className="text-highlight text-[#CC4140]">brace</span>,<br />
              la passione per la <span className="text-highlight text-[#CC4140]">carne</span>
            </h1>
          </div>
          
          <p ref={subtitleRef} className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl">
            Le migliori carni nostrane, italiane e internazionali, cucinate alla brace e condite con i migliori ingredienti della nostra terra.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-12 items-start sm:items-center">
            <Link to="/menu" className="btn bg-[#CC4140] text-white py-4 px-10 text-base font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#b33937] active:translate-y-0.5 active:shadow-inner">
              Scopri il Menù
            </Link>
            
            {/* Review ratings moved next to button */}
            <div className="flex flex-col sm:flex-row gap-6 mt-6 sm:mt-0 sm:ml-8">
              {/* TripAdvisor Rating */}
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-md flex justify-center items-center">
                  <img 
                    src="https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-1/300636569_596916118499317_1099500544584127960_n.png?stp=dst-png_s480x480&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=ASuMT1cDxewQ7kNvwFYvf8I&_nc_oc=AdmI8guaWV16DtPxXPrXx2uATRblBk-s7zJ0I-PqrCCTln8EXcrWy7tYqDNwjFAtrX4&_nc_zt=24&_nc_ht=scontent-fco2-1.xx&_nc_gid=sMc5gtwk1AD2TfNAi-9CyQ&oh=00_AfEs9ADdd0GlBE9RNnf2EAIbkoyjqvHk_TU4bRamMQEJww&oe=67FB5EA0" 
                    alt="TripAdvisor Logo" 
                    className="h-5 w-auto"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-semibold text-lg">4.4</span>
                    <div className="flex">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-transparent text-yellow-400" strokeWidth={1.5} />
                    </div>
                  </div>
                  <span className="text-slate-300 text-sm">73 recensioni</span>
                </div>
              </div>
              
              {/* Google Rating */}
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-md flex justify-center items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.61 22.56 12.25Z" fill="#4285F4"/>
                    <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13 18.63 6.72 16.69 5.81 14.1H2.12V16.94C3.94 20.53 7.69 23 12 23Z" fill="#34A853"/>
                    <path d="M5.81 14.1C5.58 13.47 5.45 12.79 5.45 12.09C5.45 11.39 5.58 10.71 5.81 10.08V7.24H2.12C1.41 8.69 1 10.35 1 12.09C1 13.83 1.41 15.49 2.12 16.94L5.81 14.1Z" fill="#FBBC05"/>
                    <path d="M12 5.55C13.55 5.55 14.98 6.14 16.11 7.21L19.28 4.05C17.46 2.35 14.97 1.35 12 1.35C7.69 1.35 3.94 3.82 2.12 7.41L5.81 10.25C6.72 7.66 9.13 5.55 12 5.55Z" fill="#EA4335"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-semibold text-lg">4.7</span>
                    <div className="flex">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-60" />
                    </div>
                  </div>
                  <span className="text-slate-300 text-sm">535 recensioni</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
