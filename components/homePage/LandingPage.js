import Image from "next/image";
import landingBg from "@/public/images/landingBG.jpg";
import Venue from "./Venue";
import Timeline from "./Timeline";
import Link from "next/link";
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
              This is the 2nd draft of the updated programme schedule and will be updated from time to time. Hence, applicants are kindly requested to keep on viewing in regular intervals. In case of any query, please drop an email to <a href="mailto:icecsp2024@nitdelhi.ac.in" className="text-blue-500">icecsp2024@nitdelhi.ac.in</a>.
              <p className="blue-300"> <a href="..\docs\PROGRAM_SCHEDULE_2.pdf" className="text-blue-500">Updated/ 2nd Draft of Tentative Programme Schedule</a> </p>


              </h1>
              <h1 className="bg-black/80 text-sm sm:text-xl w-full mx-auto p-5 m-2 ">
              NIT Delhi will not be able to provide any accommodation during the ICECSP 2024 conference, however, for the convenience of participants, details of few nearby hotels are enlisted in the accommodation page on this website (Website --&gt; Accommodations).
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
