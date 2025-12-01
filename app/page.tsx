import Image from "next/image";
import Header from "@/app/components/layout/Header";
import PropertyCard from "@/app/components/ui/PropertyCard";
import FeatureSection from "@/app/components/layout/FeatureSection";
import PropertySection from "@/app/components/layout/PropertySection";
import Cta from "@/app/components/layout/Cta";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-full">
        <Header />
        <div className="w-full flex items-center justify-center md:max-w-6xl md:mx-auto py-4">
           <FeatureSection />
            <PropertySection />
        </div>
        <Cta />
        <Footer/>

    </div>
  );
}
