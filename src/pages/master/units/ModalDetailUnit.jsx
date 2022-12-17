import React from "react";

function ModalDetailUnit(props) {
  const { dataSelected } = props;
  return (
    <div>
      <div
        className="py-20  bg-gray-700 bg-opacity-80 opacity-100 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        id="modal"
      >
        <div role="alert" className="container mx-auto w-9/12 md:w-2/6 ">
          <div className="relative py-6 px-3 md:px-8 bg-white shadow-md rounded border border-gray-400">
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-blue-800"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <h1 className="font-extrabold text-2xl font-sans text-blue-800 ml-3">
                Detail Unit
              </h1>
            </div>
            <div>
              <ul>
                <li>
                  Rooms:{" "}
                  <span className="font-bold text-blue-700">
                    {dataSelected.rooms}
                  </span>
                </li>
                <li>
                  Furnised:{" "}
                  <span className="font-bold text-blue-700">
                    {dataSelected.furnished}
                  </span>
                </li>
                <li>
                  Balcony:{" "}
                  <span className="font-bold text-blue-700">
                    {dataSelected.balcony}
                  </span>
                </li>
                <li>
                  Direction:{" "}
                  <span className="font-bold text-blue-700">
                    {dataSelected.direction}
                  </span>
                </li>
              </ul>
            </div>

            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              aria-label="close modal"
              role="button"
              onClick={() => props.setShowModalDetail(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDetailUnit;
