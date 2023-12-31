import Link from "next/link";
import AllTracks from "@/components/tracksPage/AllTracks";

export default function CallForPapers() {
  return (
    <>
      <h1 className="mx-5 my-10 text-left font-semibold text-xl">
      The ICECSP 2024 invites authors to submit original research papers (not published
elsewhere) in standard double-column IEEE conference template describing new
theoretical and/or experimental research results in the following broad areas (but not
limited to):
      </h1>
      <div className="container mx-auto px-4 sm:px-0">
      <AllTracks />
      </div>
      
    </>
  );
}
