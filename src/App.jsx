import React, { useEffect, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Set initial scale immediately to prevent flash
    if (containerRef.current) {
      gsap.set(containerRef.current, {
        scale: 0.7,
        transformOrigin: "center center",
      });
    }

    // Simple scroll-based zoom animation without Locomotive Scroll
    const zoomAnimation = gsap.to(containerRef.current, {
      scale: 1,
      transformOrigin: "center center",
      ease: "power1.inOut", // Butter smooth easing
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=800", // Shorter distance for quicker full-screen coverage
        scrub: 0.5, // More responsive, butter-smooth animation
        invalidateOnRefresh: true,
      },
    });

    // Cleanup
    return () => {
      zoomAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Scroll Spacer - provides scroll distance */}
      <div style={{ height: "200vh" }}></div>
      
      {/* Fixed Container - zooms on scroll */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 bg-[#F0E3CD] min-h-screen w-full px-[40px] py-[32px]"
        style={{
          willChange: "transform",
        }}
      >
      {/* Background layer with opacity */}
      <div className='absolute inset-0 bg-[url("./imgs/paperTexture.png")] bg-cover opacity-40 pointer-events-none'></div>
      
      {/* Content layer with full opacity */}
      <div className="relative z-10 flex flex-col gap-4">
        
        {/* Top Bar */}
        <div className="topbar flex justify-between text-[#000] uppercase text-[14px] font-editorial">
          <h4>Inspired by Hogwarts & Miranda</h4>
          <h4>vivekvisualls</h4>
        </div>

        {/* Navigation Bar - 5 Box Divisions */}
        <div className="navbar border-1 border-black flex h-[80px]">
          {/* Box 1 - Search (smallest) */}
          <div className="w-[6%] border-r-1 border-black flex items-center justify-center">
            <button className="text-[28px]"><LuSearch /></button>
          </div>
          
          {/* Box 2 - Resume (medium) */}
          <div className="w-[20%] border-r-1 border-black flex items-center justify-center">
            <span className="text-[20px] font-editorial uppercase">Resume</span>
          </div>
          
          <div className="w-[48%] border-r-1 border-black flex items-center justify-center">
            <div className="h-[100px] w-[100px] flex items-center justify-center"><img src="./imgs/hp-logo.png" alt="" className="object-contain w-full h-full" /></div>
          </div>
           
          {/* Box 4 - About (medium) */}
          <div className="w-[20%] border-r-1 border-black flex items-center justify-center">
            <span className="text-[20px] font-editorial uppercase">About</span>
          </div>

          {/* Box 5 - Menu (smallest) */}
          <div className="w-[6%] flex items-center justify-center">
            <button className="text-[28px]"><RxHamburgerMenu /></button>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="main-content border-1 border-black p-4 flex flex-col gap-6">
          
          {/* Daily Prophet Header */}
          <div className="daily-prophet-header bg-black text-white px-8 py-8 relative">
            {/* Top Left - Printed in Great Britain */}
            <span className="absolute top-6 left-8 text-[18px] font-editorial text-[#F0E3CD]">PRINTED IN GREAT BRITAIN</span>
            
            {/* Top Right - Issue Date */}
            <span className="absolute top-6 right-8 text-[18px] font-editorial text-[#F0E3CD]">ISSUE DATE 01/2/2001</span>
            
            {/* Center - Daily Prophet Title */}
            <h1 className="text-[140px] text-[#F0E3CD] font-champGothic2 text-center leading-none py-8">DAILY PROPHET</h1>
            
            {/* Bottom Left - Exclusive Edition */}
            <span className="absolute bottom-6 left-8 text-[18px] font-champGothic bg-[#F0E3CD] text-black px-3 py-1">EXCLUSIVE EDITION</span>
            
            {/* Bottom Right - Scroll Down */}
            <span className="absolute bottom-6 right-8 text-[18px] font-editorial text-[#F0E3CD]">SCROLL DOWN</span>
          </div>

          {/* Three Column Content Section */}
          <div className="three-column-content grid grid-cols-3 gap-6">
            
            {/* Left Column */}
            <div className="left-column border-r-1 border-black pr-6 relative pl-10">
              {/* Vertical text on the left side */}
              <div className="absolute left-8 bottom-10">
                <span className="text-noise block transform -rotate-90 origin-bottom-left whitespace-nowrap text-[26px] font-champGothic2 uppercase tracking-wider">
                  Designing Modern Web Experiences
                </span>
              </div>
              <h2 className="text-noise text-[110px] font-champGothic leading-[100px] mb-4">EDMUND FAIRCHILD</h2>
              <p className="text-noise text-[16px] font-nato leading-relaxed w-[80%] capitalize">
                Here's an expanded version that keeps the tone refined and editorial, without overdoing it Known in creative circles for blending clean UI, smooth motion, and strong storytelling, EDMUND crafts digital experiences that feel intentional, immersive, and human. He specialises in transforming ordinary websites into memorable experiences by combining thoughtful design, subtle...
              </p>
              {/* Decorative underline design */}
              <div className="mt-4 w-[80%]">
                <div className="border-t-16 border-black"></div>
                <div className="border-t-2 border-black mt-1"></div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="middle-column flex flex-col items-start justify-center">
              <div className="w-full h-[340px] bg-gray-800 flex items-center justify-center">
                <video className="w-full h-full object-cover" src="./videos/bookHolding.mp4" autoPlay loop muted></video>
              </div>
              <h3 className="text-noise text-[80px] font-champGothic text-start mt-0">KNOW MORE!</h3>
            </div>

            {/* Right Column */}
            <div className="right-column border-l border-black pl-6">
              <h2 className="text-noise text-[80px] font-champGothic leading-none mb-4">RECENT <br /> MAGICAL <br />WORKS!!</h2>
              <div className="w-full h-[200px] bg-gray-800 flex items-center justify-center overflow-hidden">
                  <video className="w-full h-full object-cover object-center" src="./videos/m.mp4" autoPlay loop muted></video>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default App;
