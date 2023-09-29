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
          </div>
          <div className="absolute bottom-4 w-full mx-auto">
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
