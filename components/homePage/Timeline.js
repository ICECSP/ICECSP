export default function Timeline({date,text}) {
    return (
      <div className="flex justify-center sm:flex-row flex-col sm:w-4/5 mx-auto mt-2 sm:mt-0 ">
        <div className="flex justify-center items-center sm:w-1/4 rounded-none bg-primary90 px-3 sm:px-8 shadow-inner sm:min-w-[20%] border border-black">
          <div className="text-white flex items-center gap-x-2 sm:block text-center tracking-wide sm:py-0 py-4">
            <div className="font-normal text-md sm:text-xl">{date}</div>
          </div>
        </div>
        <div className="sm:w-1/2 flex flex-col justify-center items-start bg-primary05 py-0 px-6 tracking-wide mt-3 sm:mt-0 border border-black">
          <div className="font-medium sm:font-semibold text-gray-800 text-sm md:text-xl py-0.5 sm:py-1">
          {text}
          </div>
        </div>
      </div>
    );
  }
  