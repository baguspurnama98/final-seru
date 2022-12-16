import React, { useState } from "react";
import { ApartmentUnit } from "../../../stores/master/master-model";

function ModalUnit(props) {
  const [formUnit, setFormUnit] = useState(new ApartmentUnit());

  const handleOnChangeUnit = (e) => {
    setFormUnit({
      ...formUnit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formUnit);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="py-20  bg-gray-700 bg-opacity-80 opacity-100 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <label
              for="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Unit Code
            </label>
            <input
              name="unitCode"
              id="name"
              className="mb-1 mt-2 text-grey-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
              placeholder="10AA"
              onChange={handleOnChangeUnit}
            />
            <label
              for="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Floor
            </label>
            <input
              name="floor"
              id="name"
              className="mb-1 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
              placeholder="10"
              onChange={handleOnChangeUnit}
            />
            <label
              for="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Rooms
            </label>
            <input
              name="rooms"
              id="name"
              className="mb-1 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
              placeholder="Jumlah kamar"
              onChange={handleOnChangeUnit}
            />
            <label
              for="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Direction
            </label>
            <select
              name="direction"
              value={formUnit.direction}
              onChange={handleOnChangeUnit}
              className="w-full p-3 mt-2 mb-4 w-full bg-white border-blue-300 text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
            >
              <option value="NORTH">North</option>
              <option value="NORTHEAST">Northeast</option>
              <option value="EAST">East</option>
              <option value="SOUTHEAST">Southeast</option>
              <option value="SOUTHWEST">South</option>
              <option value="WEST">West</option>
            </select>
            <label
              for="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Status
            </label>
            <input
              name="status"
              id="name"
              className="mb-1 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-grey-500 rounded border"
              placeholder="Status"
              disabled="true"
            />
            <div>
              <label
                for="name"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Balcony
              </label>
              <select
                name="balcony"
                value={formUnit.balcony}
                onChange={handleOnChangeUnit}
                className="w-full p-3 mt-2 mb-4 w-full bg-white border-blue-300 text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label
                for="name"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Furnished
              </label>
              <select
                name="furnished"
                value={formUnit.furnished}
                onChange={handleOnChangeUnit}
                className="w-full p-3 mt-2 mb-4 w-full bg-white border-blue-300 text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <label
              for="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Rent Price
            </label>
            <input
              name="rentPrice"
              id="name"
              className="mb-1 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
              placeholder="IDR"
              onChange={handleOnChangeUnit}
            />
            <div>
              <label
                for="name"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Rent Schema
              </label>
              <select
                name="rentSchema"
                value={formUnit.rentSchema}
                onChange={handleOnChangeUnit}
                className="w-full p-3 mt-2 mb-4 w-full bg-white border-blue-300 text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="flex items-center justify-start w-full">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                Submit
              </button>
              <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={() => props.setShowModal(false)}
              >
                Cancel
              </button>
            </div>
            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              aria-label="close modal"
              role="button"
              onClick={() => props.setShowModal(false)}
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
      </form>
    </div>
  );
}

export default ModalUnit;
