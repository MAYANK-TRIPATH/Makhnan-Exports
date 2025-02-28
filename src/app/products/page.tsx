import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

export default function examplePage() {
    const examples = [
        {
            title: "Organic Raw Makhana",
            description: "This is an amazing example that solves many problems.",
            image: "/example1.jpg",
        },
        {
            title: "Roasted Makhana",
            description: "A revolutionary example designed for efficiency.",
            image: "/example2.jpg",
        },
        {
            title: "Spicy Flavored Makhana",
            description: "Enhance your workflow with this innovative solution.",
            image: "/example2.jpg",
        },
        {
            title: "Caramel Coated Makhana",
            description: "The future of technology is here with this example.",
            image: "/example2.jpg",
        },
    ];

    return (
        <div>
            <Appbar />
            <div className="mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-4 mt-16">Our examples</h1>
                <p className="text-lg text-center  mb-8">
                    Discover our range of high-quality examples designed to enhance your experience.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {examples.map((example, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 mb-8"
                        >
                            <img
                                src={example.image}
                                alt={example.title}
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
