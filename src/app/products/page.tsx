import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Page() {
    const examples = [
        {
            title: "Organic Raw Makhana",
            description: "Naturally grown and unprocessed, our organic raw Makhana retains its authentic taste and nutritional benefits. Perfect for health-conscious consumers and versatile for various recipes.",
            image: "/Makhana.jpg",
        },
        {
            title: "Roasted Makhana",
            description: "Lightly roasted to perfection, this crunchy and nutritious snack is a guilt-free alternative to traditional fried snacks. Rich in protein and fiber, it's ideal for everyday snacking.",
            image: "/roasted-makhana.webp",
        },
        {
            title: "Spicy Flavored Makhana",
            description: "A bold twist on the classic Makhana, infused with a perfect blend of spices for a zesty kick. A delicious and healthy option for those who crave flavorful, crunchy treats.",
            image: "/masala-makhana.jpg",
        },
        {
            title: "Caramel Coated Makhana",
            description: "A delightful fusion of crunch and sweetness, our caramel-coated Makhana offers a rich, buttery taste with a light, airy texture. A perfect treat for dessert lovers!",
            image: "/Caramel-Makhana.jpg",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Appbar />

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-6">
                    Our Products
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Discover our range of high-quality Makhana products designed to enhance your experience with authentic taste and premium quality.
                </p>
            </div>

            {/* Product Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {examples.map((example, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-60 w-full">
                                <Image
                                    src={example.image}
                                    alt={example.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-3">
                                    {example.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
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