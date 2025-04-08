
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
      
      <div className="container relative z-20">
        <div className="max-w-[55vw] overflow-visible">
          <div ref={titleRef} className="mb-6">
            <h1 className="font-serif text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] font-medium text-white leading-tight tracking-wide">
              L'arte della <span className="text-highlight text-[#CC4140]">brace</span>,<br />
              la passione per la <span className="text-highlight text-[#CC4140]">carne</span>
            </h1>
          </div>
          
          <p ref={subtitleRef} className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl">
            Le migliori carni nostrane, italiane e internazionali, cucinate alla brace e condite con i migliori ingredienti della nostra terra.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-8">
            <Link to="/menu" className="btn bg-[#CC4140] text-white py-4 px-10 text-base font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#b33937] active:translate-y-0.5 active:shadow-inner">
              Scopri il Menù
            </Link>
          </div>
          
          {/* Review ratings */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* TripAdvisor Rating */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#00af87] rounded-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 16.54C16.4 16.8 16.04 16.84 15.76 16.62C14.13 15.3 12.07 14.58 9.83 14.58C8.24 14.58 6.74 14.9 5.36 15.54C5.04 15.68 4.68 15.56 4.54 15.24C4.42 14.92 4.52 14.56 4.84 14.42C6.4 13.7 8.1 13.34 9.83 13.34C12.3 13.34 14.68 14.16 16.54 15.66C16.82 15.88 16.86 16.28 16.64 16.54ZM17.74 13.76C17.46 14.08 17.02 14.14 16.7 13.86C14.72 12.32 12.2 11.44 9.38 11.44C7.5 11.44 5.74 11.84 4.16 12.62C3.8 12.78 3.38 12.62 3.22 12.26C3.06 11.9 3.2 11.48 3.56 11.32C5.36 10.44 7.36 10 9.38 10C12.5 10 15.32 11 17.64 12.8C17.96 13.08 18.02 13.54 17.74 13.86ZM19.04 10.66C18.7 11.04 18.16 11.12 17.78 10.78C15.44 9 12.22 7.98 8.66 7.98C6.54 7.98 4.42 8.38 2.56 9.16C2.14 9.34 1.68 9.12 1.5 8.7C1.32 8.28 1.54 7.82 1.96 7.64C4.02 6.78 6.38 6.34 8.66 6.34C12.62 6.34 16.18 7.46 18.9 9.54C19.28 9.86 19.36 10.42 19.04 10.66Z" fill="white"/>
                </svg>
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
  );
};

export default HomeHero;
