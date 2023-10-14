import Image from "next/image";
import landingBg from "@/public/images/landingBG.jpg";

export default function CommingSoon() {
    return (
        <>
            <div className="min-h-[80vh] h-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center relative px-4">
                <div className="absolute w-full h-full opacity-30">
                    <Image src={landingBg} alt="Nit Delhi" style={{height: "inherit"}} />
                </div>
                <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-10 text-center">Coming Soon</h1>
            </div>
        </>
    );
}
