import React,{ useState, useRef } from 'react'
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
    return (
          <div className="fixed z-10 w-full lg:sticky">
      <nav className="h-16 py-1.5 bg-transparent ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="">
                <Link to="/">
                  <img
                    className="w-1/6"
                    src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/robotech%20logo%20PNG-01.png?alt=media&token=790e2204-57a5-445a-b6db-6cfc5114e369"
                    alt="toio"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <Link
                    to="/"
                    className="px-3 py-2 text-sm lg:text-2xl font-medium text-white rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Explore
                  </Link>

                  {/* <Link
                    to="/service"
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Service
                  </Link> */}

                  {/* <Link
                    to="/team"
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Our Team
                  </Link> */}

                  <Link
                    to="/"
                    className="px-3 py-2 text-sm lg:text-2xl font-medium text-white rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-white bg-indigo-900 rounded-md animate-pulse hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="w-screen md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 bg-assure-dark sm:px-3"
              >
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-700"
                >
                  Explore
                </Link>

                {/* <Link
                  to="/service"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Service
                </Link>

                <Link
                  to="/team"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Our Team
                </Link> */}

                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Home
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      {/* <div className="h-1 w-full bg-assure"></div> */}
    </div>
    )
}

export default Navbar
