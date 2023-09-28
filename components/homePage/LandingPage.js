import Image from "next/image";
import landingBg from "@/public/images/landingBg.jpg"

export default function LandingPage() {
    return <>
        <div className="w-full h-[80vh] relative overflow-hidden">
            <div className="flex h-full relative z-10">
                <div className="w-1/4 h-full bg-white/50">

                </div>
                <div className="w-3/4 h-full bg-black/80 p-8 px-32 flex flex-col">
                    <span className="text-white font-extrabold text-5xl leading-relaxed" >First International Conference on Electronics, Communication and Signal Processing 
                    <br/><span className="text-[1.4em]">(ICECSP 2024)</span>
                    </span>
                </div>

                <div>
                    
                </div>

            </div>
            <div className="w-full bottom-0 absolute">
                <Image src={landingBg} />
            </div>
        </div>
    </>
}