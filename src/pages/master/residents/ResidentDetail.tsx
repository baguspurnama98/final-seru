import React from "react";
import { useParams } from "react-router-dom";
import { useGetResidentQuery } from "../../../services/residentsApi";
import { Resident } from "../../../model/resident";
import Pulse from "../../../assets/Pulse";

interface idParams {
  data: Resident;
  isLoading: boolean;
}

export default function ResidentPage() {
  const params = useParams();
  const { data, isLoading } = useGetResidentQuery<idParams>(params.id!);

  return (
    <div>
      {isLoading && !data && (
        <div className="mt-20">
          <Pulse />
        </div>
      )}
      {!isLoading && data && (
        <div className="font-sans h-screen w-full flex flex-row justify-center items-center">
          <div className="card w-96 mx-auto bg-white  shadow-2xl">
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src="https://avatars.githubusercontent.com/u/67946056?v=4"
              alt=""
            />
            <>
              <div className="text-center mt-2 text-3xl font-medium">
                {data.fullName}
              </div>
              <div className="text-center mt-2 font-light text-sm">
                {data.email}
              </div>
              <div className="text-center font-normal text-md">
                {data.phone}
              </div>

              <hr className="mt-8" />
              <div className="flex p-4">
                <div className="w-1/2 text-center">
                  Status:
                  <span className="font-bold"> {data.maritalStatus}</span>
                </div>

                <div className="w-1/2 text-center">
                  Birth Date:{" "}
                  <span className="font-bold">{data.birthDate}</span>
                </div>
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
}
