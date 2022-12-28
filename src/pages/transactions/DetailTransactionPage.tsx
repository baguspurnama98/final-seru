import React from "react";
import { useParams } from "react-router-dom";
import Pulse from "../../assets/Pulse";
import { useGetTransactionQuery } from "../../services/transactionsApi";

interface idParams {
  data: any;
  isLoading: boolean;
}
const DetailTransactionPage: React.FC = () => {
  const params = useParams();
  const { data: detailTransaction, isLoading } =
    useGetTransactionQuery<idParams>(params.id!);

  return (
    <>
      <div className=" text-white bg-main-color">
        <div className="w-full px-20 my-10">
          {isLoading && (
            <div className="m-auto">
              <Pulse />
            </div>
          )}
          {!isLoading && detailTransaction && (
            <div className="flex">
              <div className="w-full md:w-6/12 md:mx-2">
                <div className="bg-white p-3 border-t-4 border-blue-700">
                  <div className="image overflow-hidden">
                    <img
                      className="h-auto w-full mx-auto rounded-lg"
                      src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <h1 className="text-gray-900 font-bold text-3xl leading-8 mt-5">
                    Unit {detailTransaction.unit.unitCode}
                  </h1>
                  <div className="p-3 shadow-xl rounded-lg mt-2 flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 text-black "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                      />
                    </svg>
                    <h3 className="text-black font-bold font-lg leading-6">
                      Details Unit
                    </h3>
                  </div>
                  <div className="bg-white shadow-md rounded-sm px-5 pb-5">
                    <div className="text-gray-700">
                      <div className="grid md:grid-cols-2 text-sm gap-2 ">
                        <div className="grid grid-cols-3">
                          <div className="px-1 font-semibold">Floor</div>
                          <div className="col-span-2">
                            : {detailTransaction.unit.floor}
                          </div>
                        </div>
                        <div className="grid grid-cols-3">
                          <div className="px-1 font-semibold ">Furnished</div>
                          <div className="col-span-2">
                            : {detailTransaction.unit.furnished}
                          </div>
                        </div>

                        <div className="grid grid-cols-3">
                          <div className="px-1 font-semibold">Direction</div>
                          <div className="col-span-2">
                            : {detailTransaction.unit.direction}
                          </div>
                        </div>
                        <div className="grid grid-cols-3">
                          <div className="px-1 font-semibold">Balcony</div>
                          <div className="col-span-2">
                            : {detailTransaction.unit.balcony}
                          </div>
                        </div>
                        <div className="grid grid-cols-3">
                          <div className="px-1 font-semibold">Rooms</div>
                          <div className="col-span-2">
                            : {detailTransaction.unit.rooms}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-4"></div>
              </div>

              <div className="w-full md:w-8/12 mx-2 h-64 pt-5">
                <div className="bg-white p-3 shadow-md rounded-sm">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide text-black font-bold font-lg">
                      About Resident
                    </span>
                  </div>
                  <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm px-5 gap-2">
                      <div className="grid grid-cols-3">
                        <div className="px-2 font-semibold truncatea">
                          Full Name
                        </div>
                        <div className="col-span-2">
                          : {detailTransaction.resident.fullName}
                        </div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="px-2 font-semibold">Email</div>
                        <div className="col-span-2 truncate">
                          : {detailTransaction.resident.email}
                        </div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="px-2 font-semibold">Phone</div>
                        <div className="col-span-2">
                          : {detailTransaction.resident.phone}
                        </div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="px-2 font-semibold">Status</div>
                        <div className="col-span-2">
                          : {detailTransaction.resident.maritalStatus}
                        </div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="px-2 font-semibold">Dependent</div>
                        <div className="col-span-2">
                          : {detailTransaction.resident.dependents}
                        </div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="px-2 font-semibold">Birthday</div>
                        <div className="col-span-2">
                          : {detailTransaction.resident.birthDate}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-4"></div>

                <div className="bg-white p-3 shadow-md rounded-sm">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide text-black font-bold font-lg text-bold">
                          Details Transaction:
                        </span>
                      </div>
                      <ul className="list-inside space-y-2 text-gray-800 text-sm">
                        <li>
                          Transaction Data : {detailTransaction.transactionDate}
                        </li>
                        <li>Price : {detailTransaction.price}</li>
                        <li>Schema : {detailTransaction.schema}</li>
                        <li>Billing Data : {detailTransaction.billingDate}</li>
                        <li>Start Data : {detailTransaction.rentStartDate}</li>
                        <li>End Data : {detailTransaction.rentEndDate}</li>
                        <li>Period : {detailTransaction.period}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default DetailTransactionPage;
