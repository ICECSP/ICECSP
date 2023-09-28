import Image from "next/image";
import landingBg from "@/public/images/landingBG.jpg";
import Venue from "./Venue";
export default function LandingPage() {
  return (
    <>
      <div className="w-full h-[80vh] relative overflow-hidden">
        <div className="flex h-full relative z-10">
          <div className="w-1/4 h-full bg-white/50 relative " />

          <div className="w-3/4 h-full bg-black/80 p-8 px-32 flex flex-col">
            <span className="text-white text-center font-bold text-5xl leading-relaxed">
              International Conference on Electronics, Communication and Signal
              Processing
            </span>
            <button className="my-12 w-fit p-6 text-3xl font-bold mx-auto text-white border-4 border-white hover:bg-white hover:text-black transition-colors rounded-lg">
              ICECSP 2024
            </button>
          </div>
          <div className="absolute bottom-0 w-full">
          <Venue/>
          </div>
        </div>
        <div className="w-full bottom-0 absolute">
          <Image src={landingBg} alt="NIT delhi" />
        </div>
      </div>
    </>
  );
}
