import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import transactionSlice, {
  fetchTransactions,
} from "../../stores/transaction/transaction-slice";
import ResidentPage from "../master/residents/ResidentPage";
import ModalTransaction from "./ModalTransaction";

function TransactionsPage() {
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [showResidentModal, setShowResidentModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const [filter, setFilter] = useState({
    doFilter: false,
    floor: 0,
    status: "",
  });

  const { transactions } = useSelector((store) => store[transactionSlice.name]);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("rendering");
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleOnChangeFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    console.log(filter);
  };
  console.log(transactions);
  return (
    <>
      {showTransactionModal && (
        <ModalTransaction
          setShowTransactionModal={setShowTransactionModal}
          refreshKey={refreshKey}
          setRefreshKey={setRefreshKey}
        />
      )}
      {showResidentModal && (
        <ResidentPage setShowResidentModal={setShowResidentModal} />
      )}

      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen  bg-white flex ">
          <div className="w-full px-20 my-10">
            <div className="flex justify-between my-2">
              <div className="border p-2 rounded-lg">
                <h4 className="text-center font-bold">Filter Data Form</h4>
                <form
                  className=" grid grid-cols-2 gap-2"
                  onSubmit={handleFilter}
                >
                  <div>
                    <label className="text-gray-800 text-sm font-bold">
                      Floor
                    </label>
                    <select
                      name="floor"
                      onChange={handleOnChangeFilter}
                      value={filter.floor}
                      className="p-2  w-full bg-white  text-sm rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                    >
                      {[...Array(10).keys()].map((item, idx) => (
                        <option key={idx} value={idx + 1}>
                          {item + 1}
                        </option>
                      ))}
                    </select>
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
                      <option value="available">Available</option>
                      <option value="unavailable">Unavailable</option>
                      <option value="rented">Rented</option>
                      <option value="sold">Sold</option>
                    </select>
                  </div>
                  <div></div>

                  <div className="flex justify-end items-center">
                    <button
                      type="submit"
                      className="bg-rose-400 py-2 px-4 rounded-lg text-white hover:bg-rose-500 se"
                    >
                      Filter Data
                    </button>
                  </div>
                </form>
              </div>
              <button
                onClick={() => setShowTransactionModal(true)}
                className="py-3 px-8  bg-[#2469a5]  hover:bg-blue-500 font-bold text-md rounded-md text-white drop-shadow-3xl self-end"
              >
                Add Transaction
              </button>
            </div>
            <div className="bg-white shadow-md rounded ">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-2 px-2 w-2.5 text-center">#</th>
                    <th className="py-2 px-2 w-10 text-center">Floor</th>
                    <th className="py-2 px-2 w-10 text-center">Unit</th>
                    <th className="py-2 px-2 w-10 text-center">Resident</th>
                    <th className="py-2 px-2 w-10 text-center">Status</th>
                    <th className="py-2 px-2 w-10 text-center">Price</th>
                    <th className="py-2 px-2 w-10 text-center">
                      Transaction Price
                    </th>
                    <th className="py-2 px-2 w-10 text-center">Profit</th>
                    <th className="py-2 px-2 w-10 text-center">
                      Transaction Date
                    </th>
                    <th className="py-2 px-2 w-10 text-center">
                      Rental Schema
                    </th>
                    <th className="py-2 px-2 w-10 text-center">
                      Start/End Date
                    </th>
                    <th className="py-2 px-2 w-10 text-center">Billing Date</th>
                    <th className="py-2 px-2 w-10 text-center">Details</th>
                  </tr>
                </thead>

                <tbody className="text-gray-600 text-sm font-reguler">
                  {transactions.map((transaction, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-200 hover:bg-white"
                    >
                      <td className="py-3 px-3 text-center">{idx + 1}</td>

                      <td className="py-3 px-3 text-center">
                        {transaction.unit.floor}
                      </td>

                      <td className="py-3 px-3 text-center">
                        {transaction.unit.unitCode}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <Link to={`/resident/${transaction.resident.id}`}>
                          <button className="bg-transparent hover:text-blue-700">
                            {transaction.resident.fullName}
                          </button>
                        </Link>
                      </td>
                      <td className="py-3 px-3 text-center uppercase">
                        {transaction.unit.status}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {transaction.unit.status === "rented"
                          ? transaction.unit.rentPrice
                          : transaction.unit.sellPrice}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {transaction.price}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {transaction.profit}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {transaction.transactionDate}
                      </td>
                      <td className="py-3 px-3 text-center uppercase">
                        {transaction.unit.rentSchema || "-"}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {transaction.rentStartDate}
                      </td>

                      <td className="py-3 px-3 text-center">
                        {transaction.billingDate}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <Link to={`/transactions/${transaction.id}`}>
                          <button className="py-1 px-2  bg-gray-400 hover:bg-blue-400 font-bold text-md rounded-md text-white drop-shadow-3xl">
                            Details
                          </button>
                        </Link>
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

export default TransactionsPage;
