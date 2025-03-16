'use client';

import { useEffect, useState } from 'react';

interface HeroProps {
  title: string;
  description?: string;
  className?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({ 
  title, 
  description, 
  className = '',
  backgroundImage,
  ctaText,
  ctaHref
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative min-h-[90vh] flex items-center ${className}`}>
      {/* Left Content Section */}
      <div className="absolute inset-0 w-full lg:w-1/2 bg-brand-black">
        <div 
          className={`relative z-10 h-full flex items-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="max-w-2xl mx-auto px-6 lg:px-12 py-24">
            <div className="relative">
              <div className="h-1 w-20 bg-brand-gold mb-8 transform origin-left transition-transform duration-1000 ease-out scale-x-0" 
                style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }} 
              />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-gold mb-8">
                {title}
              </h1>
              {description && (
                <p className="text-xl leading-relaxed text-gray-100 max-w-xl mb-12">
                  {description}
                </p>
              )}
              {ctaText && ctaHref && (
                <div className="relative inline-block group">
                  <a
                    href={ctaHref}
                    className="relative z-10 inline-flex items-center px-8 py-4 text-lg font-semibold text-brand-black bg-brand-gold rounded-lg transition-transform duration-300 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2"
                  >
                    {ctaText}
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <div className="absolute inset-0 bg-brand-gold-light rounded-lg transform translate-x-2 translate-y-2" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden">
        {backgroundImage ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-transparent z-10" />
            <img
              src={backgroundImage}
              alt=""
              className={`h-full w-full object-cover transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          </>
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-brand-black to-brand-black-light" />
        )}
      </div>
    </div>
  );
} 