"use client";
import Image from "next/image";

export default function Committee(props) {
    return (
        <section className={`py-12 ${props.even ? "bg-primary05" : "bg-white"}`}>
            <div className="container mx-auto px-6 font-bold text-4xl tracking-widest">
                {props.name}
            </div>
            {
                props.data.map(function (section, idx) {
                    return (
                        <div key={idx} className="w-full">
                            <div className="mx-auto container py-4">
                                {section.type != 'main' ? <h3 className="text-3xl text-primary90 font-bold text-center mb-8 tracking-wide">{section.type}</h3> : ''}
                                <div
                                    className="flex flex-wrap justify-center gap-4 lg:gap-8 lg:gap-y-16 items-stretch my-12">
                                    {
                                        section.members.map(function (member) {
                                            return (<UserProfile key={member.name} member={member} />)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

function UserProfile({ member }) {
    return (
        <div className={`mt-14 relative w-[18rem] min-h-[15rem] rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-[shadow,transform] bg-primary10`}>
            <div className="px-6 py-4 pt-24 flex flex-col">
                <div className="flex justify-center pb-6 absolute -top-16 w-full left-0">
                    <div className="mx-auto">

                        <Image src={member.photo} alt="user" className={`w-32 ring-4 ring-primary90 ring-offset-white ring-offset-4 rounded-full aspect-square object-cover`}
                           width={120}
                            quality={100} />
                    </div>
                </div>
                <div className={`font-bold py-1 text-lg text-primary90 text-center`}>{member.name}</div>
                <p className={`text-black py-1 text-md font-medium text-center`}>{member.designation}</p>
                <p className={`text-black py-1 leading-tight text-sm text-center`}>{member.affiliation.line1}</p>
                <p className="leading-tight text-xs text-center text-gray-500">{member.affiliation.line2}</p>
            </div>
        </div>
    )
} 