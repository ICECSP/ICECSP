import AllTracks from "@/components/tracksPage/AllTracks";
import TimeLine from "@/components/tracksPage/Timeline";


export default function Home() {
  return (
    <div className="container mx-auto">
      <AllTracks />
      <TimeLine />
    </div>
  );
}
