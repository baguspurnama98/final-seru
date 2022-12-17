import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "reactjs-popup";
import { getUnits } from "../../home/Slice";
import ModalUnit from "./ModalUnit";

function UnitPage() {
  const [showModal, setShowModal] = useState(false);
  // const { userLogged } = useSelector((store) => store.users);
  // const dispatch = useDispatch();
  // dispatch(getUnits(userLogged.token)).then((res) => {
  //   console.log(res);
  // });

  const [units] = useState([
    {
      id: 1,
      floor: "10",
      unit: "10AA",
      status: "sold",
      price: "IDR 500.000.000",
      rentalPrice: "IDR 5.000.00",
      rentalSchema: "monthly",
      details: "Rooms: 3",
      resident: "Paijo Sukirman",
      actions: "manage",
    },
    {
      id: 2,
      floor: "10",
      unit: "10AB",
      status: "rented",
      price: "IDR 450.000.000",
      rentalPrice: "IDR 4.500.00",
      rentalSchema: "monthly",
      details: "Rooms: 3",
      resident: "Tukiyem Markonah",
      actions: "manage",
    },
    {
      id: 3,
      floor: "10",
      unit: "10AC",
      status: "available",
      price: "IDR 550.000.000",
      rentalPrice: "IDR 5.500.00",
      rentalSchema: "weekly",
      details: "Rooms: 3",
      resident: "-",
      actions: "manage",
    },
  ]);

  return (
    <>
      {showModal && <ModalUnit setShowModal={setShowModal} />}
      <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen  flex  bg-white font-sans">
          <div class="w-full px-20 my-10">
            <div className="flex justify-end my-2">
              <button
                onClick={() => setShowModal(true)}
                className="py-4 px-8  bg-blue-700 hover:bg-blue-500 font-bold text-md rounded-md text-white drop-shadow-3xl"
              >
                Add Unit
              </button>
            </div>
            <div class="bg-white shadow-md rounded ">
              <table class="min-w-max w-full table-auto">
                <thead>
                  <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-2 px-2 w-2.5 text-center">#</th>
                    <th class="py-2 px-2 w-10 text-center">Floor</th>
                    <th class="py-2 px-2 w-10 text-center">Unit</th>
                    <th class="py-2 px-2 w-10 text-center">Status</th>
                    <th class="py-2 px-2 w-10 text-center">Price</th>
                    <th class="py-2 px-2 w-10 text-center">Rental Price</th>
                    <th class="py-2 px-2 w-10 text-center">Rental Schema</th>
                    <th class="py-2 px-2 w-10 text-center">Details</th>
                    <th class="py-2 px-2 w-10 text-center">Resident</th>
                    <th class="py-2 px-2 w-10 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody class="text-gray-600 text-sm font-reguler">
                  {units.map((units, idx) => (
                    <tr
                      key={idx}
                      class="border-b border-gray-200 hover:bg-white"
                    >
                      <td class="py-3 px-3 text-center">{units.id}</td>
                      <td class="py-3 px-3 text-center">{units.floor}</td>
                      <td class="py-3 px-3 text-center">{units.unit}</td>
                      <td class="py-3 px-3 text-center">{units.status}</td>
                      <td class="py-3 px-3 text-center">{units.price}</td>
                      <td class="py-3 px-3 text-center">{units.rentalPrice}</td>
                      <td class="py-3 px-3 text-center">
                        {units.rentalSchema}
                      </td>
                      <td class="py-3 px-3 text-center">
                        <Popup
                          modal
                          trigger={
                            <button className="py-1 px-8  bg-blue-500 hover:bg-blue-400 font-bold text-md rounded-md text-white drop-shadow-3xl">
                              Details
                            </button>
                          }
                        >
                          tes
                        </Popup>
                      </td>
                      <td class="py-3 px-3 text-center">{units.resident}</td>
                      <td class="py-3 px-3 text-center">
                        <button className="py-1 px-8  bg-blue-500 hover:bg-blue-400 font-bold text-md rounded-md text-white drop-shadow-3xl">
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnitPage;
