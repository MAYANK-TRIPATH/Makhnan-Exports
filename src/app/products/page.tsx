import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Page() {
    const examples = [
        {
            title: "Organic Raw Makhana",
            description: " Naturally grown and unprocessed, our organic raw Makhana retains its authentic taste and nutritional benefits. Perfect for health-conscious consumers and versatile for various recipes.",
            image: "/Makhana.jpg",
        },
        {
            title: "Roasted Makhana",
            description: " Lightly roasted to perfection, this crunchy and nutritious snack is a guilt-free alternative to traditional fried snacks. Rich in protein and fiber, it's ideal for everyday snacking.",
            image: "/roasted-makhana.webp",
        },
        {
            title: "Spicy Flavored Makhana",
            description: " A bold twist on the classic Makhana, infused with a perfect blend of spices for a zesty kick. A delicious and healthy option for those who crave flavorful, crunchy treats.",
            image: "/masala-makhana.jpg",
        },
        {
            title: "Caramel Coated Makhana",
            description: "A delightful fusion of crunch and sweetness, our caramel-coated Makhana offers a rich, buttery taste with a light, airy texture. A perfect treat for dessert lovers!",
            image: "/Caramel-Makhana.jpg",
        },
    ];

    return (
        <div>
            <Appbar />
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4 text-black text-center mt-8">
                    Our Products
                </h1>
                <p className="text-lg sm:text-xl leading-relaxed mb-4">
                    Discover our range of high-quality examples designed to enhance your experience.
                </p>

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
            <Footer />
        </div>

    );
}
