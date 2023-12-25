export default function Venue() {
  return (
    <div className="rounded-lg flex sm:flex-row flex-col w-full sm:w-4/5 mx-auto mt-2 sm:mt-0">
      <div className="flex justify-center items-center rounded-none sm:rounded-l-lg bg-primary90 px-3 sm:px-8 shadow-inner sm:min-w-[20%]">
        <div className="text-white flex items-center gap-x-2 sm:block text-center tracking-wide sm:py-0 py-4">
          <div className="font-bold text-xl sm:text-3xl">8-10</div>
          <div className="font-normal text-md sm:text-xl">August 2024</div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start bg-primary05 py-4 px-6 tracking-wide rounded-r-lg mt-3 sm:mt-0">
        <div className="font-medium sm:font-semibold text-gray-800 text-sm md:text-xl py-0.5 sm:py-1">
          Department of Electronics and Communication, National Institute of Technology Delhi, India
        </div>

        <div className="text-gray-600 sm:font-medium text-xs sm:text-sm py-0.5 sm:py-1">
          Plot No. FA7, Zone, P1, GT Karnal Road, Delhi, 110036
        </div>
      </div>
    </div>
  );
}
