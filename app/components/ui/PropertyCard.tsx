import {MapPin, Star, ChevronRight, Home } from "lucide-react";

interface Propertyprops {
    image: string;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    area: string;
    delay: number;
}


const PropertyCard = ({ image, title, location, price, beds, baths, area, delay }:Propertyprops) => (
    <div
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="relative overflow-hidden h-64">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold">
                Featured
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
            <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {location}
            </div>
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <span className="text-3xl font-bold text-indigo-600">{price}</span>
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
            </div>
            <div className="flex justify-between text-gray-600">
                <div className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    <span>{beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>{baths} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>{area} sqft</span>
                </div>
            </div>
            <button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 group">
                View Details
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    </div>
);

export default PropertyCard;