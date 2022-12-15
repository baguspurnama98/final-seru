import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/apartments-logo.png';

function Header() {
  return (
    <>
      <header className='header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02'>
        <h1 className='w-3/12'>
          <a href='' className='flex items-center font-bold text-lg'>
            <img src={logo} className='w-10 h-10 my-2 mr-3' />
            Mandiri Apartment
          </a>
        </h1>

        <nav className='nav font-semibold text-lg'>
          <ul className='flex items-center '>
            <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-700 duration-200 cursor-pointer active'>
              <a href=''>Apartment</a>
            </li>
            <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-700 duration-200 cursor-pointer'>
              <Link to='transactions'>
                <a>Transactions</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className='w-3/12 flex justify-end'>
          <button className='bg-white font-semibold text-black  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700'>
            Logout
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
