import React from 'react'
import FeatureCard from "@/app/components/ui/FeatureCard";
import {Zap, Shield, TrendingUp, Home} from "lucide-react";

const FeatureSection = () => {
    return (
        <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Why Choose SmartHabitat?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Cutting-edge technology meets exceptional service
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        icon={Zap}
                        title="AI-Powered Search"
                        description="Our advanced AI algorithms understand your preferences and find the perfect match instantly."
                        delay={0}
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Secure Transactions"
                        description="Bank-level security and blockchain verification ensure your investments are protected."
                        delay={100}
                    />
                    <FeatureCard
                        icon={TrendingUp}
                        title="Market Analytics"
                        description="Real-time market insights and predictive analytics to make informed decisions."
                        delay={200}
                    />
                    <FeatureCard
                        icon={Home}
                        title="Virtual Tours"
                        description="Immersive 3D virtual tours let you explore properties from anywhere in the world."
                        delay={300}
                    />
                </div>
            </div>
        </section>
    )
}
export default FeatureSection
