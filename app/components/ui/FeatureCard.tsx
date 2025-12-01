import React from 'react';
import {LucideIcon} from 'lucide-react';
interface props{
    icon:LucideIcon;
    title:string;
    description:string;
    delay: number;
}
const FeatureCard = ({icon: Icon, title, description, delay}: props) => {
    return (
        <div
            className=" w-full group bg-white m-6 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex items-start justify-start">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8 text-white" />
            </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}
export default FeatureCard
