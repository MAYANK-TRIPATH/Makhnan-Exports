import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Appbar />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6 mt-4 text-black text-center">
          About Us
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
            <p className="text-lg sm:text-xl leading-relaxed">
              Welcome to <b>Kesharwani Exports</b>, your trusted partner in premium Makhana
              (Fox Nuts) trading and export. As a new but passionate business, we
              specialize in sourcing the finest quality Makhana directly from reliable
              farmers and suppliers across India and delivering it to global markets.
              Our goal is to provide authentic, high-quality Makhana that meets international
              standards while ensuring ethical and fair trade practices.
            </p>

          </div>
        </div>
      </div>


      <div className="max-w-7xl sm:px-6 md:px-8 py-16">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4 text-black text-center">
          What We Do
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <div className="space-y-8 text-left">

            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
              At <b>Kesharwani Exports</b>, we act as a bridge between farmers and global buyers, ensuring seamless trade and hassle-free logistics.
            </p>


            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
              Our Key Activities
            </h2>


            <ul className="space-y-6 text-lg sm:text-xl leading-relaxed text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-4">✅</span>
                <div>
                  <b className="text-gray-800">Sourcing:</b> We procure high-grade Makhana from trusted farmers and suppliers, ensuring quality at every step.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-4">✅</span>
                <div>
                  <b className="text-gray-800">Quality Assurance:</b> While we don&apos;t process Makhana ourselves, we ensure that the product we trade meets strict quality and hygiene standards.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-4">✅</span>
                <div>
                  <b className="text-gray-800">Packaging & Logistics:</b> We work with professional packaging and logistics partners to ensure safe and timely delivery across domestic and international markets.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-4">✅</span>
                <div>
                  <b className="text-gray-800">Global Trading:</b> With a strong network, we facilitate smooth exports to businesses worldwide, helping them access India&apos;s best Makhana with ease.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl sm:px-6 md:px-8 py-16">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4 text-black text-center">
          Our Mission
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <div className="space-y-6 text-left">
            <p className="text-lg sm:text-xl leading-relaxed">
            To connect international buyers with India&apos;s finest Makhana through ethical 
            sourcing, transparent trade, and seamless logistics.
              </p>
          </div>
        </div>
      </div>

    
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4 text-black text-center">
          Registered With
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 shadow-lg rounded-2xl p-2">
          <Image src="/example1.jpg" width={300} height={250} alt="Presentation" className="object-cover rounded-lg" />
          <Image src="/example2.jpg" width={300} height={250} alt="Presentation" className="object-cover rounded-lg" />
          <Image src="/example2.jpg" width={300} height={250} alt="Presentation" className="object-cover rounded-lg" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
