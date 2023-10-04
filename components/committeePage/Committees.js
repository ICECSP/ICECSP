"use client";
import Image from "next/image";

export default function Committee(props) {
  return (
    <section className={`py-12 ${props.even ? "bg-primary10/50" : "bg-primary05/30"}`}>
      <div className="container mx-auto px-6 font-bold text-4xl tracking-widest">
        {props.name}
      </div>
      {props.data.map(function (section, idx) {
        return (
          <div key={idx} className="w-full">
            <div className="mx-auto container py-4">
              {section.type != "main" ? (
                <h3 className="text-3xl text-primary90 font-bold text-center mb-8 tracking-wide">
                  {section.type}
                </h3>
              ) : (
                ""
              )}
              <div className={`flex flex-wrap justify-center ${props.onlyData ? "gap-6" : "gap-4 lg:gap-8 lg:gap-y-16"} items-stretch my-12`}>
                {section.members.map(function (member) {
                  return <UserProfile key={member.name} member={member} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export function UserProfile({ member }) {
  return (
    <div
      className={`flex justify-center items-stretch relative w-[18rem] ${member.photo ? "min-h-[15rem] mt-14" : "min-h-[5rem]"} rounded-md shadow-md hover:shadow-lg hover:scale-[1.02] transition-[shadow,transform] bg-gradient-to-b to-primary05 from-primary20 ring-1 ring-blue-200`}>
      <div className={`px-6 py-4 justify-center ${member.photo ? "pt-24" : ""} flex flex-col`}>
          {member.photo &&
        <div className="flex justify-center pb-6 absolute -top-16 w-full left-0">
           <div className="mx-auto">
            <Image
              src={member.photo}
              alt="user"
              className={`w-32 ring-4 ring-primary90 ring-offset-white bg-white ring-offset-4 rounded-full aspect-square object-cover`}
              width={120}
              quality={100}
            />
          </div>
        </div>
            }
        <div className={`font-bold py-1 text-lg text-blue-800 text-center`}>
          {member.name}
        </div>
        {member.designation && <p className="text-slate-800 py-1 text-sm text-center">
          {member.designation}
        </p>}
        <p className="text-black py-1 leading-tight text-sm text-center">
          {member.affiliation.line1}
        </p>
        <p className="leading-tight text-xs text-center text-gray-500">
          {member.affiliation.line2}
        </p>
      </div>
    </div>
  );
}
