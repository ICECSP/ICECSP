import AboutConference from "@/components/aboutPage/AboutConference";
import AboutDepartment from "@/components/aboutPage/AboutDepartment";

export default function About() {
    return <>
        <AboutDepartment/>
        <hr class="my-8 border-t-2 border-gray-300"/>
        <AboutConference/>
    </>
}