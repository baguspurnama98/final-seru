import React, { useState } from "react";
import ModalResident from "./ModalResident";
import Pulse from "../../../assets/Pulse";
import ResidentsTableComponent from "./ResidentsTable";
import { useGetResidentsQuery } from "../../../services/residentsApi";

export default function ResidentsPage() {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, isSuccess } = useGetResidentsQuery();

  return (
    <>
      {showModal && <ModalResident setShowModal={setShowModal} />}
      <div className="w-full px-10 my-10">
        <div className="flex justify-between">
          <h1 className="text-bold font-bold text-xl my-7">Resident List</h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            className="py-3 px-8  bg-blue-700 hover:bg-blue-500 font-bold text-md rounded-md text-white drop-shadow-3xl self-center"
          >
            Add Resident
          </button>
        </div>

        {isLoading && <Pulse />}
        {isSuccess && data && (
          <div className="bg-white shadow-md">
            <ResidentsTableComponent units={data} />
          </div>
        )}
      </div>
    </>
  );
}
