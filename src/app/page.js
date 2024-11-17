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
            Portal CAPES: Acelerando a Pesquisa no Brasil
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            O Portal CAPES é uma plataforma dedicada ao fortalecimento da
            educação e pesquisa no Brasil, oferecendo acesso a uma vasta gama de
            recursos acadêmicos e científicos. Desde 1951, a CAPES tem sido um
            pilar para a formação de profissionais qualificados e o
            desenvolvimento de conhecimento inovador em diversas áreas do saber.
          </p>
          <button className="btn btn-primary mt-6">
            Clicar para ver quem somos, ver FAQ
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-3/5 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <Image
            className="rounded-lg shadow-lg max-w-full"
            src="/imagem_do_capes.png"
            alt="Placeholder image"
            width={550}
            height={550}
          />
        </div>

        {/* ChatBot Section */}
        {/* <div className="w-full mt-6 lg:mt-0"> */}
        {/*   <ChatBot /> */}
        {/* </div> */}
      </div>
      <div className="flex mt-6 justify-center items-center">
        <iframe
          width="1012"
          height="600"
          src="https://www.youtube.com/embed/AjUgJJnuNRY?si=vuFw4E8F-FrBWbMx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <br></br>
    </div>
  );
}
