import Image from "next/image";
import landingBg from "@/public/images/landingBG.jpg";
import Venue from "./Venue";
import Timeline from "./Timeline";
export default function LandingPage() {
  return (
    <>
      <div className="w-full h-[95vh] lg:h-[150vh] relative overflow-hidden">
        <div className="flex h-full relative z-10">
          <div className="absolute bottom-2 sm:bottom-4 w-full mx-auto ">
            <div className="text-center h-fit mb-4 text-white tracking-wider">
              <h1 className="bg-black/80 text-lg sm:text-2xl w-full mx-auto p-4 font-semibold my-2 ">
                First International Conference on Electronics, Communication and Signal Processing
                <div className="my-2 font-bold"> {"( ICECSP - 2024 )"}</div>
                <div className="my-2 font-bold text-lg">Event Format: Hybrid(In-person and Virtual)</div>
                <div className="my-2 font-bold text-lg">All Selected and presented Papers will be uploaded on the IEEE Xplore</div>
              </h1>


              <h1 className="bg-black/80 text-sm sm:text-xl w-full mx-auto p-5 m-2 ">
              Dear Authors, <br/>
              Paper registration is open for the First International Conference on Electronics, Communication, and Signal Processing ICECSP 2024. Decisions for the 1st round have already been communicated, and decisions for the 2nd round are underway. Authors of accepted papers need to submit the camera-ready paper and IEEE copyright form through CMT as per instructions sent through email. 
                <div className="my-2 font-bold text-lg">Registration's last date is July 05, 2024.</div>
                <div className="my-2 font-bold text-sm">Thanks, Organising Team (ICECSP 2024)</div>
              </h1>

            </div>
            <Venue/>
            <Timeline />
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
