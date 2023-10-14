import AboutConference from "@/components/aboutPage/AboutConference";
import AboutDepartment from "@/components/aboutPage/AboutDepartment";

export default function About() {
    return <>
        <AboutDepartment/>
        <hr className="my-8 mx-auto w-11/12 border-t-2 border-gray-300"/>
        <AboutConference/>
    </>
}