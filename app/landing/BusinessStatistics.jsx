import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BusinessStatistics = () => {
  // Multiple refs for different sections
  const mainSectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const chartRef = useRef(null);
  const statsRef = useRef(null);
  
  // Multiple inView states for different sections
  const isTitleInView = useInView(titleRef, { once: true, threshold: 0.3 });
  const isDescriptionInView = useInView(descriptionRef, { once: true, threshold: 0.3 });
  const isChartInView = useInView(chartRef, { once: true, threshold: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, threshold: 0.3 });
  
  const [animatedValues, setAnimatedValues] = useState({
    revenue2024: 0,
    currentPortfolio: 0,
    totalMarketValue: 0,
    countriesServed: 0,
    globalPartnerships: 0
  });

  // Animate numbers when stats section comes into view
  useEffect(() => {
    if (!isStatsInView) return;
    
    const duration = 2500; // 2.5 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
        revenue2024: 500000,           // Total tons of materials
        currentPortfolio: 25,     
        totalMarketValue: 128,      
        countriesServed: 20,        // Countries served
        globalPartnerships: 15      // Global partnerships
      };

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      setAnimatedValues({
        revenue2024: targets.revenue2024 * easeProgress,
        currentPortfolio: targets.currentPortfolio * easeProgress,
        totalMarketValue: targets.totalMarketValue * easeProgress,
        countriesServed: Math.floor(targets.countriesServed * easeProgress),
        globalPartnerships: Math.floor(targets.globalPartnerships * easeProgress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedValues(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isStatsInView]);

  return (
    <div ref={mainSectionRef} className="relative w-full bg-[#000] overflow-hidden min-h-[200vh] lg:min-h-[150vh]" >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://www.multiplex.global/media/2djh40is/18213.jpg?width=2060&height=1374&v=1dad1e29da48570)'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section - Title and Description */}
          <div className="grid grid-cols-12 gap-8 lg:gap-16 mb-12 lg:mb-[68px]">
            {/* Title - Left */}
            <div ref={titleRef} className="col-span-12 lg:col-span-3">
              <motion.h2 
                className="text-[32px] md:text-[52px] xl:text-[70px] font-light font-lato text-white mb-6 lg:mb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                Market strength
              </motion.h2>
            </div>
            
            {/* Description - Right */}
            <div ref={descriptionRef} className="col-span-12 lg:col-span-9 lg:pl-[150px] pr-8 md:pr-0">
              <motion.div 
                className="space-y-6 lg:space-y-8 text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isDescriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-[20px]  box-border md:px-0 md:text-[27px] font-onest font-light leading-relaxed">
                IQ Group powers global innovation by connecting businesses to premium raw materials. With trusted partners worldwide, we align interests, ensure quality, and turn bold ideas into reality through unmatched market reach.                </p>
                
                
              </motion.div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Section - Donut Chart */}
            <div ref={chartRef} className="pr-8 md:pr-0 md:px-0 col-span-12 lg:col-span-6 flex justify-center mb-12 lg:mb-0">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isChartInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <svg width="500" height="500" viewBox="0 0 600 560" className="w-[390px] md:w-[530px] lg:w-[600px] h-[390px] md:h-[530px] lg:h-[600px]">
                  <defs>
                    <clipPath id="clippath">
                      <path d="M306.2,106.3c-95.8,0-173.5,77.7-173.5,173.5s77.7,173.5,173.5,173.5,173.5-77.7,173.5-173.5-77.7-173.5-173.5-173.5ZM306.2,394.9c-63.9,0-115.8-51.8-115.8-115.8s51.8-115.8,115.8-115.8,115.8,51.8,115.8,115.8-51.8,115.8-115.8,115.8Z"/>
                    </clipPath>
                  </defs>
                  
                                    {/* Donut Chart Segments */}
                  <g id="data_segments" clipPath="url(#clippath)">
                      {/* Alloys - 20% */}
                      <motion.path 
                        className="fill-gray-300" 
                        d="M306.3,280.3V106.8c94.4,0,171,73.1,173.4,167.5c0,1.9-0.1,3.8-0.2,5.7l-173.2,0.4Z"
                        initial={{ pathLength: 0 }}
                        animate={isChartInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 3, delay: 0.5 }}
                      />
                      {/* Metals - 20% */}
                      <motion.path 
                        className="fill-gray-400" 
                        d="M306.3,280.3l173.4-6.1c3.2,91.5-64.3,169.1-155.3,178.6l-18.1-172.6Z"
                        initial={{ pathLength: 0 }}
                        animate={isChartInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 3, delay: 0.6 }}
                      />
                      {/* Minerals & Ores - 20% */}
                      <motion.path 
                        className="fill-gray-500" 
                        d="M306.3,280.3l18.1,172.6c-25.5,2.7-47.3.4-71.8-7.5l53.6-165Z"
                        initial={{ pathLength: 0 }}
                        animate={isChartInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 3, delay: 0.7 }}
                      />
                      {/* Chemicals - 30% */}
                      <motion.path 
                        className="fill-gray-600" 
                        d="M306.3,280.3l-53.6,165c-84.3-27.4-134.5-114.4-116.1-201.1l169.7,36.1Z"
                        initial={{ pathLength: 0 }}
                        animate={isChartInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 3, delay: 0.8 }}
                      />
                      {/* Carbon Materials - 10% */}
                      <motion.path 
                        className="fill-white" 
                        d="M306.3,280.3l-169.7-36.1c16-75.5,74.9-128.4,151.6-136.5c6-0.8,12.1-1.3,18.1-1.3v173.9Z"
                        initial={{ pathLength: 0 }}
                        animate={isChartInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 3, delay: 0.9 }}
                      />
                      {/* Gap filler to complete the circle */}
                      {/* <motion.path 
                        className="fill-white" 
                        d="M306.3,280.3l-18.1-172.6c5.6-.6,18.1-.9,18.1-.9v173.5Z"
                        initial={{ pathLength: 0 }}
                        animate={isChartInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 3, delay: 0.95 }}
                      /> */}
                    </g>
                  
                  {/* Pointer Lines and Dots */}
                  <g id="pointers" className="stroke-white stroke-1 fill-white">
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <circle cx="410.2" cy="183.5" r="3"/>
                      <polyline points="413.2,173.5 448.8,132.3 489.3,132.3" className="fill-none"/>
                    </motion.g>
                    
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 1.3 }}
                    >
                      <circle cx="415.6" cy="378.7" r="3"/>
                      <polyline points="417.8,378.7 459.1,432.5 479.7,432.5" className="fill-none"/>
                    </motion.g>
                    
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                    >
                      <circle cx="288.8" cy="427" r="3"/>
                      <line x1="288.8" y1="430.8" x2="288.8" y2="487.5" className="fill-none"/>
                    </motion.g>
                    
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                    >
                      <circle cx="178" cy="357" r="3"/>
                      <polyline points="174.8,357.2 124.6,383.9 101.7,383.9" className="fill-none"/>
                    </motion.g>
                    
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    >
                      <circle cx="205" cy="167" r="3"/>
                      <polyline points="201.9,164.3 140.9,127.3 114.4,127.3" className="fill-none"/>
                    </motion.g>
                    
                    {/* <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 1.7 }}
                    >
                      <circle cx="300" cy="120" r="3"/>
                      
                    </motion.g> */}
                  </g>
                  
                  {/* Chart Labels */}
                  <g id="text" className="fill-gray-200">
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1.8 }}
                    >
                      <text x="489" y="128" className="text-xs md:text-sm font-medium">Alloys</text>
                      <text x="489" y="143" className="text-xs md:text-sm">20%</text>
                    </motion.g>
                    
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1.9 }}
                    >
                      <text x="479" y="428" className="text-xs md:text-sm font-medium">Metals</text>
                      <text x="479" y="443" className="text-xs md:text-sm">20%</text>
                    </motion.g>
                    
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 2.0 }}
                    >
                      <text x="220" y="485" className="text-xs md:text-sm font-medium text-center" textAnchor="middle">Carbon Materials</text>
                      <text x="220" y="500" className="text-xs md:text-sm text-center" textAnchor="middle">10%</text>
                    </motion.g>
                    
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 2.1 }}
                    >
                      <text x="50" y="380" className="text-xs md:text-sm font-medium">Minerals &</text>
                      <text x="50" y="395" className="text-xs md:text-sm font-medium">Ores</text>
                      <text x="50" y="410" className="text-xs md:text-sm">20%</text>
                    </motion.g>
                    
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 2.2 }}
                    >
                      <text x="60" y="123" className="text-xs md:text-sm font-medium">Chemicals</text>
                      <text x="60" y="138" className="text-xs md:text-sm font-medium">30%</text>
                      <text x="60" y="153" className="text-xs md:text-sm"></text>
                    </motion.g>
                    
                    {/* <motion.g
                      initial={{ opacity: 0 }}
                      animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 2.3 }}
                    >
                      <text x="220" y="47" className="text-xs md:text-sm font-medium text-center" textAnchor="middle">Portfolio</text>
                      <text x="220" y="62" className="text-xs md:text-sm text-center" textAnchor="middle">Distribution</text>
                      <text x="220" y="77" className="text-xs md:text-sm text-center" textAnchor="middle">2024</text>
                    </motion.g> */}
                  </g>
                  
                  {/* Center Label */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <text x="306" y="270" fill='white' className="text-white text-[24px] md:text-lg font-medium text-center leading-relaxed" textAnchor="middle">Material</text>
                    <text x="306" y="290" fill='white' className="text-white text-[24px] md:text-lg font-medium text-center leading-relaxed" textAnchor="middle">Categories</text>
                  </motion.g>
                </svg>
              </motion.div>
            </div>

            {/* Right Section - Statistics Grid (Responsive) */}
            <div ref={statsRef} className="col-span-12 lg:col-span-6">
              {/* Desktop: 3x2 Grid, Tablet: 2x3 Grid, Mobile: 1 Column */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
                {/* Total Materials */}
                <motion.div 
                  className="text-center xl:text-center md:text-left text-left pb-6 border-b border-gray-600"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-3">
                    {animatedValues.revenue2024.toFixed(0)}
                  </div>
                  <div className="text-gray-400 text-sm">Tons of Materials</div>
                </motion.div>

                {/* Material Categories */}
               

                {/* Countries Served */}
                <motion.div 
                  className="text-center xl:text-center md:text-left text-left pb-6 border-b border-gray-600"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <div className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-3">
                    {Math.round(animatedValues.countriesServed)}+
                  </div>
                  <div className="text-gray-400 text-sm">Countries Served</div>
                </motion.div>

                {/* Global Partnerships */}
                <motion.div 
                  className="text-center xl:text-center md:text-left text-left pb-6 border-b border-gray-600"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <div className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-3">
                    {animatedValues.globalPartnerships.toLocaleString()}+
                  </div>
                  <div className="text-gray-400 text-sm">Global Partnerships</div>
                </motion.div>

                {/* Top Category */}
              
                {/* Empty cell for desktop 3x2 grid alignment */}
                <div className="hidden xl:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStatistics;