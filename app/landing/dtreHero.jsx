import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import {motion} from 'framer-motion';
import Image from 'next/image';

// Use regular img tag for local images to avoid Next.js optimization issues with deployment
const PLACEHOLDER_URLS = {
  port: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k1879599e9xv9vb0mamejvh5%2F1753696582_img_0.webp?st=2025-07-28T08%3A53%3A48Z&se=2025-08-03T09%3A53%3A48Z&sks=b&skt=2025-07-28T08%3A53%3A48Z&ske=2025-08-03T09%3A53%3A48Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=h6OqLd6o4d0%2BZPPfVAtWoOJbZZmMJO1lPWCo1JImLs8%3D&az=oaivgprodscus',
  isoCert: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k17n8pk6em3bz8gej9w84chp%2F1753677623_img_1.webp?st=2025-07-28T03%3A24%3A50Z&se=2025-08-03T04%3A24%3A50Z&sks=b&skt=2025-07-28T03%3A24%3A50Z&ske=2025-08-03T04%3A24%3A50Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=dMGhy3Y6NixrcV2M6BUJ2gtPr68m1ws91JHR5tBHSVs%3D&az=oaivgprodscus',
  divisions: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k17mzn4fe71tjvgsght9998d%2F1753677333_img_1.webp?st=2025-07-28T03%3A23%3A06Z&se=2025-08-03T04%3A23%3A06Z&sks=b&skt=2025-07-28T03%3A23%3A06Z&ske=2025-08-03T04%3A23%3A06Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Klpw5tu3DBcRXnpVbmrjuv3WUEG%2FC3HfHXT0w6QpAEA%3D&az=oaivgprodscus',
  worldMap: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k187gcccextszkqf1n23hkqk%2F1753696840_img_1.webp?st=2025-07-28T08%3A55%3A49Z&se=2025-08-03T09%3A55%3A49Z&sks=b&skt=2025-07-28T08%3A55%3A49Z&ske=2025-08-03T09%3A55%3A49Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3YpprX0vap1PBumj3chf%2B97KLMIjsRjwDCU%2Bk1ZSTvI%3D&az=oaivgprodscus',
  logoFerro: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=60&h=40&fit=crop',
  logoGreen: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=60&h=40&fit=crop',
  logoMineral: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=60&h=40&fit=crop'
};

const slides = [
  {
    ariaLabel: 'Core Mission & Global Scale',
    background: PLACEHOLDER_URLS.port,
    isVideo: false,
    headline: 'Trusted by Global Manufacturers. Empowering End Users Worldwide."',
    subtext: 'Driven by a dynamic quality policy, we ensure excellence at every stage—from sourcing to delivery of top-tier materials.',
    ctaText: 'Get a Quote',
    ctaLink: '/contact'
  },
  {
    ariaLabel: 'Quality & Certification Highlight',
    background: PLACEHOLDER_URLS.isoCert,
    isVideo: false,
    headline: 'ISO 9001:2008 Certified. Unmatched Quality Control.',
    subtext: 'From sourcing to delivery, our dynamic quality policy ensures you receive only top-grade materials.',
    ctaText: 'Read Quality Policy',
    ctaLink: '/quality-policy'
  },
  {
    ariaLabel: 'Company Divisions Snapshot',
    background: PLACEHOLDER_URLS.divisions,
    isVideo: false,
    headline: 'Eight Specialized Divisions. One Unified Vision.',
    subtext: 'Explore how each IQ Group company delivers excellence in its niche.',
    ctaText: 'Discover Our Companies',
    ctaLink: '/our-companies',
  },
  {
    ariaLabel: 'Operating in 20+ Countries. Serving 15+ Industries.',
    background: PLACEHOLDER_URLS.worldMap,
    isVideo: false,
    headline: 'Operating in 20+ Countries. Serving 15+ Industries.',
    subtext: 'Our global network and local expertise keep your supply chain agile.',
    
    ctaLink: '/global-presence',
    animatedStats: [
      { value: 20, suffix: '+', label: 'Countries' },
      { value: 15, suffix: '+', label: 'Industries' },
      { value: 500000, suffix: '+', label: 'Tons' }
    ]
  }
];

const AnimatedCounter = ({ value, suffix, label, isActive }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isActive) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isActive, value]);

  return (
    <div className="text-center text-white">
      <div className="text-[20px] md:text-[32px] font-lato font-bold">
        {displayValue.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm font-onest font-light opacity-90 mt-1">{label}</div>
    </div>
  );
};

export default function DTREHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0); // Key to force progress bar restart
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextSlideIndex, setNextSlideIndex] = useState(null);
  const progressRefs = useRef([]);

  const SLIDE_DURATION = 4000; // 4 seconds - make sure this matches progress animation
  const TRANSITION_DURATION = 300; // 300ms for quick completion of current progress

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  // Handle smooth transition between slides
  const handleSlideChange = (nextIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setNextSlideIndex(nextIndex);
    
    // Complete current progress bar quickly
    const currentBar = progressRefs.current[currentSlide];
    if (currentBar) {
      currentBar.style.transition = `width ${TRANSITION_DURATION}ms linear`;
      currentBar.style.width = '100%';
    }
    
    // After quick completion, move to next slide
    setTimeout(() => {
      setCurrentSlide(nextIndex);
      setProgressKey(prevKey => prevKey + 1);
      setIsTransitioning(false);
      setNextSlideIndex(null);
    }, TRANSITION_DURATION);
  };

  const goToSlide = (index) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsPlaying(false);
    handleSlideChange(index);
    setTimeout(() => setIsPlaying(true), TRANSITION_DURATION + 100);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    console.log('nextSlide');
    
    const nextIndex = (currentSlide + 1) % slides.length;
    setIsPlaying(false);
    handleSlideChange(nextIndex);
    setTimeout(() => setIsPlaying(true), TRANSITION_DURATION + 100);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    setIsPlaying(false);
    handleSlideChange(prevIndex);
    setTimeout(() => setIsPlaying(true), TRANSITION_DURATION + 100);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className="relative w-full min-h-[93vh] max-h-[100vh] md:h-screen flex items-center  md:items-center justify-start overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Image/Video with Overlay */}
      <div className="absolute inset-0">
        <img
          src={currentSlideData.background}
          alt={currentSlideData.ariaLabel}
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className='absolute inset-0 bg-black/30'></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-white/10"></div> */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-0 mt-[-7vh]  mx-auto md:mt-[-50px] px-6 lg:px-8 w-full">
        <div className="max-w-3xl pt-20 lg:max-w-[800px] md:pl-[20px] md:pt-0">
          {/* Headline */}
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[50px] lg:leading-[1.05] xl:text-[55px] font-lato font-bold text-white leading-tight mb-4 md:mb-6">
            {currentSlideData.headline}
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-[20px] md:text-[24px] lg:text-[32px] font-onest font-light text-white/90 mb-6 md:mb-8 leading-relaxed">
            {currentSlideData.subtext}
          </p>

          {/* CTA Button */}
          {currentSlideData.ctaText && <button 
            className="inline-flex items-center gap-2 md:gap-3 bg-[#203663] border-1 border-[#203663] hover:bg-[#fbfbfb] hover:text-[#203663] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-onest font-light transition-all duration-300 transform cursor-pointer"
            onClick={() => console.log(`Navigate to: ${currentSlideData.ctaLink}`)}
          >
            <ExternalLink size={16} className="md:w-5 md:h-5" />
            {currentSlideData.ctaText}
          </button>}

          {/* Supplemental Logos */}
          {currentSlideData.supplementalLogos && (
            <div className="flex items-center gap-4 md:gap-6 mt-8 md:mt-12">
              {currentSlideData.supplementalLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          )}

          {/* Animated Stats */}
          {currentSlideData.animatedStats && (
            <div className="flex items-center gap-6 md:gap-12 mt-8 md:mt-12 flex-wrap">
              {currentSlideData.animatedStats.map((stat, index) => (
                <AnimatedCounter
                  key={index}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isActive={currentSlide === 3}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 md:right-6 md:top-1/2 md:transform md:-translate-y-1/2 md:left-auto md:bottom-auto flex md:flex-col gap-4 z-20">
        <motion.button
          onClick={(e)=>{ e.preventDefault(); prevSlide();}}
          whileTap={{ scale: 0.9 }}
         
          className="w-[60px] h-[60px] md:w-12 md:h-12 bg-white/0 hover:bg-white/0 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft size={30} className="md:w-6 md:h-6" />
        </motion.button>
        <motion.button
           onClick={(e)=>{ e.preventDefault(); nextSlide();}}
          whileTap={{ scale: 0.9 }}
         
          className="w-[60px] h-[60px] md:w-12 md:h-12 bg-white/0 hover:bg-white/0 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={30} className="md:w-6 md:h-6" />
        </motion.button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-20 mb-20 md:mb-0">
        <div className="max-w-7xl md:max-w-full md:px-[0px] mx-auto px-6 lg:px-8 pb-6 md:pb-8">
          {/* Desktop: Full progress indicators */}
          <div className="hidden md:grid grid-cols-4 gap-8">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              const isNext = index === nextSlideIndex;
              const slideNumber = (index + 1).toString().padStart(2, '0');
              
              return (
                <div key={index} className="cursor-pointer group" onClick={() => goToSlide(index)}>
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-white/30 mb-4 overflow-hidden">
                    <div 
                      ref={el => progressRefs.current[index] = el}
                      key={`${index}-${progressKey}`} // Key to force restart
                      className={`h-full transition-all ${
                        isActive ? 'bg-blue-400' : isNext ? 'bg-white/70' : 'bg-white/50 group-hover:bg-white/70'
                      }`}
                      style={{
                        width: isActive && isPlaying && !isTransitioning ? '0%' : isActive ? '0%' : '0%',
                        animation: isActive && isPlaying && !isTransitioning ? 
                          `progress-${index} ${SLIDE_DURATION}ms linear forwards` : 'none',
                        transition: isActive ? 'width 4s linear' : 'width 0.3s ease'
                      }}
                    ></div>
                  </div>
                  
                  {/* Slide Info */}
                  <div className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                    <div className="text-lg font-lato font-bold mb-2">{slideNumber}</div>
                    <div className="text-sm font-onest font-light leading-relaxed">{slide.ariaLabel}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS for progress bar animation and Google Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Onest:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        @keyframes progress-0 {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes progress-1 {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes progress-2 {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes progress-3 {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .font-lato {
          font-family: 'Lato', sans-serif;
        }
        
        .font-onest {
          font-family: 'Onest', sans-serif;
        }
      `}</style>
    </div>
  );
}