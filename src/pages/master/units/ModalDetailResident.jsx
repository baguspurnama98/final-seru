export default function ModalDetailResident() {
  return (
    <>
      <div class="flex justify-center items-center h-screen w-full absolute ">
        <div
          class="
        
        shadow-md
        h-200
        mx-3
        rounded-3xl
        flex flex-col
        justify-around
        items-center
        overflow-hidden
        sm:flex-row sm:h-52 sm:w-3/5
        md:w-96 relative w-100 
        "
        >
          <div
            class="
          flex-1
          w-full
          flex flex-col
          items-baseline
          justify-around
          h-1/2
          pl-6
          sm:h-full sm:items-baseline sm:w-1/2 
          "
          >
            <div class="flex flex-col justify-start items-baseline relative h-100 w-32">
              <h1 class="text-lg font-normal mb-0 text-gray-600 font-sans ">
                Details
              </h1>
              <span class="text-xs text-indigo-300 mt-0">by supplier</span>
            </div>
            <p class="text-xs text-gray-500 w-4/5">
              -Rooms: 3<p>-Furnished: yes</p>
              <p>-Balcony: no</p>
              <p>-Balcony: no</p>
            </p>
            <div class="w-full flex justify-between items-center">
              <h1 class="font-bold text-gray-500">$200</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
