import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../assets/Spinner";
import { saveResident } from "../../../stores/master/resident-slice";
import { Resident } from "../../../stores/master/residents-model";

function ModalResident(props) {
  const [formResident, setFormResident] = useState(new Resident());
  const dispatch = useDispatch();
  const { residents } = useSelector((store) => store.residents);
  const handleOnChangeResident = (e) => {
    setFormResident({
      ...formResident,
      [e.target.name]: e.target.value,
    });
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    formResident["maritalStatus"] = formResident.maritalStatus || "single";

    dispatch(saveResident(formResident)).then(() => {
      props.setShowModalResident(false);
      props.setRefreshKey(props.refreshKey + 1);
      setLoading(false);
    });
    console.log(formResident);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="py-20  bg-gray-700 bg-opacity-80 opacity-100 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        id="modal"
      >
        <div role="alert" className="container mx-auto w-9/12 md:w-2/6 ">
          <div className="relative py-5 px-5 md:px-10 bg-white shadow-md rounded border border-blue-400">
            <h2 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Resident
            </h2>

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Full Name
            </label>
            <div className="relative mb-1 mt-2">
              <input
                name="fullName"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border"
                placeholder="Enter your full name"
                onChange={handleOnChangeResident}
              />
            </div>

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Email
            </label>
            <div className="relative mb-1 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                name="email"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border"
                placeholder="Enter your email address"
                onChange={handleOnChangeResident}
              />
            </div>

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Phone
            </label>
            <div className="relative mb-1 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                name="phone"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border"
                placeholder="Your phone number"
                onChange={handleOnChangeResident}
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Marital Status
              </label>
              <select
                name="maritalStatus"
                value={formResident.maritalStatus}
                onChange={handleOnChangeResident}
                className=" p-2 text-sm mt-2 mb-4 w-full bg-white rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              >
                <option value="single">Single</option>
                <option value="taken">Taken</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="JONES">JONES</option>
              </select>
            </div>

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Dependents
            </label>
            <div className="relative mb-1 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                name="dependents"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border"
                placeholder="Your dependencies"
                onChange={handleOnChangeResident}
              />
            </div>

            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Birth Date
            </label>
            <div className="relative mb-1 mt-2">
              <div className="absolute text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                name="birthDate"
                type="date"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border"
                placeholder="Your birth date"
                onChange={handleOnChangeResident}
              />
            </div>
            <div className="flex items-center justify-end w-full mt-4 space-x-3">
              <button
                className=" bg-gray-100  border-gray-200 hover:bg-gray-200  transition duration-150 text-gray-800 ease-in-out border rounded px-8 py-2 text-sm "
                onClick={() => props.setShowModalResident(false)}
              >
                Cancel
              </button>
              <button
                className="flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                disabled={!formResident.fullName}
              >
                {loading && <Spinner />}
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalResident;
