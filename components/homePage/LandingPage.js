import Image from "next/image";
import landingBg from "@/public/images/landingBG.jpg";
import Venue from "./Venue";
import Timeline from "./Timeline";
import Link from "next/link";
export default function LandingPage() {
  return (
    <>
      <div className="w-full h-[95vh] lg:h-[100vh] relative overflow-hidden">
        <div className="flex h-full justify-center items-center relative z-10">
          <div className="w-full mx-auto">
            <div className="text-center h-fit mb-4 text-white tracking-wider">
              <h1 className="bg-black/80 text-sm sm:text-xl w-full mx-auto p-5 m-2">
                Dear Participants,
                <br />
                The ICECSP 2024 Programme Committee decided to provide Track
                wise “Best Paper Award (One Best paper for individual tracks)"
                based on the performance evaluation by the Respective Session
                Chair and the Programme Committee to encourage the participants.
              </h1>
              <h1 className="bg-black/80 text-sm sm:text-xl w-full mx-auto p-5 m-2">
                Programme Schedule:{" "}
                <a
                  href="..\docs\PROGRAM_SCHEDULE.pdf"
                  className="text-blue-500"
                >
                  Schedule
                </a>
              </h1>
            </div>
            <Venue />
            {/* <Timeline /> */}
          </div>
        </div>
        <div className="w-full absolute inset-0">
          <Image
            priority
            className="object-cover sm:object-bottom w-full h-full saturate-[.9]"
            src={landingBg}
            alt="NIT Delhi"
          />
        </div>
      </div>
      <div className="text-center text-gray-500 my-4">
        <p>
          Created and Designed by: Mr. Shreyansh Gupta and Mr. Utkarsh Trivedi,
          B. Tech CSE 2nd Year Students, NIT Delhi
        </p>
        <p>
          Maintained by: Mr. Rishi Raj and Mr. Kartik Goyal, B. Tech ECE 3rd
          Year Students, NIT Delhi
        </p>
      </div>
    </>
  );
}
