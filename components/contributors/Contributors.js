import Image from "next/image";

export default function Contributors(props) {
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
                  <h3 className="px-8 text-3xl text-primary90 font-bold text-center mb-8 tracking-wide">
                    {section.type}
                  </h3>
                ) : (
                  ""
                )}
                <div className={`flex flex-wrap justify-center ${props.onlyData ? "gap-6" : "gap-4 gap-y-12 lg:gap-8 lg:gap-y-16"} items-stretch my-12 mb-6 sm:mb-12`}>
                  {section.member.map(function (member) {
                    return <UserProfile key={member.id} member={member} />;
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
        <div className={`flex justify-center relative w-32 sm:w-48 overflow-hidden hover:scale-[1.02] transition-[shadow,transform] ${member.photo ? "min-h-[14rem] sm:min-h-[15rem] mt-14" : "min-h-[5rem]"}`}>
        {member.photo &&
            <div className="mx-auto">
              <Image
                src={member.photo}
                alt={member.alt}
                className={`object-cover rounded-md`}
                width={320}
                height={320}
                quality={100}
              />
            </div>
          }
        </div>
      );
  }
  
