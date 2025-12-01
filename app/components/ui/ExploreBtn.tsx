import React from 'react'
import {Zap, ChevronRight} from "lucide-react";

const ExploreBtn = () => {
    return (
        <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center gap-3 hover:scale-105 shadow-2xl shadow-cyan-500/50">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Explore Platform</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
    )
}
export default ExploreBtn
