import React from "react";
import Pulse from "../../../assets/Pulse";

export default function UnitList(props) {
  const { loading, units, handleDetailClicked } = props;
  return (
    <div>
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-2 px-2 w-2.5 text-center">#</th>
            <th className="py-2 px-2 w-10 text-center">Floor</th>
            <th className="py-2 px-2 w-10 text-center">Unit</th>
            <th className="py-2 px-2 w-10 text-center">Status</th>
            <th className="py-2 px-2 w-10 text-center">Price</th>
            <th className="py-2 px-2 w-10 text-center">Rental Price</th>
            <th className="py-2 px-2 w-10 text-center">Rental Schema</th>
            <th className="py-2 px-2 w-10 text-center">Resident</th>
            <th className="py-2 px-2 w-10 text-center">Details</th>
            <th className="py-2 px-2 w-10 text-center">Actions</th>
          </tr>
        </thead>

        <tbody className="text-gray-600 text-sm font-reguler">
          {loading.current && units.length === 0 && (
            <tr className="border-b border-gray-200 hover:bg-white ">
              <td colSpan={12}>
                <div className="my-3">
                  <Pulse />
                </div>
              </td>
            </tr>
          )}
          {!loading.current && Array.isArray(units) && units.length === 0 && (
            <tr className="border-b border-gray-200 hover:bg-white ">
              <td colSpan={12}>
                <div className="my-3 text-center text-blue-700 font-bold text-xl">
                  No Data
                </div>
              </td>
            </tr>
          )}
          {units.map((unit, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-200 hover:bg-gray-100 "
            >
              <td className="py-3 px-3 text-center">{idx + 1}</td>
              <td className="py-3 px-3 text-center">{unit.floor}</td>
              <td className="py-3 px-3 text-center">{unit.unitCode}</td>
              <td className="py-3 px-3 text-center uppercase">{unit.status}</td>
              <td className="py-3 px-3 text-center">{unit.sellPrice}</td>
              <td className="py-3 px-3 text-center">{unit.rentPrice}</td>
              <td className="py-3 px-3 text-center uppercase">
                {unit.rentSchema}
              </td>
              <td className="py-3 px-3 text-center">
                {unit.status === "available" ? "-" : "resident"}
              </td>
              <td className="py-3 px-3 text-center">
                <button
                  onClick={() => handleDetailClicked(idx)}
                  className="py-1 px-4  bg-green-400 hover:bg-green-500 font-bold text-md rounded-md text-white drop-shadow-3xl"
                >
                  Details
                </button>
              </td>

              <td className="py-3 px-3 text-center">
                <button className="py-1 px-2  bg-blue-500 hover:bg-blue-400 font-bold text-md rounded-md text-white drop-shadow-3xl">
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
