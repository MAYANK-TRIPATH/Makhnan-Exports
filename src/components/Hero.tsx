"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/example1.jpg",
    "/example2.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      
      <div className="relative overflow-hidden w-full h-[70vh] sm:h-[80vh] md:h-[100vh]">
        <Image
          src={images[currentIndex]}
          width={1920}
          height={1080}
          alt="Presentation"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          priority
        />
       
       
        <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-center sm:px-12 md:px-16 lg:px-24">
          
          <div className="text-left max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
            
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl mb-8">
              Premium Makhana, Harvested with Care, Delivered with Trust, Globally!
            </h1>

            <div className="flex justify-start">
              <Link href="/products">
                <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-white text-lg sm:text-xl md:text-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-12 text-black">
          Welcome to Kesharwani Exports!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/example2.jpg"
              alt="About"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
          </div>

          <div className="space-y-6 text-left">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
              At <b className="text-green-600">Kesharwani Exports</b>, we take pride in being a leading exporter of{" "}
              <b className="text-green-600">premium-quality Makhana (Fox Nuts)</b>, bringing the rich flavors and nutritional{" "}
              goodness of India to the global market. With a deep commitment to{" "}
              <b className="text-green-600">purity, sustainability, and excellence</b>, we carefully source the finest Makhana from{" "}
              trusted farmers, ensuring unmatched taste and quality in every bite.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
              Join us in embracing the goodness of this superfood as we deliver{" "}
              <b className="text-green-600">health and tradition straight to your doorstep, wherever you are in the world!</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}