import React from "react";
import Pulse from "../src/assets/Pulse";

function ResidentList(props) {
  const { loading, residents } = props;
  console.log(residents);
  return (
    <div>
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-2 px-2 w-2.5 text-center">#</th>
            <th className="py-2 px-2 w-10 text-center">Full Name</th>
            <th className="py-2 px-2 w-10 text-center">Email</th>
            <th className="py-2 px-2 w-10 text-center">Phone</th>
            <th className="py-2 px-2 w-10 text-center">Marital Status</th>
            <th className="py-2 px-2 w-10 text-center">Dependents</th>
            <th className="py-2 px-2 w-10 text-center">BirthDate</th>
          </tr>
        </thead>

        <tbody className="text-gray-600 text-sm font-reguler">
          {loading && residents.length === 0 && (
            <tr className="border-b border-gray-200 hover:bg-white ">
              <td colSpan={12}>
                <div className="my-3">
                  <Pulse />
                </div>
              </td>
            </tr>
          )}
          {!loading && residents.length === 0 && (
            <tr className="border-b border-gray-200 hover:bg-white ">
              <td colSpan={12}>
                <div className="my-3 text-center text-blue-700 font-bold text-xl">
                  No Data
                </div>
              </td>
            </tr>
          )}
          {residents.map((resident, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-200 hover:bg-gray-100 "
            >
              <td className="py-3 px-3 text-center">{idx + 1}</td>
              <td className="py-3 px-3 text-center">{resident.fullName}</td>
              <td className="py-3 px-3 text-center">{resident.email}</td>
              <td className="py-3 px-3 text-center">{resident.phone}</td>
              <td className="py-3 px-3 text-center uppercase">
                {resident.maritalStatus}
              </td>
              <td className="py-3 px-3 text-center">{resident.dependents}</td>
              <td className="py-3 px-3 text-center">{resident.birthDate}</td>

              {/* <td className='py-3 px-3 text-center'>
                {['sold', 'rented'].includes(unit.status) && '-'}
                {!['sold', 'rented'].includes(unit.status) && (
                  <Link to={`/unit/${unit.id}`}>
                    <button className='py-1 px-2  bg-blue-500 hover:bg-blue-400 font-bold text-md rounded-md text-white drop-shadow-3xl'>
                      Manage
                    </button>
                  </Link>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResidentList;
