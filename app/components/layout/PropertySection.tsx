import React from 'react'
import PropertyCard from "@/app/components/ui/PropertyCard";
const PropertySection = () => {
    return (
        <section id="properties" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Featured Properties
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Handpicked selection of premium properties
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PropertyCard
                        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600"
                        title="Modern Villa"
                        location="Beverly Hills, CA"
                        price="$2.5M"
                        beds={4}
                        baths={3}
                        area="3200"
                        delay={0}
                    />
                    <PropertyCard
                        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"
                        title="Luxury Apartment"
                        location="Manhattan, NY"
                        price="$1.8M"
                        beds={3}
                        baths={2}
                        area="2400"
                        delay={100}
                    />
                    <PropertyCard
                        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
                        title="Beach House"
                        location="Malibu, CA"
                        price="$3.2M"
                        beds={5}
                        baths={4}
                        area="4100"
                        delay={200}
                    />
                </div>
            </div>
        </section>
    )
}
export default PropertySection
