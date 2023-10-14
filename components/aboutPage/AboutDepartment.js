import { aboutDept as aboutContent } from "./data";

export default function AboutConference() {
    return (
        <div className="container w-4/5 mx-auto mt-8">
            <h1 className="text-4xl my-16 text-primary80 text-center font-bold mb-6 sm:mb-12">About the Department</h1>

            {aboutContent.map((paragraph, index) => (
                <p key={index} className="mb-4 text-justify">
                    {paragraph}
                </p>
            ))}
        </div>
    )
}