export default function Venue() {
  return (
    <div className="rounded-lg flex w-4/5 mx-auto">
      <div className="flex flex-col justify-center items-center rounded-l-lg bg-primary80 px-8 shadow-inner min-w-[20%]">
        <div className="text-white text-center tracking-wide">
          <div className="font-bold text-3xl">8-10</div>
          <div className="font-normal text-xl">August 2024</div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start bg-primary05 py-4 px-6 tracking-wide rounded-r-lg">
        <div className="font-semibold text-gray-800 text-xl py-1">
          Department of Electronics and Communication, National Institue of Technology Delhi, India
        </div>

        <div className="text-gray-600 font-medium text-sm py-1">
          Plot No. FA7, Zone, P1, GT Karnal Road, Delhi, 110036
        </div>
      </div>
    </div>
  );
}
