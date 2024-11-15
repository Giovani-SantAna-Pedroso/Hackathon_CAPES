import Image from "next/image";
import Hero from "./Hero";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"], // Adjust subsets as needed
  weight: ["400", "800", "900", "700"], // Add desired weights
});

export default function Home() {
  return (
    <div
      className={
        poppins.className + " min-h-screen bg-gray2 text-lightBlack px-8 pt-4"
      }
    >
      <Hero />

      <div className="flex mt-8 justify-between">
        <div className="max-w-[40%]">
          <h1 className="text-blue1 font-extrabold text-[40px] mb-8">
            Lorem ipsum
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make
          </p>
        </div>
        <div>
          <Image
            className="rounded"
            src="/placeholder1.png"
            alt="placeholder1"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
