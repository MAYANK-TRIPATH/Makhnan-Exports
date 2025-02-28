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
              className="w-full h-auto object-cover border-4 border-green-500 rounded-lg shadow-lg"
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
      <div className="px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mt-12 sm:mt-16">
          What We Do
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-center sm:text-left mx-auto mt-4 sm:mt-2 max-w-3xl">
          At <b>Kesharwani Exports</b>, we act as a bridge between farmers and global buyers, ensuring seamless trade and hassle-free logistics.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-center font-semibold mt-6 sm:mt-8">
          Our key activities include:
        </p>
        <div className="text-base sm:text-lg leading-relaxed mt-4 sm:mt-2 max-w-3xl mx-auto space-y-3">
          <p>✅ <b>Sourcing:</b> We procure high-grade Makhana from trusted farmers and suppliers, ensuring quality at every step.</p>
          <p>✅ <b>Quality Assurance:</b> While we don&apos;t process Makhana ourselves, we ensure that the product we trade meets strict quality and hygiene standards.</p>
          <p>✅ <b>Packaging &amp; Logistics:</b> We work with professional packaging and logistics partners to ensure safe and timely delivery across domestic and international markets.</p>
          <p>✅ <b>Global Trading:</b> With a strong network, we facilitate smooth exports to businesses worldwide, helping them access India&apos;s best Makhana with ease.</p>
        </div>
      </div>


      {/* Our Mission  */}
      <div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mt-16 mb-2">
          Our Mission
        </h1>
        <p className="text-lg leading-relaxed w-[80%] mx-auto mb-8">
          To connect international buyers with India's finest Makhana through ethical sourcing, transparent trade, and seamless logistics.
        </p>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mt-8 mb-2">
          Registered With
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 rounded-2xl overflow-hidden border-4 border-green-500 shadow-2xl w-fit max-w-5xl mx-auto mt-6 p-4 mb-6">
          <Image
            src="/example1.jpg"
            width={400}
            height={300}
            alt="Presentation"
            className="w-auto h-auto max-w-[300px] object-cover"
            priority
          />
          <Image
            src="/example1.jpg"
            width={250}
            height={300}
            alt="Presentation"
            className="w-auto h-auto max-w-[300px] object-cover"
            priority
          />
          <Image
            src="/example1.jpg"
            width={250}
            height={300}
            alt="Presentation"
            className="w-auto h-auto max-w-[300px] object-cover"
            priority
          />
        </div>

      </div>
      <Footer />
    </div>
  );
}