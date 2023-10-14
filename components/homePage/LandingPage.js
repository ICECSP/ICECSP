import Image from "next/image";
import landingBg from "@/public/images/landingBG.jpg";
import Venue from "./Venue";
export default function LandingPage() {
  return (
    <>
      <div className="w-full h-[80vh] relative overflow-hidden">
        <div className="flex h-full relative z-10">
          <div className="text-center text-primaryLight tracking-wider w-full sm:w-3/4 h-full bg-black/70 p-8  sm:px-32 flex flex-col">
            <div className="mt-2 sm:mt-10 text-gray-100 font-medium sm:font-bold text-lg sm:text-3xl">
              First International Conference
            </div>
            <div className="mt-2 text-gray-100 font-medium sm:font-semibold text-md sm:text-xl">
              On
            </div>

            <div className="font-semibold text-gray-50 text-2xl sm:text-5xl leading-normal sm:leading-relaxed">
              Electronics, Communication and Signal Processing
            </div>
            <abbr className="mt-4 sm:my-4 font-semibold sm:font-bold text-2xl sm:text-4xl leading-relaxed">
              {"(ICECSP - 2024)"}
            </abbr>
          </div>
          <div className="absolute bottom-2 sm:bottom-4 w-full mx-auto">
            <Venue />
          </div>
        </div>
        <div className="w-full inset-0 sm:inset-auto sm:bottom-0 absolute">
          <Image className="h-full sm:h-auto" src={landingBg} alt="NIT Delhi" />
        </div>
      </div>
    </>
  );
}
