import React from "react";
import { Team } from "../Data/data";
import "./styles/team.css";

function OurTeam() {
  return (
    <div className="h-screen overflow-auto mt-48  lg:mt-0 ">
      <div className="bg-white  w-full">
        <div className="w-full grid place-items-center lg:py-10">
          <h1 className="text-xl md:text-4xl lg:text-4xl font-bold">
            meet our <span className="text-red-600">TEAM</span>
          </h1>
        </div>
        <div className="grid lg:grid-cols-4  ">
          {Team.map((item, index) => {
            return (
              <div key={index} className=" h-full rounded-lg pl-7 ">
                <div className="bg-white w-3/4 ">
                  <img
                    src={item.img}
                    alt="engineering"
                    className="object-cover h-full lg:h-60 rounded-lg"
                  />
                  <p className="text-lg text-black text-center font-bold">
                    {item.title}
                  </p>
                  <p className="text-black mb-6 text-center">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
