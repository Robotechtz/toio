import React from 'react'
import { Link } from "react-router-dom";

function Navbar({setExplore}) {
   
  const navig = () => {
    setExplore(true)
  }
  const resume = () => {
    setExplore(false)
  }
    return (
          <div className="fixed z-30 w-full lg:sticky">
      <nav className="h-16 py-1.5 bg-transparent ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="">
                <Link to="/">
                  <img
                    className="lg:w-1/6 w-2/5"
                    src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/robotech%20logo%20PNG-01.png?alt=media&token=790e2204-57a5-445a-b6db-6cfc5114e369"
                    alt="toio"
                  />
                </Link>
              </div>
              <div className="md:block flex">
                <div className="flex items-baseline ml-10 space-x-4">
                  <div
                    onClick={navig}
                    className="lg:px-3 px-1 py-2 text-sm lg:text-2xl font-medium text-white rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Explore
                  </div>


                  <div
                    onClick={resume}
                    className="lg:px-3 px-1 py-2 text-sm lg:text-2xl font-medium text-white rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>

        
      </nav>
     
    </div>
    )
}

export default Navbar
