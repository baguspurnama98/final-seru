import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteUnit,
  getUnitsById,
  saveUpdate,
} from "../../../stores/master/units-slice";
import Pulse from "../../../assets/Pulse";
import Spinner from "../../../assets/Spinner";

export default function DetailPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useRef(true);
  const [unit, setUnit] = useState();
  const [loadingSubmit, setloadingSubmit] = useState(false);
  const [loadingDelete, setloadingDelete] = useState(false);

  useEffect(() => {
    if (loading.current) {
      dispatch(getUnitsById(params.id)).then((res) => {
        loading.current = false;
        setUnit(res.payload);
      });
    }
  }, [dispatch, params.id]);

  const handleOnChange = (e) => {
    setUnit({ ...unit, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloadingSubmit(true);
    dispatch(saveUpdate(unit)).then(() => {
      setloadingSubmit(false);
      navigate("/units");
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setloadingDelete(true);

    dispatch(deleteUnit(unit.id)).then(() => {
      setloadingDelete(false);
      navigate("/units");
    });
  };

  return (
    <div>
      {loading.current && (
        <div className="mt-20">
          <Pulse />
        </div>
      )}
      {!loading.current && (
        <form onSubmit={handleSubmit}>
          <div role="alert" className="container py-8 px-32">
            <div className=" py-6 px-3 md:px-8 bg-white shadow-md rounded border border-gray-400">
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
                  Manage Unit
                </h1>
              </div>

              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Unit Code
              </label>
              <input
                name="unitCode"
                value={unit.unitCode}
                className="mb-2 text-grey-600 bg-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
                placeholder="Ex: 10AB"
                readOnly={true}
              />

              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Floor
              </label>
              <input
                name="floor"
                value={unit.floor}
                className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
                placeholder="Ex: 10"
                onChange={handleOnChange}
              />

              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Rooms
              </label>
              <input
                name="rooms"
                value={unit.rooms}
                className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
                placeholder="Ex: 3"
                onChange={handleOnChange}
              />
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Direction
              </label>

              <select
                name="direction"
                value={unit.direction}
                onChange={handleOnChange}
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
                Status{" "}
                {["sold", "rented"].includes(unit.status) && (
                  <span className="text-red-500 ml-2">*Uneditable</span>
                )}
              </label>
              <select
                name="status"
                value={unit.status}
                onChange={handleOnChange}
                disabled={["sold", "rented"].includes(unit.status)}
                className="p-2 mb-2 w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
                <option value="sold">Sold</option>
                <option value="rented">Rented</option>
              </select>

              <div>
                <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  Balcony
                </label>
                <select
                  name="balcony"
                  value={unit.balcony}
                  onChange={handleOnChange}
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
                  value={unit.furnished}
                  onChange={handleOnChange}
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
                  value={unit.rentSchema}
                  onChange={handleOnChange}
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
                value={unit.rentPrice}
                type="number"
                className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
                placeholder="Ex: 3000000"
                onChange={handleOnChange}
              />

              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Sell Price
              </label>
              <input
                name="sellPrice"
                value={unit.sellPrice}
                type="number"
                className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
                placeholder="Ex: 3000000"
                onChange={handleOnChange}
              />

              <div className="flex items-center justify-end w-full space-x-1 mt-4">
                <button
                  className={`flex justify-center items-center rounded  px-8 py-2 text-sm 
                    ${
                      ["sold", "rented"].includes(unit.status)
                        ? "bg-gray-200 text-black"
                        : "bg-red-700 hover:bg-red-600 text-white"
                    }`}
                  disabled={["sold", "rented"].includes(unit.status)}
                  onClick={handleDelete}
                >
                  {loadingDelete && <Spinner />}
                  <span>Delete</span>
                </button>
                <button className="flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                  {loadingSubmit && <Spinner />}
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
