import Image from "next/image";
import landingBg from "@/public/images/landingBG.jpg";
import Venue from "./Venue";
export default function LandingPage() {
  return (
    <>
      <div className="w-full h-[80vh] relative overflow-hidden">
        <div className="flex h-full relative z-10">
          <div className="w-1/4 h-full bg-white/50 relative " />

          <div className="text-center text-primaryLight tracking-wider w-3/4 h-full bg-black/80 p-8 px-32 flex flex-col">
            <div className="mt-10 font-bold text-3xl">
              First International Conference
            </div>
            <div className="mt-2  font-semibold text-xl">
              On
            </div>

            <div className="font-bold text-5xl leading-relaxed">
              Electronics, Communication and Signal Processing
            </div>
            <abbr className="my-2 font-bold text-4xl leading-relaxed">
              (ICECSP - 2024)
            </abbr>
          </div>
          <div className="absolute bottom-4 w-full mx-auto">
            <Venue />
          </div>
        </div>
        <div className="w-full bottom-0 absolute">
          <Image src={landingBg} alt="NIT delhi" />
        </div>
      </div>
    </>
  );
}
