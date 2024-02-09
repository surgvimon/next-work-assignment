'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { signOutUser } from '@/redux/authReducer';

function TopNav() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [dropdown, setOpenDropdown] = useState(false);
  const { authenticated, currentUser } = useSelector((state:any) => state.auth);
  const handleClick = () => {
    router.push('/signup')
  };
  const handleLogout = () => {
    router.push('/signup')
    setOpenDropdown(false)
    dispatch(signOutUser());
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md z-30">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-3 min-h-[80px]">
        <Link href="/" className="flex items-center">
            <img src="../logo.png" className="h-[50px] rounded-full" alt=" Logo" />
        </Link>
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            {authenticated ? (
              <>
              <div className="relative border-b-4 border-transparent">
                <div className="flex justify-center items-center space-x-3 cursor-pointer" onClick={() => setOpenDropdown(!dropdown)}>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                    <img src="../lisa.png" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="font-semibold dark:text-white text-gray-900 text-lg">
                    <div className="cursor-pointer">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                </div>
                  <div className={`absolute z-50 right-0 w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5 transition ease-out duration-100 ${dropdown ? "transform opacity-100 scale-100" : "transform opacity-0 scale-95"}`}>
                  <ul className="space-y-3 dark:text-white">
                    <li className="font-medium">
                      <Link href="#" className="flex flex-col items-center transform transition-colors duration-200 border-r-4 border-transparent">
                        <div className="w-[64px] h-[64px]">
                          <img src="../lisa.png" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        {currentUser.email}
                      </Link>
                    </li>
                    <hr className="dark:border-gray-700"/>
                    <li className="font-medium">
                      <Link href="#" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:text-[#2A4B6A]">
                        Profile
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link href="#" onClick={handleLogout} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:text-[#2A4B6A]">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
            ) 
            : (
              <>
              <button 
                id="navbar-toggle" 
                data-collapse-toggle="navbar-search" 
                type="button" 
                className="bg-[#2A4B6A] py-3 px-8 text-white font-bold text-sm rounded-full shadow-md" 
                aria-controls="navbar-search" 
                aria-expanded="false"
                onClick={handleClick}
              >
                <span className="sr-only">Open main menu</span>
                  Login
              </button>
            </>
            )}
          </div>
          <button id="navbar-toggle" data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <i className="ri-bar-chart-horizontal-line text-[25px]"></i>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div className="relative mt-3 md:hidden">mobile login button</div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
    </>
  );
}

export default TopNav
