import Image from "next/image";
import landingBg from "@/public/images/landingBg.jpg"

export default function LandingPage() {
    return <>
        <div className="w-full h-[80vh] relative overflow-hidden">
            <div className="flex h-full">
                <div className="w-1/2 h-full">

                </div>
                <div className="w-1/2">

                </div>

            </div>
            <div className="w-full bottom-0 absolute">
                <Image src = {landingBg} />
            </div>
        </div>
    </>
}