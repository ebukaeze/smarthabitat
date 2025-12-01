import React from 'react'

function Cta() {
    return (
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Find Your Dream Home?
                </h2>
                <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
                    Join thousands of satisfied clients who found their perfect property with PropVision
                </p>
                <button className="bg-white text-indigo-600 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
                    Start Your Journey
                </button>
            </div>
        </section>
    )
}

export default Cta
