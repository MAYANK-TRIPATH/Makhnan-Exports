import Appbar from "@/components/Appbar";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Appbar />
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
          
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900">
              About Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ratione rerum similique adipisci hic? Excepturi odio,
              sequi quidem, aperiam repudiandae consequuntur suscipit quia quasi
              numquam deserunt eius dignissimos alias totam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
