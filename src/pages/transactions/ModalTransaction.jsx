import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveResident,
  fetchResidents,
} from '../../stores/master/resident-slice';
import { Resident } from '../../stores/master/residents-model';
import { getUnits } from '../../stores/master/units-slice';
import { Transaction } from '../../stores/transaction/transaction-model';

function ModalTransaction(props) {
  const [formResident, setFormResident] = useState('' || new Resident());
  const [formTransaction, setFormTransaction] = useState(new Transaction());

  // const [dataSelected, setDataSelected] = useState({
  //   fullname: '',
  //   unitCode: '',
  // });

  const { userLogged } = useSelector((store) => store.users);
  const { units } = useSelector((store) => store.units);
  const { residents } = useSelector((store) => store.residents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnits(userLogged.token));
    dispatch(fetchResidents(userLogged.token));
  }, [dispatch, userLogged.token]);

  // const handleOnChangeDataSelected = (e) => {
  //   setDataSelected({
  //     ...dataSelected,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleOnChangeUnitSelected = (e) => {
  //   setFormTransaction({
  //     ...formTransaction,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   dataSelected['fullname'] = '' || residents[0].fullname;
  //   dataSelected['unitCode'] = '' || units[0].unitCode;

  //   console.log(dataSelected);
  //   // console.log(residents[0].fullname);
  //   // console.log(residents);

  //   // dispatch(saveResident(formResident));
  // };

  const [showRentForm, setShowRentForm] = useState(false);

  const RentForm = () => {
    return (
      <>
        <label
          for='expiry'
          className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
        >
          End Rent
        </label>

        <div className='relative mb-1 mt-2'>
          <input
            id='expiry'
            className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border'
            placeholder='MM/YY'
          />
        </div>
        <label
          for='email2'
          className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
        >
          Card Number
        </label>
        <div className='relative mb-1 mt-2'>
          <div className='absolute text-gray-600 flex items-center px-4 border-r h-full'></div>
          <input
            id='email2'
            className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-blue-300 rounded border'
            placeholder='XXXX - XXXX - XXXX - XXXX'
          />
        </div>
        <label
          for='expiry'
          className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
        >
          Expiry Date
        </label>
        <div className='relative mb-1 mt-2'>
          <div className='absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer'></div>
          <input
            id='expiry'
            className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border'
            placeholder='MM/YY'
          />
        </div>
        <label
          for='cvc'
          className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
        >
          CVC
        </label>
        <div className='relative mb-1 mt-2'>
          <input
            id='cvc'
            className='mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border'
            placeholder='MM/YY'
          />
        </div>
      </>
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => props.handleSubmitForm(e)}
        className='py-20  bg-gray-700 bg-opacity-80 opacity-100 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
        id='modal'
      >
        <div
          role='alert'
          className='container mx-auto w-11/12 md:w-2/3 max-w-lg opacity-100'
        >
          <div className='relative py-5 px-5 md:px-10 bg-white shadow-md rounded border border-blue-400'>
            <div>
              <label className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
                Choose Unit Apartment
              </label>

              <select
                name='unitCode'
                value={units.unitCode}
                onChange={(e) => props.handleOnChangeDataSelected(e)}
                className=' p-2 text-sm mt-2 mb-4 w-full bg-white rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none'
              >
                {units
                  .filter((unit) => unit.status === 'available')
                  .map((unit, idx) => (
                    <option value={unit.unitCode}>{unit.unitCode}</option>
                  ))}
              </select>
            </div>

            <div>
              <label className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
                Choose Resident
              </label>
              <select
                name='fullname'
                value={residents.fullname}
                onChange={(e) => props.handleOnChangeDataSelected(e)}
                className=' p-2 text-sm mt-2 mb-4 w-full bg-white rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none'
              >
                {residents.map((resident, idx) => (
                  <option value={resident.fullname}>{resident.fullname}</option>
                ))}
              </select>
            </div>

            <div>
              <label className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
                Choose Schema
              </label>
              <select
                name='schema'
                // value={formTransaction.schema}
                onChange={(e) => props.handleOnChangeDataSelected(e)}
                className=' p-2 text-sm mt-1 mb-4 w-full bg-white rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none'
              >
                <option value='rent' selected>
                  Rent
                </option>
                <option value='sell'>Sell</option>
              </select>
            </div>

            <label
              for='dependents'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Price
            </label>
            <div className='relative mb-4 mt-2'>
              <div className='absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer'></div>
              <input
                name='dependents'
                value={units.find(
                  (item) => item.unitCode === formTransaction.unitCode
                )}
                type='number'
                className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border'
                onChange={(e) => props.handleOnChangeDataSelected(e)}
              />
            </div>

            <label
              for='date'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Start Date
            </label>
            <div className='relative mb-1 mt-2'>
              <div className='absolute text-gray-600 flex items-center pr-3 h-full cursor-pointer'></div>
              <input
                name='startDate'
                type='date'
                className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border'
                onChange={(e) => props.handleOnChangeDataSelected(e)}
              />
            </div>
            <label
              for='date'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              End Date
            </label>
            <div className='relative mb-1 mt-2'>
              <div className='absolute text-gray-600 flex items-center pr-3 h-full cursor-pointer'></div>
              <input
                name='endDate'
                type='date'
                className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border'
                onChange={(e) => props.handleOnChangeDataSelected(e)}
              />
            </div>
            <label
              for='date'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Billing Date
            </label>
            <div className='relative mb-1 mt-2'>
              <div className='absolute text-gray-600 flex items-center pr-3 h-full cursor-pointer'></div>
              <input
                name='billingDate'
                type='date'
                className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border'
                onChange={(e) => props.handleOnChangeDataSelected(e)}
              />
            </div>
            <br />
            <br />

            {/* <h2 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>
              Transactions
            </h2>
            <label
              for='transactionDate'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Transaction Date
            </label>
            <div className='relative mb-1 mt-2'>
              <input
                name='transactionDate'
                id='transactionDate'
                type='date'
                className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-blue-300 rounded border'
                onChange={handleOnChangeTransaction}
              />
            </div>

            <label
              for='schema'
              className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
            >
              Schema
            </label>

            <div className='flex items-center relative mb-1 mt-2 '>
              <label for='sell' className='text-sm mr-3 flex items-center'>
                <input
                  onChange={handleOnChangeTransaction}
                  type='radio'
                  id='sell'
                  name='radioButton1'
                  className='mr-1 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-4 h-4 flex items-center pl-3 text-sm border-blue-300 rounded border'
                />
                Sell
              </label>

              <label for='rent' className=' ml-2 text-sm flex items-center'>
                <input
                  onChange={handleOnChangeTransaction}
                  type='radio'
                  id='rent'
                  name='radioButton1'
                  className=' mr-1 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-4 h-4 flex items-center pl-3 text-sm border-blue-300 rounded border'
                />
                Rent
              </label>
            </div>
            {formTransaction.status === 'rent' && <RentForm />} */}

            <div className='flex items-center justify-end w-full'>
              <button
                type='submit'
                className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'
              >
                Submit
              </button>
              <button
                className='focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-blue-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
                onClick={() => props.setShowTransactionModal(false)}
                aria-label='close modal'
                role='button'
              >
                Cancel
              </button>
            </div>

            <button
              className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600'
              onClick={() => props.setShowTransactionModal(false)}
              aria-label='close modal'
              role='button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-x'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                stroke-width='2.5'
                stroke='currentColor'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' />
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalTransaction;
