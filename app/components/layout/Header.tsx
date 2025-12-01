"use client"
import {useEffect, useState} from "react";
import * as timers from "node:timers";
import HeroSection from "@/app/components/layout/HeroSection";
import Stats from "@/app/components/ui/Stats";

const Header = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    const slides: string[] = [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200'
    ]

    useEffect(() => {
        const timer= setInterval(() => {
            setCurrentSlide((prev: number) : number => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [])

    return (
        <header className="w-full flex-col flex min-h-screen h-max">
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            backgroundImage: `url(${slide})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-blue-900/80" />
            </div>
            <HeroSection />
        </header>
    )
}
export default Header
