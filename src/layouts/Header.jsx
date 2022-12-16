import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/apartments-logo.png";

function Header() {
  const navigate = useNavigate();
  const onHandleLogout = () => {
    sessionStorage.removeItem("isLogin");
    sessionStorage.removeItem("userLogged");
    navigate("/");
  };

  return (
    <>
      <header className="header sticky top-0 bg-[#2469a5] shadow-md flex items-center justify-between px-36 py-2">
        <h1 className="w-3/12">
          <Link to="/" className="flex items-center font-bold text-lg">
            <img src={logo} className="w-12 h-12 my-2 mr-3 " />
            <span className="text-2xl text-white">Mandiri Apartment</span>
          </Link>
        </h1>
        <div className="flex items-center">
          <nav className="nav font-semibold text-lg text-white mr-6">
            <ul className="flex items-ends ">
              <li className="p-4 border-b-2 border-blue-900 border-opacity-0 hover:border-opacity-100 hover:text-gray-200 duration-200 cursor-pointer">
                <Link to="home">
                  <a>Home</a>
                </Link>
              </li>
              <li className="p-4 border-b-2 border-blue-900 border-opacity-0 hover:border-opacity-100 hover:text-gray-200 duration-200 cursor-pointer active">
                <Link to="home">
                  <a>Apartment</a>
                </Link>
              </li>
              <li className="p-4 border-b-2 border-blue-900 border-opacity-0 hover:border-opacity-100 hover:text-gray-200 duration-200 cursor-pointer">
                <Link to="transactions">
                  <a>Transactions</a>
                </Link>
              </li>
            </ul>
          </nav>

          {sessionStorage.getItem("isLogin") && (
            <button
              onClick={onHandleLogout}
              className="bg-white font-semibold text-black  py-1 px-6 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              Logout
            </button>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
