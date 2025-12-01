"use client"
import React, {useState, useEffect} from 'react';
import { Home, TrendingUp, Shield, Zap, Menu, X, ChevronRight, Building2, MapPin, Search, Star } from 'lucide-react';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Building2 className={`w-8 h-8 text-indigo-100 ${isScrolled && 'text-indigo-600'}`} />
                        <span className={`text-2xl font-bold bg-gradient-to-r from-orange-300 to-purple-300 ${isScrolled && "from-indigo-600 to-purple-700"} bg-clip-text text-transparent`}>
              SmartHabitat
            </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className={`text-gray-100 ${isScrolled && "text-gray-700"} hover:text-indigo-600 transition-colors`}>Features</a>
                        <a href="#properties" className={`text-gray-100 ${isScrolled && "text-gray-700"} hover:text-indigo-600 transition-colors`}>Properties</a>
                        <a href="#about" className={`text-gray-100 ${isScrolled && "text-gray-700"} hover:text-indigo-600 transition-colors`}>About</a>
                        <a href="#contact" className={`text-gray-100 ${isScrolled && "text-gray-700"} hover:text-indigo-600 transition-colors`}>Contact</a>
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-yellow-700 transition-all hover:scale-105">
                            Get Started
                        </button>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
                        <a href="#features" className="block text-gray-700 hover:text-indigo-600">Features</a>
                        <a href="#properties" className="block text-gray-700 hover:text-indigo-600">Properties</a>
                        <a href="#about" className="block text-gray-700 hover:text-indigo-600">About</a>
                        <a href="#contact" className="block text-gray-700 hover:text-indigo-600">Contact</a>
                        <button className="w-full px-6 py-2 bg-indigo-600 text-white rounded-full">
                            Get Started
                        </button>
                    </div>
                )}
            </nav>

        </div>
    )
}
export default Navbar
