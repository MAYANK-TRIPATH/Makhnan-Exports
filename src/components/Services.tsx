import Footer from "@/components/Footer";
import Image from "next/image";

export default function Services() {
    const examples = [
        {
            title: "Premium Quality",
            description: "Handpicked for superior taste, texture, and nutrition.",
            image: "/Makhana.jpg",
        },
        {
            title: "Fast and Reliable Delivery",
            description: " Ensuring timely shipments with trusted logistics partners.",
            image: "/Delivery.jpeg",
        },
        {
            title: "Ethically Sourced",
            description: "Sustainably harvested from trusted farmers with fair trade practices.",
            image: "/sourced.jpg",
        },
        {
          title: "Global Reach",
          description: "Supplying top-quality Makhana to markets worldwide. ",
          image: "/global.jpg",
      }
       
    ];

    return (
        <div>
            <div className="max-w-7xl mx-auto px-6  flex flex-col items-center text-center">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-8 text-black text-center ">
                    Why Choose Us
                </h1>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {examples.map((example, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 mb-8"
                        >
                            <Image
                                src={example.image}
                                alt={example.title}
                                width={500}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{example.title}</h2>
                                <p className="mt-2">
                                    {example.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
