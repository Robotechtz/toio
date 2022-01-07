import React from 'react';
import ServiceData from '../Data/ServiceData';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from "react-icons/bs";

function OurServices() {
    return (
        <>
           <div
        className="what grid bg-black p-10 place-items-center h-full -mt-10 "
        id="we-do"
      >
        <h1 className="font-bold tracking-wider text-2xl mb-6">What we do</h1>

        <div className="flex flex-wrap -m-4">
          {ServiceData.map((item, index) => {
            return (
              <div key={index} className="py-6 lg:w-1/3">
                <div className="grid place-items-center h-full lg:bg-transparent bg-gray-400 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative ">
                  <img
                    src={item.img}
                    alt="engineering"
                    className="object-cover  mb-5 "
                  />
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    {item.head}
                  </h1>
                  <p className="leading-relaxed mb-3 text-white">
                    {item.title}
                  </p>
                  <Link to="/about-us">
                  <div
                    className="text-red-600 font-bold inline-flex items-center cursor-pointer"
                    href=""
                  >
                    Learn More
                    <BsArrowRightShort className="w-6 h-6 ml-2" />
                  </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        </>
    )
}

export default OurServices
