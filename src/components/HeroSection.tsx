"use client";

import React from "react";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { BoxReveal } from "@/components/magicui/box-reveal";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Brain, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Iphone15ProDemo() {
  return (
    <div className="relative bg-transparent">
      <Iphone15Pro
        className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]"
        src="/mockup.png"
      />
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Black to Violet Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-violet-900" />
      
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern
        className="absolute inset-0 opacity-20 sm:opacity-30"
        width={40}
        height={40}
        maxOpacity={0.3}
        numSquares={30}
        duration={3}
        repeatDelay={1}
      />

      {/* Additional Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-violet-600/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-purple-600/15 to-transparent rounded-full blur-3xl" />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            
            {/* Text Content - First on Mobile */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 text-center w-full flex flex-col items-center">
              {/* AI Badge */}
              <BoxReveal boxColor="#8b5cf6" duration={0.5}>
                <div className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-violet-500/20 border border-violet-400/30 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-violet-300" />
                  <span className="text-xs sm:text-sm font-medium text-violet-200">AI-Powered Psychology</span>
                </div>
              </BoxReveal>

              {/* Main Heading */}
              <div className="space-y-2 sm:space-y-4">
                <BoxReveal boxColor="#8b5cf6" duration={0.7}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-center">
                    <span className="bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent">
                      Discover Your
                    </span>
                  </h1>
                </BoxReveal>
                
                <BoxReveal boxColor="#8b5cf6" duration={0.9}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-center">
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      True Personality
                    </span>
                  </h1>
                </BoxReveal>
              </div>

              {/* Description */}
              <BoxReveal boxColor="#8b5cf6" duration={1.1}>
                <p className="text-base sm:text-lg text-violet-100/80 max-w-lg mx-auto leading-relaxed text-center">
                  Download our mobile app and let advanced AI algorithms analyze your responses to reveal deep insights about your personality type.
                </p>
              </BoxReveal>

              {/* Download Button - White Background */}
              <BoxReveal boxColor="#8b5cf6" duration={1.3}>
                <div className="flex justify-center">
                  <button 
                    onClick={() => window.open('https://github.com/falkon2/personify/releases/download/Publish2/personify.apk', '_blank')}
                    className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-white transition duration-200 text-center active:scale-95 cursor-pointer"
                  >
                    Download
                  </button>
                </div>
              </BoxReveal>

              {/* Stats - Mobile Optimized */}
              <BoxReveal boxColor="#8b5cf6" duration={1.5}>
                <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto pt-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold flex items-center justify-center">
                      <NumberTicker value={200000} className="text-white" />
                      <span className="text-violet-400 text-sm sm:text-xl">+</span>
                    </div>
                    <div className="text-xs text-violet-300">Training Data</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold flex items-center justify-center">
                      <NumberTicker value={95} className="text-white" />
                      <span className="text-violet-400 text-sm sm:text-xl">%</span>
                    </div>
                    <div className="text-xs text-violet-300">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold flex items-center justify-center">
                      <NumberTicker value={4.9} decimalPlaces={1} className="text-white" />
                      <span className="text-violet-400 text-sm sm:text-xl">★</span>
                    </div>
                    <div className="text-xs text-violet-300">Rating</div>
                  </div>
                </div>
              </BoxReveal>

              {/* Additional Info for Mobile */}
              <BoxReveal boxColor="#8b5cf6" duration={1.7}>
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-violet-300/60">
                    Free download • No subscription required • Available on Android
                  </p>
                </div>
              </BoxReveal>

              {/* Portfolio Button */}
              <BoxReveal boxColor="#8b5cf6" duration={1.9}>
                <div className="text-center pt-6">
                  <a 
                    href="https://zahintapadar.onrender.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
                  >
                    <span className="mr-2">Check out my other works</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </BoxReveal>
            </div>

            {/* Phone Mockup - Second on Mobile, Closer */}
            <div className="relative order-2 lg:order-2">
              <BoxReveal boxColor="#8b5cf6" duration={0.8}>
                <div className="relative flex justify-center">
                  {/* Glow Effect Behind Phone */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-full blur-2xl transform scale-110"></div>
                  
                  {/* iPhone Mockup */}
                  <div className="relative transform hover:scale-105 transition-transform duration-500">
                    <Iphone15ProDemo />
                  </div>
                </div>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
