export default function Venue() {
  return (
    <div>
      <div class="lg:flex shadow rounded-lg border  border-gray-400 my-5 mx-5">
        <div class="bg-primaryDark rounded-lg lg:w-2/12 py-4 block shadow-inner">
          <div class="text-center tracking-wide">
            <div class="text-white font-bold text-4xl ">8-10</div>
            <div class="text-white font-normal text-2xl">August 2024</div>
          </div>
        </div>
        <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-primary05 py-5 lg:px-2 lg:py-2 tracking-wide rounded-r-lg">
          <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2 mt-4">
            Department of Electronics and Communication, National Institue of Technology Delhi, India
          </div>

          <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
          Plot No. FA7, Zone, P1, GT Karnal Road, Delhi, 110036
          </div>
        </div>
      </div>
    </div>
  );
}
