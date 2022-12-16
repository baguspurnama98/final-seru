import React, { useRef, useState } from 'react';
import ModalTransaction from './ModalTransaction';

function TransactionsPage() {
  const [showModal, setShowModal] = useState(false);
  const [transactions] = useState([
    {
      id: 1,
      floor: '10',
      unit: '10AA',
      resident: 'Paijo Sukirman',
      status: 'sold',
      price: 'IDR 500.000.000',
      transactionPrice: 'IDR 550.000.000',
      profit: 'IDR 50.000.000',
      transactionDate: '19-Sep-2022',
      rentalSchema: '-',
      startEndDate: '-',
      billingDate: '-',
    },
    {
      id: 2,
      floor: '10',
      unit: '10AA',
      resident: 'Bagus Purnama',
      status: 'rented',
      price: 'IDR 4.000.000',
      transactionPrice: 'IDR 3.500.000',
      profit: '(IDR 500.000)',
      transactionDate: '20-Sep-2022',
      rentalSchema: 'monthly',
      startEndDate: '20-Sep-2022 / 19-Mar-2022',
      billingDate: '20-Oct-2022',
    },
  ]);

  return (
    <>
      {showModal && <ModalTransaction setShowModal={setShowModal} />}

      <div class='overflow-x-auto'>
        <div class='min-w-screen min-h-screen bg-white flex '>
          <div class='w-full px-20 my-10'>
            <div className='flex justify-end my-2'>
              <button
                onClick={() => setShowModal(true)}
                className='py-4 px-8  bg-[#2469a5]  hover:bg-blue-500 font-bold text-md rounded-md text-white drop-shadow-3xl'
              >
                Add Transaction
              </button>
            </div>
            <div class='bg-white shadow-md rounded '>
              <table class='min-w-max w-full table-auto'>
                <thead>
                  <tr class='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                    <th class='py-2 px-2 w-2.5 text-center'>#</th>
                    <th class='py-2 px-2 w-10 text-center'>Floor</th>
                    <th class='py-2 px-2 w-10 text-center'>Unit</th>
                    <th class='py-2 px-2 w-10 text-center'>Resident</th>
                    <th class='py-2 px-2 w-10 text-center'>Status</th>
                    <th class='py-2 px-2 w-10 text-center'>Price</th>
                    <th class='py-2 px-2 w-10 text-center'>
                      Transaction Price
                    </th>
                    <th class='py-2 px-2 w-10 text-center'>Profit</th>
                    <th class='py-2 px-2 w-10 text-center'>Transaction Date</th>
                    <th class='py-2 px-2 w-10 text-center'>Rental Schema</th>
                    <th class='py-2 px-2 w-10 text-center'>Start/End Date</th>
                    <th class='py-2 px-2 w-10 text-center'>Billing Date</th>
                  </tr>
                </thead>

                <tbody class='text-gray-600 text-sm font-reguler'>
                  {transactions.map((transaction, idx) => (
                    <tr
                      key={idx}
                      class='border-b border-gray-200 hover:bg-white'
                    >
                      <td class='py-3 px-3 text-center'>{transaction.id}</td>

                      <td class='py-3 px-3 text-center'>{transaction.floor}</td>

                      <td class='py-3 px-3 text-center'>{transaction.unit}</td>
                      <td class='py-3 px-3 text-center'>
                        {transaction.resident}
                      </td>
                      <td class='py-3 px-3 text-center'>
                        {transaction.status}
                      </td>
                      <td class='py-3 px-3 text-center'>{transaction.price}</td>
                      <td class='py-3 px-3 text-center'>
                        {transaction.transactionPrice}
                      </td>
                      <td class='py-3 px-3 text-center'>
                        {transaction.profit}
                      </td>
                      <td class='py-3 px-3 text-center'>
                        {transaction.transactionDate}
                      </td>
                      <td class='py-3 px-3 text-center'>
                        {transaction.rentalSchema}
                      </td>
                      <td class='py-3 px-3 text-center'>
                        {transaction.startEndDate}
                      </td>

                      <td class='py-3 px-3 text-center'>
                        {transaction.billingDate}
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
