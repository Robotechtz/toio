import React from 'react';
import team from '../Data/Team';
import "./styles/team.css";



function OurTeam() {
    return (
        <>
        <div className="team-section px-12 md:px-32 lg:px-32 ">
        <div className="bg-white  w-full">
        <div className="mb-12">
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold">meet our <span className="text-red-600">TEAM</span></h1>
          </div>
        <div className="grid lg:grid-cols-3">
         {team.map((item, index) => {
           return(
            <div key={index} className=" h-full rounded-lg overflow-hidden  ">
              <div className="bg-white  w-full lg:w-3/4">
              <img
                src={item.img}
                alt="engineering"
                className="object-cover h-full lg:h-60 w-full"
              />
              <p className="text-lg text-black font-bold">
                {item.title}
              </p>
              <p className="text-black mb-6">
                {item.name}
              </p>
              </div>
            </div>
          
           )
         })}
         </div>
         </div>
         </div>
        </>
    )
}

export default OurTeam
