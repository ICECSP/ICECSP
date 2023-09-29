export default function Venue() {
  return (
    <div className="rounded-lg flex w-4/5 mx-auto">
      <div className="flex flex-col justify-center items-center rounded-l-lg bg-primary80 px-8 shadow-inner min-w-[20%]">
        <div className="text-white text-center tracking-wide">
          <div className="font-bold text-3xl">8-10</div>
          <div className="font-normal text-xl">August 2024</div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-primary05 py-2 tracking-wide rounded-r-lg">
        <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2 mt-4">
          Department of Electronics and Communication, National Institue of Technology Delhi, India
        </div>

        <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
          Plot No. FA7, Zone, P1, GT Karnal Road, Delhi, 110036
        </div>
      </div>
    </div>
  );
}
