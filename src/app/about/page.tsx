import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Appbar />

      {/* About Us */}
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 bg-green-400 p-3 rounded-lg mt-8">
          About Us
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/example1.jpg"
            alt="About"
            width={500}
            height={300}
            className="w-full h-auto object-cover border-4 border-green-500 rounded-lg shadow-lg"
          />
          <p className="text-lg leading-relaxed text-justify">
            Welcome to <b>Kesharwani Exports</b>, your trusted partner in premium <b>Makhana (Fox Nuts) trading and export</b>.
            As a new but passionate business, we specialize in sourcing the finest quality Makhana directly from reliable farmers and suppliers across India.
            Our goal is to provide <b>authentic, high-quality Makhana</b> that meets international standards while ensuring ethical and fair trade practices.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 bg-green-400 p-3 rounded-lg">
          What We Do
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl">
          At <b>Kesharwani Exports</b>, we act as a bridge between farmers and global buyers, ensuring seamless trade and hassle-free logistics.
        </p>
        <p className="text-lg font-semibold mt-6">Our key activities include:</p>
        <div className="mt-4 text-lg space-y-3 max-w-3xl text-left">
          <p>✅ <b>Sourcing:</b> We procure high-grade Makhana from trusted farmers and suppliers, ensuring quality at every step.</p>
          <p>✅ <b>Quality Assurance:</b> We ensure that the product we trade meets strict quality and hygiene standards.</p>
          <p>✅ <b>Packaging & Logistics:</b> We work with professional packaging and logistics partners to ensure safe and timely delivery.</p>
          <p>✅ <b>Global Trading:</b> We facilitate smooth exports to businesses worldwide, helping them access India&apos;s best Makhana.</p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 bg-green-400 p-3 rounded-lg">
          Our Mission
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl">
          To connect international buyers with India&apos;s finest Makhana through ethical sourcing, transparent trade, and seamless logistics.
        </p>
      </div>

      {/* Registered With */}
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 bg-green-400 p-3 rounded-lg">
          Registered With
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 border-4 border-green-500 shadow-lg rounded-2xl p-2">
          <Image src="/example1.jpg" width={300} height={250} alt="Presentation" className="object-cover rounded-lg" />
          <Image src="/example2.jpg" width={300} height={250} alt="Presentation" className="object-cover rounded-lg" />
          <Image src="/example2.jpg" width={300} height={250} alt="Presentation" className="object-cover rounded-lg" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
