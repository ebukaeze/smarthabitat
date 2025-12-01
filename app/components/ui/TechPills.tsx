import React from 'react'

const TechPills = () => {
    return (
        <div className="flex flex-wrap gap-3 mb-8">
            {['IoT Integration', 'AI Analytics', 'Automation', 'Smart Living'].map((tech, i) => (
                <div key={i} className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-all cursor-pointer">
                    {tech}
                </div>
            ))}
        </div>
    )
}
export default TechPills
