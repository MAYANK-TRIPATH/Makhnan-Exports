import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      <Appbar />
      {/* About Us */}
      <div className="max-w-5xl mx-auto px-6 py-12 mt-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
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
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Welcome to <b>Kesharwani Exports</b>, your trusted partner in premium <b>Makhana (Fox Nuts) trading and export</b>.
              As a new but passionate business, we specialize in sourcing the finest quality Makhana directly from 
              reliable farmers and suppliers across India and delivering it to global markets. Our goal is to provide <b>authentic, 
              high-quality Makhana</b> that meets international standards while ensuring ethical and fair trade practices.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mt-16 mb-8">
          What We Do
        </h1>
        <p className="text-lg leading-relaxed w-[60%] mx-auto">
          At <b>Kesharwani Exports</b>, we act as a bridge between farmers and global buyers,
          ensuring seamless trade and hassle-free logistics.<br/>
          <span className="flex justify-center items-center font-semibold">Our key activities include:</span>
        </p>
        <p className="text-lg leading-relaxed w-[75%] mx-auto mb-8">
          ✅ <b>Sourcing:</b> We procure high-grade Makhana from trusted farmers and suppliers, ensuring quality at every step.<br/>
          ✅ <b>Quality Assurance:</b> While we don&apos;t process Makhana ourselves, we ensure that the product we trade meets strict quality and hygiene standards.<br/>
          ✅ <b>Packaging &amp; Logistics:</b> We work with professional packaging and logistics partners to ensure safe and timely delivery across domestic and international markets.<br/>
          ✅ <b>Global Trading:</b> With a strong network, we facilitate smooth exports to businesses worldwide, helping them access India&apos;s best Makhana with ease.
        </p>
      </div>
      <Footer />
    </div>
  );
}