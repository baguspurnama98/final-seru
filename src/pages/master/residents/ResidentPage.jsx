import React from 'react';

function ResidentPage(props) {
  return (
    <div>
      <div
        // onSubmit={handleSubmitForm}
        className='py-20  bg-gray-700 bg-opacity-80 opacity-100 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
        id='modal'
      >
        <div
          role='alert'
          className='container mx-auto w-11/12 md:w-2/3 max-w-lg opacity-100'
        >
          <div className='relative py-5 px-5 md:px-10 bg-white shadow-md rounded border border-blue-400'>
            <h1 className='text-gray-800 font-lg font-bold tracking-normal text-center leading-tight mb-4'>
              Resident Details
            </h1>

            <h1 className='text-gray-800 text-md font-bold leading-tight tracking-normal'>
              Full Name:
            </h1>
            <div className='relative mb-3 mt-1 text-gray-600'>Febi</div>

            <h1 className='text-gray-800 text-md font-bold leading-tight tracking-normal'>
              Email:
            </h1>
            <div className='relative mb-3 mt-1 text-gray-600 '>Email</div>

            <h1 className='text-gray-800 text-md font-bold leading-tight tracking-normal'>
              Phone:
            </h1>
            <div className='relative mb-3 mt-1 text-gray-600 '>000000</div>

            <h1 className='text-gray-800 text-md font-bold leading-tight tracking-normal'>
              Marital Status:
            </h1>
            <div className='relative mb-3 mt-1 text-gray-600 '>Single</div>

            <h1 className='text-gray-800 text-md font-bold leading-tight tracking-normal'>
              Dependents:
            </h1>
            <div className='relative mb-3 mt-1 text-gray-600 '>Single</div>

            <h1 className='text-gray-800 text-md font-bold leading-tight tracking-normal'>
              Birth Date:
            </h1>
            <div className='relative mb-3 mt-1 text-gray-600 '>xx-xx-xxxx</div>

            <button
              className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600'
              onClick={() => props.setShowResidentModal(false)}
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
      </div>
    </div>
  );
}

export default ResidentPage;
