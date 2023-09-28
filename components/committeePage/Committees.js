import Image from "next/image";

export default function Committee(props) {
    return (
        <section className="py-4">
            <div className="container mx-auto px-6 pt-6 font-bold text-4xl">
                {props.name}
            </div>
            {
                props.data.map(function (section, idx) {
                    return (
                        <div key={idx} className={`${idx % 2 === 0 ? 'bg-primary05' : 'bg-primary10'} w-full py-4`}>
                            <div className="mx-auto container py-4">
                                {section.type != 'main' ? <h3 className="text-3xl text-primary90 font-bold text-center mb-8">{section.type}</h3> : ''}
                                <div
                                    className="flex flex-wrap justify-center gap-4 lg:gap-6 items-stretch">
                                    {
                                        section.members.map(function (member) {
                                            return (<UserProfile member={member} size = {props.size}
                                                                 />)
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

function UserProfile({member, size}) {
    return (
        <div className={`${size == undefined ? "w-[15rem] min-h-[10rem]": "w-[25rem] min-h-[18rem] p-4"} rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.03] transition-[shadow,transform] bg-white`}>
            <div className="px-6 py-4 flex flex-col">
                <div className="flex justify-center pb-6">
                    <Image src={member.photo} className={`${size == undefined ? "w-28": "w-44"} rounded-full aspect-square object-cover`}
                           alt="profile image" width={120}
                           quality={100}/>
                </div>
                <div className={`font-bold ${size == undefined ? "text-lg" : "text-2xl my-4"} text-primaryDark text-center`}>{member.name}</div>
                <p className={`text-primary80 ${size == undefined ? "text-sm" : "text-xl"} text-center`}>{member.designation}</p>
                <p className={`leading-tight ${size == undefined ? "text-sm" : "text-md"} text-center`}>{member.affiliation.line1}</p>
                <p className="leading-tight text-xs text-center text-gray-500">{member.affiliation.line2}</p>
            </div>
        </div>
    )
} 