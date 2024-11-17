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
      className={`${poppins.className} min-h-screen bg-gray-50 text-gray-800 px-4 sm:px-6 lg:px-12 pt-8`}
    >
      <Hero />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-20 mt-8 sm:mt-12 lg:mt-16">
        {/* Text Section */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <h1 className="text-blue-600 font-extrabold text-2xl sm:text-3xl lg:text-5xl leading-tight mb-4 sm:mb-6">
            Lorem Ipsum
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make.
          </p>
        </div>
        <p>Clicar para ver quem somos, ver FAQ</p>

        {/* Image Section */}
        <div className="w-full lg:w-3/5 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <Image
            className="rounded-lg shadow-lg max-w-full"
            src="/placeholder1.png"
            alt="Placeholder image"
            width={500}
            height={500}
          />
        </div>

        {/* ChatBot Section */}
        {/* <div className="w-full mt-6 lg:mt-0"> */}
        {/*   <ChatBot /> */}
        {/* </div> */}
      </div>
    </div>
  );
}
