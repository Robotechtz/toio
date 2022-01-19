import React from 'react'
import { Servicedata } from '../Data/data'

function Service() {
    return (
        <div className='w-full h-screen bg-white '>
            <div className='w-full grid place-items-center py-10'>
                 <h1 className='lg:text-5xl text-lg lowercase font-bold'>Improve your<span className='text-red-700 uppercase lg:mx-3 mx-1'>experience</span>with us</h1>
                 <h1 className='lg:text-5xl text-3xl capitalize text-red-700 mt-8 font-bold'>our services</h1>
            </div>
            <div className='w-full lg:h-1/2 h-screen overflow-y-auto  bg-red-700 lg:flex lg:p-2 p-1 items-center justify-center'>

                {Servicedata.map((item, index) => {
                    return(
                        <div className="grid place-items-center px-1" key={index}>

                          
                           <div className='w-36 h-40  overflow-hidden'>
                                <img src={item.pic} alt="service"/>
                           </div>
                            <h1 className='text-lg text-black font-bold capitalize'>{item.title}</h1>
                            <p className='text-sm text-white  text-center capitalize'>{item.desc}</p>
                            </div>
                    )
                })}
            </div>
           
        </div>
    )
}

export default Service
