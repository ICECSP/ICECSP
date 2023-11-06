import Image from "next/image";
import landingBg from "@/public/images/landingBG.jpg";
import Venue from "./Venue";
export default function LandingPage() {
  return (
    <>
      <div className="w-full h-[80vh] relative overflow-hidden">
        <div className="flex h-full relative z-10">
          <div className="absolute bottom-2 sm:bottom-4 w-full mx-auto">
            <div className="text-center h-fit text-white tracking-wider">
              <h1 className="bg-black/70 text-2xl w-full mx-auto p-4 font-semibold">
                First International Conference on Electronics, Communication and Signal Processing
                <div className="my-2 font-bold"> {"( ICECSP - 2024 )"}</div>
              </h1>
            </div>
            <Venue />
          </div>
        </div>
        <div className="w-full inset-0 sm:inset-auto sm:bottom-0 absolute">
          <Image priority className="saturate-200 h-full sm:h-auto" src={landingBg} alt="NIT Delhi" />
        </div>
      </div>
    </>
  );
}
