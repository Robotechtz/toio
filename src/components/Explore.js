import React, { useState } from 'react'
import {Exproledata} from "../Data/data";

function Explore() {
    const [desc, setDesc] = useState("please select category for more info");
  const [selected, setSelected] = useState("");

  const info = (e) => {
    let categ = e.currentTarget.innerText;
    setSelected(categ);
    Exproledata.forEach((para) => {
      let check = categ.includes(para.title);
      if (check === true) {
        setDesc(para.desc);
      }
    });
  };
    return (
        <div className='w-11/12 h-1/2 bg-white rounded-lg p-2 '>
            <div className='w-full flex items-center justify-around'>
               {Exproledata.map((item, index) => {
           return(
             <span key={index} className="font-bold text-2xl cursor-pointer hover:text-red-600" style={item.title===selected?{color:"red"}:{color:"black"}} onClick={info}>{item.title}</span>
           )
            })}
            </div>
           
            <p className="text-center w-full text-xl font-semibold justify my-7">{desc}</p>
        </div>
    )
}

export default Explore
