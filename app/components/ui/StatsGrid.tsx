import React from 'react'
import {Zap, TrendingUp, Shield, Building2  } from "lucide-react";


const StatsGrid = () => {
    return (
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
                {[
                    { number: '10M+', label: 'IoT Devices', icon: Zap, color: 'from-cyan-400 to-blue-500' },
                    { number: '2.5TB', label: 'Data Processed', icon: TrendingUp, color: 'from-purple-400 to-pink-500' },
                    { number: '99.9%', label: 'Uptime', icon: Shield, color: 'from-green-400 to-emerald-500' },
                    { number: '50K+', label: 'Smart Properties', icon: Building2, color: 'from-orange-400 to-red-500' }
                ].map((stat, index) => (
                    <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer">
                        <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
                            <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-4xl font-bold text-gray-700 md:text-white mb-2">{stat.number}</div>
                        <div className="text-gray-500 md:text-gray-300 text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default StatsGrid
