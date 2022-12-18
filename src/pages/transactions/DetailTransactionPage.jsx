import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { logout } from '../../stores/auth/auth-slice';
import { fetchTransactionsbyId } from '../../stores/transaction/transaction-slice';

function DetailTransactionPage() {
  const { userLogged } = useSelector((store) => store.users);
  const params = useParams();
  const [details, setDetails] = useState([]);

  // console.log(params.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchTransactionsbyId({ token: userLogged.token, id: params.id })
    ).then((res) => setDetails([res.payload]));
  }, [dispatch]);

  console.log(details);

  return (
    <div className=' text-white bg-main-color'>
      {details.map((detail, idx) => (
        <div className='container my-5 p-5'>
          <div className='flex'>
            <div className='w-full md:w-3/12 md:mx-2'>
              <div className='bg-white p-3 border-t-4 border-green-400'>
                <div className='image overflow-hidden'>
                  <img
                    className='h-auto w-full mx-auto'
                    src='https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt=''
                  />
                </div>
                <h1 className='text-gray-900 font-bold text-xl leading-8 mt-3'>
                  Unit {detail.unit.unitCode}
                </h1>
                {/* <h3 className='text-black font-lg text-bold leading-6 mt-2 mb-1'>
                  Details
                </h3>
                <p className='text-sm text-gray-500 hover:text-gray-600 leading-6'>
                  <ul>
                    <li className='list-none'>Floor: {detail.unit.floor}</li>
                    <li>Rooms: {detail.unit.rooms}</li>
                    <li>Direction: {detail.unit.direction}</li>
                    <li>Balcony: {detail.unit.balcony}</li>
                    <li>Furnished: {detail.unit.furnished}</li>
                  </ul>
                </p> */}

                <div className='bg-white p-3 shadow-md rounded-sm'>
                  <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
                    <span className='tracking-wide'>Details</span>
                  </div>
                  <div className='text-gray-700'>
                    <div className='grid md:grid-cols-2 text-sm'>
                      <div className='grid grid-cols-2'>
                        <div className='px-1 py-2 font-semibold'>Floor</div>
                        <div className='py-2'>{detail.unit.floor}</div>
                      </div>
                      <div className='grid grid-cols-2'>
                        <div className='px-4 py-2 font-semibold'>Furnished</div>
                        <div className='px-3 py-2'>{detail.unit.furnished}</div>
                      </div>

                      <div className='grid grid-cols-2'>
                        <div className='px-1 py-2 font-semibold'>Direction</div>
                        <div className='py-2'>{detail.unit.direction}</div>
                      </div>
                      <div className='grid grid-cols-2'>
                        <div className='px-4 py-2 font-semibold'>Balcony</div>
                        <div className='px-3 py-2'>{detail.unit.balcony}</div>
                      </div>
                      <div className='grid grid-cols-2'>
                        <div className='px-1 py-2 font-semibold'>Rooms</div>
                        <div className='py-2'>{detail.unit.rooms}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='my-4'></div>
            </div>

            {/* <!-- Right Side --> */}
            <div className='w-full md:w-9/12 mx-2 h-64'>
              {/* <!-- About Section --> */}
              <div className='bg-white p-3 shadow-md rounded-sm'>
                <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
                  <span clas='text-green-500'>
                    <svg
                      className='h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  </span>
                  <span className='tracking-wide'>About Resident</span>
                </div>
                <div className='text-gray-700'>
                  <div className='grid md:grid-cols-2 text-sm'>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-2 font-semibold'>Full Name</div>
                      <div className='px-4 py-2'>
                        {detail.resident.fullname}
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-2 font-semibold'>Email</div>
                      <div className='px-4 py-2'>{detail.resident.email}</div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-2 font-semibold'>Contact No.</div>
                      <div className='px-4 py-2'>{detail.resident.phone}</div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-2 font-semibold'>
                        Marital Status
                      </div>
                      <div className='px-4 py-2'>
                        {detail.resident.maritalStatus}
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-2 font-semibold'>Dependent</div>
                      <div className='px-4 py-2'>
                        {detail.resident.dependents}
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-2 font-semibold'>Birthday</div>
                      <div className='px-4 py-2'>
                        {detail.resident.birtDate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='my-4'></div>

              {/* <!-- Experience and education --> */}
              <div className='bg-white p-3 shadow-md rounded-sm'>
                <div className='grid grid-cols-2'>
                  <div>
                    <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3'>
                      <span clas='text-green-500'>
                        <svg
                          className='h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                          />
                        </svg>
                      </span>
                      <span className='tracking-wide'>
                        Details Transaction:
                      </span>
                    </div>
                    <ul className='list-inside space-y-2'>
                      <li>
                        <div className='text-teal-600 text-sm'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </div>
                        {/* <div className='text-gray-500 text-xs'>March 2020 - Now</div> */}
                      </li>
                      <li>
                        <div className='text-teal-600 text-sm'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </div>
                        {/* <div className='text-gray-500 text-xs'>March 2020 - Now</div> */}
                      </li>
                      <li>
                        <div className='text-teal-600 text-sm'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </div>
                        {/* <div className='text-gray-500 text-xs'>March 2020 - Now</div> */}
                      </li>
                      <li>
                        <div className='text-teal-600 text-sm'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </div>
                        {/* <div className='text-gray-500 text-xs'>March 2020 - Now</div> */}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailTransactionPage;
