import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userSlice from '../../stores/auth/auth-slice';
import transactionSlice, {
  fetchTransactions,
} from '../../stores/transaction/transaction-slice';
import ResidentPage from '../master/residents/ResidentPage';
import ModalTransaction from './ModalTransaction';

function TransactionsPage() {
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [showResidentModal, setShowResidentModal] = useState(false);
  const { userLogged } = useSelector((store) => store[userSlice.name]);
  const { transactions } = useSelector((store) => store[transactionSlice.name]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions(userLogged.token));
  }, []);

  return (
    <>
      {showTransactionModal && (
        <ModalTransaction setShowTransactionModal={setShowTransactionModal} />
      )}
      {showResidentModal && (
        <ResidentPage setShowResidentModal={setShowResidentModal} />
      )}

      <div className='overflow-x-auto'>
        <div className='min-w-screen min-h-screen bg-white flex '>
          <div className='w-full px-20 my-10'>
            <div className='flex justify-end my-2'>
              <button
                onClick={() => setShowTransactionModal(true)}
                className='py-4 px-8  bg-[#2469a5]  hover:bg-blue-500 font-bold text-md rounded-md text-white drop-shadow-3xl'
              >
                Add Transaction
              </button>
            </div>
            <div className='bg-white shadow-md rounded '>
              <table className='min-w-max w-full table-auto'>
                <thead>
                  <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                    <th className='py-2 px-2 w-2.5 text-center'>#</th>
                    <th className='py-2 px-2 w-10 text-center'>Floor</th>
                    <th className='py-2 px-2 w-10 text-center'>Unit</th>
                    <th className='py-2 px-2 w-10 text-center'>Resident</th>
                    <th className='py-2 px-2 w-10 text-center'>Status</th>
                    <th className='py-2 px-2 w-10 text-center'>Price</th>
                    <th className='py-2 px-2 w-10 text-center'>
                      Transaction Price
                    </th>
                    <th className='py-2 px-2 w-10 text-center'>Profit</th>
                    <th className='py-2 px-2 w-10 text-center'>
                      Transaction Date
                    </th>
                    <th className='py-2 px-2 w-10 text-center'>
                      Rental Schema
                    </th>
                    <th className='py-2 px-2 w-10 text-center'>
                      Start/End Date
                    </th>
                    <th className='py-2 px-2 w-10 text-center'>Billing Date</th>
                    <th className='py-2 px-2 w-10 text-center'>Details</th>
                  </tr>
                </thead>

                <tbody className='text-gray-600 text-sm font-reguler'>
                  {transactions.map((transaction, idx) => (
                    <tr
                      key={idx}
                      className='border-b border-gray-200 hover:bg-white'
                    >
                      <td className='py-3 px-3 text-center'>
                        {transaction.id}
                      </td>

                      <td className='py-3 px-3 text-center'>
                        {transaction.floor}
                      </td>

                      <td className='py-3 px-3 text-center'>
                        {transaction.unit}
                      </td>
                      <td className='py-3 px-3 text-center'>
                        <button
                          className='bg-transparent text-blue-700'
                          onClick={() => setShowResidentModal(true)}
                        >
                          {transaction.resident}
                        </button>
                      </td>
                      <td className='py-3 px-3 text-center'>
                        {transaction.status}
                      </td>
                      <td className='py-3 px-3 text-center'>
                        {transaction.price}
                      </td>
                      <td className='py-3 px-3 text-center'>
                        {transaction.transactionPrice}
                      </td>
                      <td className='py-3 px-3 text-center'>
                        {transaction.profit}
                      </td>
                      <td className='py-3 px-3 text-center'>
                        {transaction.transactionDate}
                      </td>
                      <td className='py-3 px-3 text-center'>
                        {transaction.rentalSchema}
                      </td>
                      <td className='py-3 px-3 text-center'>
                        {transaction.startEndDate}
                      </td>

                      <td className='py-3 px-3 text-center'>
                        {transaction.billingDate}
                      </td>
                      <td className='py-3 px-3 text-center'>
                        <button className='py-1 px-2  bg-gray-400 hover:bg-blue-400 font-bold text-md rounded-md text-white drop-shadow-3xl'>
                          Details
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

export default TransactionsPage;
