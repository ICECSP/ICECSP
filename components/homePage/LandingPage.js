import Image from "next/image";
import landingBg from "@/public/images/landingBG.jpg";
import Venue from "./Venue";
import {dates} from "../importantDatesPage/data"
import Timeline from "./Timeline";
export default function LandingPage() {
  return (
    <>
      <div className="w-full h-[95vh] lg:h-[85vh] relative overflow-hidden">
        <div className="flex h-full relative z-10">
          <div className="absolute bottom-2 sm:bottom-4 w-full mx-auto">
            <div className="text-center h-fit mb-4 text-white tracking-wider">
              <h1 className="bg-black/80 text-lg sm:text-2xl w-full mx-auto p-4 font-semibold">
                First International Conference on Electronics, Communication and Signal Processing
                <div className="my-2 font-bold"> {"( ICECSP - 2024 )"}</div>
                <div className="my-2 font-bold text-lg">All Selected and presented Papers will be uploaded on the IEEE Xplore</div>
              </h1>
            </div>
            <Venue/>
            <br />
            {dates.map((item,id) => (
              <Timeline key={id} date={item.date} text={item.text} />
            ))}
          </div>
        </div>
        <div className="w-full absolute inset-0">
          <Image priority className="object-cover sm:object-bottom w-full h-full saturate-[.9]" src={landingBg} alt="NIT Delhi" />
        </div>        
      </div>
      <div className="text-center text-gray-500 my-4 ">
        <p>Created and Designed by: Mr. Shreyansh Gupta and Mr. Utkarsh Trivedi, B. Tech CSE 2nd Year Students, NIT Delhi</p>
        <p>Maintained by: Mr. Rishi Raj and Mr. Kartik Goyal, B. Tech ECE 3rd Year Students, NIT Delhi</p>
      </div>
    </>
  );
}
