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
    <div className="flex flex-col items-center justify-center text-center mt-24 px-4">
      <h1 className="text-4xl md:text-5xl font-bold">
        Welcome to <span className="bg-green-400 px-2 py-1 rounded-lg">Kesarwani Exports</span>
      </h1>
      <p className="text-lg md:text-xl mt-6 w-[60%] mx-auto">
        We are a company that exports products from India to the world.
        We are a company that exports products from India to the world.
      </p>
      <div className="relative rounded-2xl overflow-hidden border-4 border-green-500 shadow-2xl w-full max-w-4xl mt-6">
        <Image
          src={images[currentIndex]}
          width={200}
          height={400}
          alt="Presentation"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <Link href="/products">
        <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md mt-10 text-white mb-8">
          Explore Products
        </button>
      </Link>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div>
            <Image
              src="/example1.jpg"
              alt="About"
              width={500}
              height={300}
              className="w-full h-auto object-cover border-4 border-black rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-2">
            <p className="text-lg leading-relaxed">
              At <b>Kesharwani Exports</b>, we take pride in being a leading exporter of <b>premium-quality Makhana (Fox Nuts)</b> , bringing the rich flavors and nutritional goodness of India to the global market. With a deep commitment to <b>purity, sustainability, and excellence,</b> we carefully source the finest Makhana from trusted farmers, ensuring unmatched taste and quality in every bite.
              Join us in embracing the goodness of this superfood as we deliver <b> health and tradition straight to your doorstep wherever you are in the world!</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}