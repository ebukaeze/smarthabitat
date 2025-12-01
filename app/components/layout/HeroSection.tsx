"use client"
import React, {useState, useEffect} from 'react'
import TechPills from "@/app/components/ui/TechPills";
import ExploreBtn from "@/app/components/ui/ExploreBtn";
import StatsGrid from "@/app/components/ui/StatsGrid";


const HeroSection = () => {

    return (
        <div className="relative container mx-auto px-6 pt-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-left animate-fadeInUp">
                        <div className="inline-block mb-4 px-4 py-2 bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-full">
                            <span className="text-indigo-200 text-sm font-semibold tracking-wide">NEXT-GEN PROPTECH PLATFORM</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Smart Property
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Management
                </span>
                            <span className="block text-4xl md:text-5xl mt-2">Powered by IoT & AI</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                            Harness the power of automation, real-time data analytics, and IoT sensors to transform how you manage, invest, and experience smart living.
                        </p>
                        <TechPills/>
                        <ExploreBtn/>
                    </div>


                {/* Right Content - Stats Dashboard */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    <div className="relative">
                        {/* Glowing Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-3xl"></div>
                         <StatsGrid />

                        {/* Real-time Indicator */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>Real-time data analytics</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

                        )
}
export default HeroSection
