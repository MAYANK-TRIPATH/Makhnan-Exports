import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Appbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-8 text-center text-gray-900">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/example2.jpg"
              alt="About"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Welcome to <b className="text-gray-900">Kesharwani Exports</b>, your trusted partner in premium Makhana (Fox Nuts) trading and export. As a new but passionate business, we specialize in sourcing the finest quality Makhana directly from reliable farmers and suppliers across India and delivering it to global markets. Our goal is to provide authentic, high-quality Makhana that meets international standards while ensuring ethical and fair trade practices.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-12 text-center text-gray-900">
            What We Do
          </h1>
          <div className="space-y-12">
            <p className="text-lg sm:text-xl text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
              At <b className="text-gray-900">Kesharwani Exports</b>, we act as a bridge between farmers and global buyers, ensuring seamless trade and hassle-free logistics.
            </p>

            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
                Our Key Activities
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <li className="flex items-start space-x-4 bg-gray-100 p-6 rounded-2xl hover:bg-gray-200 transition-colors duration-300">
                  <span className="text-green-600 text-2xl">✅</span>
                  <div>
                    <b className="text-gray-900">Sourcing:</b> We procure high-grade Makhana from trusted farmers and suppliers, ensuring quality at every step.
                  </div>
                </li>
                <li className="flex items-start space-x-4 bg-gray-100 p-6 rounded-2xl hover:bg-gray-200 transition-colors duration-300">
                  <span className="text-green-600 text-2xl">✅</span>
                  <div>
                    <b className="text-gray-900">Quality Assurance:</b> While we don&apos;t process Makhana ourselves, we ensure that the product we trade meets strict quality and hygiene standards.
                  </div>
                </li>
                <li className="flex items-start space-x-4 bg-gray-100 p-6 rounded-2xl hover:bg-gray-200 transition-colors duration-300">
                  <span className="text-green-600 text-2xl">✅</span>
                  <div>
                    <b className="text-gray-900">Packaging & Logistics:</b> We work with professional packaging and logistics partners to ensure safe and timely delivery across domestic and international markets.
                  </div>
                </li>
                <li className="flex items-start space-x-4 bg-gray-100 p-6 rounded-2xl hover:bg-gray-200 transition-colors duration-300">
                  <span className="text-green-600 text-2xl">✅</span>
                  <div>
                    <b className="text-gray-900">Global Trading:</b> With a strong network, we facilitate smooth exports to businesses worldwide, helping them access India&apos;s best Makhana with ease.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-8 text-center text-gray-900">
          Our Mission
        </h1>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            To connect international buyers with India&apos;s finest Makhana through ethical sourcing, transparent trade, and seamless logistics.
          </p>
        </div>
      </div>

      {/* Registered With Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-12 text-center text-gray-900">
            Registered With
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="relative w-64 h-40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src="/example1.jpg" alt="Registered Logo 1" fill className="object-cover" />
            </div>
            <div className="relative w-64 h-40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src="/example2.jpg" alt="Registered Logo 2" fill className="object-cover" />
            </div>
            <div className="relative w-64 h-40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src="/example2.jpg" alt="Registered Logo 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}