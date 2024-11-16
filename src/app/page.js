import Image from "next/image";
import Hero from "./Hero";
import { Poppins } from "next/font/google";
import ChatBot from "./components/ChatBot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export default function Home() {
  return (
    <div
      className={`${poppins.className} min-h-screen bg-gray-50 text-gray-800 px-6 lg:px-12 pt-8`}
    >
      {/* Hero Section */}
      <Hero />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 mt-12 lg:mt-16 ">
        {/* Text Section */}
        <div className="lg:w-2/5">
          <h1 className="text-blue-600 font-extrabold text-3xl lg:text-5xl leading-tight mb-6">
            Lorem Ipsum
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-3/5 flex justify-end mb-10">
          <Image
            className="rounded-lg shadow-lg"
            src="/placeholder1.png"
            alt="Placeholder image"
            width={500}
            height={500}
          />
        </div>

        <div>
          <ChatBot/>
        </div>
      </div>

     
    </div>
  );
}
