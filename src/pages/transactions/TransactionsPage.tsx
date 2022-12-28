import React, { useState } from "react";
import Pulse from "../../assets/Pulse";
import ModalTransaction from "./ModalTransaction";
import TransactionTableComponent from "./TransactionsTable";
import { useGetTransactionsQuery } from "../../services/transactionsApi";

function TransactionsPage() {
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const {
    data: listTransactions,
    isLoading,
    isSuccess,
  } = useGetTransactionsQuery();
  console.log(listTransactions);
  
  const [filter, setFilter] = useState({
    doFilter: false,
    floor: 0,
    status: "",
  });

  const handleOnChangeFilter = (e: any) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleFilter = (e: any) => {
    e.preventDefault();
    setFilter({ ...filter, doFilter: true });
  };

  return (
    <>
      {showTransactionModal && (
        <ModalTransaction 
        setShowTransactionModal={setShowTransactionModal}
         />
      )}

      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen  bg-white flex ">
          <div className="w-full px-20 my-10">
            <div className="flex justify-between my-2">
              <div className="border p-2 rounded-lg">
                <h4 className="text-center font-bold">
                  Filter Data Transaction
                </h4>
                <form
                  className=" grid grid-cols-3 gap-2"
                  onSubmit={handleFilter}
                >
                  <div>
                    <label className="text-gray-800 text-sm font-bold">
                      Floor
                    </label>
                    <input
                      name="floor"
                      type="number"
                      className=" text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-500 rounded border"
                      placeholder="Ex: 10"
                      onChange={handleOnChangeFilter}
                    />
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm font-bold">
                      Status
                    </label>
                    <select
                      name="status"
                      value={filter.status}
                      onChange={handleOnChangeFilter}
                      className="p-2 w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                    >
                      <option>Choose</option>
                      <option value="available">Available</option>
                      <option value="unavailable">Unavailable</option>
                      <option value="rented">Rented</option>
                      <option value="sold">Sold</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="bg-rose-400 py-2 px-4 rounded-lg text-white hover:bg-rose-500 self-end"
                  >
                    Filter Data
                  </button>
                </form>
              </div>

              {/* <form className="w-1/3 self-end">
                <label
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                  for="default-search"
                >
                  Search
                </label>
                <div>
                  <input
                    className="block py-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    type="search"
                    id="default-search"
                    placeholder="Search Name"
                    required
                  />
                  <button
                    className="text-white absolute right-1 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form> */}
            </div>
            <div className="text-right my-3">
              <button
                onClick={() => setShowTransactionModal(true)}
                className="py-3 px-8  bg-[#2469a5] hover:bg-blue-500 font-bold text-md rounded-md text-white drop-shadow-3xl self-end"
              >
                Add Transaction
              </button>
            </div>

            {isLoading && <Pulse />}
            {isSuccess && listTransactions && (
              <div className="bg-white shadow-md rounded">
                <TransactionTableComponent transactions={listTransactions} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionsPage;
