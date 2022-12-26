import React, { useState } from "react";
import Spinner from "../../../assets/Spinner";
import { ApartmentUnit } from "../../../stores/master/master-model";
import { useCreateUnitMutation } from "../../../services/unitsApi";
import { Unit } from '../../../model/units'

const ModalUnit: React.FC<{ setShowModal: (status: boolean) => void }> = (props) => {
  const [formUnit, setFormUnit] = useState<Unit>(new ApartmentUnit());
  const [createUnit] = useCreateUnitMutation()
  const [loading, setLoading] = useState(false);

  const handleOnChangeUnit = (e: any) => {
    setFormUnit({
      ...formUnit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    formUnit["unitCode"] = formUnit.unitCode.toUpperCase();
    formUnit["balcony"] = formUnit.balcony || "Yes";
    formUnit["furnished"] = formUnit.furnished || "Yes";
    formUnit["direction"] = formUnit.direction || "NORTH";
    formUnit["rentSchema"] = formUnit.rentSchema || "daily";
    formUnit["status"] = "available";
    formUnit["rentPrice"] = Number(formUnit.rentPrice);
    formUnit["sellPrice"] = Number(formUnit.sellPrice);
    setLoading(true);
    createUnit(formUnit).then(() => props.setShowModal(false))
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
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
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <h1 className="font-extrabold text-2xl font-sans text-blue-800 ml-3">
                New Unit
              </h1>
            </div>

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Unit Code
            </label>
            <input
              name="unitCode"
              id="name"
              className="mb-2 text-grey-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
              placeholder="Ex: 10AB"
              onChange={handleOnChangeUnit}
            />

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Floor
            </label>
            <input
              name="floor"
              id="name"
              type="number"
              className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
              placeholder="Ex: 10"
              onChange={handleOnChangeUnit}
            />

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Rooms
            </label>
            <input
              name="rooms"
              id="name"

              className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
              placeholder="Ex: 3"
              onChange={handleOnChangeUnit}
            />
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Direction
            </label>

            <select
              name="direction"
              value={formUnit.direction}
              onChange={handleOnChangeUnit}
              className="p-2 mb-2 w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
            >
              <option value="NORTH">North</option>
              <option value="NORTHEAST">Northeast</option>
              <option value="EAST">East</option>
              <option value="SOUTHEAST">Southeast</option>
              <option value="SOUTHWEST">South</option>
              <option value="WEST">West</option>
            </select>

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Status
            </label>
            <input
              name="status"
              className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-grey-500 rounded border"
              placeholder="Available"
              disabled={true}
            />

            <div>
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Balcony
              </label>
              <select
                name="balcony"
                value={formUnit.balcony}
                onChange={handleOnChangeUnit}
                className="p-2 mb-2 w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Furnished
              </label>
              <select
                name="furnished"
                value={formUnit.furnished}
                onChange={handleOnChangeUnit}
                className="p-2 mb-2 w-full bg-white text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Rent Schema
              </label>
              <select
                name="rentSchema"
                value={formUnit.rentSchema}
                onChange={handleOnChangeUnit}
                className="p-2 mb-2 w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Rent Price
            </label>
            <input
              name="rentPrice"
              id="name"
              type="number"
              className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
              placeholder="Ex: 3000000"
              onChange={handleOnChangeUnit}
            />

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Sell Price
            </label>
            <input
              name="sellPrice"
              id="name"
              type="number"
              className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
              placeholder="Ex: 3000000"
              onChange={handleOnChangeUnit}
            />

            <div className="flex items-center justify-end w-full mt-4 space-x-3">
              <button
                className=" bg-gray-100  border-gray-200 hover:bg-gray-200  transition duration-150 text-gray-800 ease-in-out border rounded px-8 py-2 text-sm "
                onClick={() => props.setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                disabled={!formUnit.unitCode}
              >
                {loading && <Spinner />}
                <span>Submit</span>
              </button>
            </div>
            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              aria-label="close modal"
              onClick={() => {
                props.setShowModal(false);
              }}
              disabled={loading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
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
