import React, { useState } from 'react'
import {Exproledata} from "../Data/data";

function Explore() {
    const [desc, setDesc] = useState("please select category for more info");
    const [pic, setPic] = useState("");
  const [selected, setSelected] = useState("");

  const info = (e) => {
    let categ = e.currentTarget.innerText;
    setSelected(categ);
    Exproledata.forEach((para) => {
      let check = categ.includes(para.title);
      if (check === true) {
        setDesc(para.desc);
        setPic(para.pic);
      }
    });
  };
    return (
        <div className='lg:w-7/12 w-11/12 lg:h-1/4 h-1/2 bg-white rounded-lg p-1 lg:-mt-80 lg:-mr-96 '>
            <div className='flex lg:flex-row flex-col  justify-around '>
              <div className='w-full flex lg:flex-col'>
               {Exproledata.map((item, index) => {
           return(
             <span key={index} className="font-bold lg:text-xl text-xs w-1/2 text-center rounded-lg p-1 cursor-pointer hover:text-red-600" style={item.title===selected?{color:"white",background:"red"}:{color:"black"}} onClick={info}>{item.title}</span>
           )
            })}
            </div>
           
            <p className="text-justify w-full text-sm lg:-ml-40  font-semibold justify lg:my-7 my-4">{desc}</p>
            <div className='lg:w-1/3 w-full lg:h-40 h-48 lg: pl-16 lg:pl-0 overflow-hidden'>
              <img src={pic} className='lg:w-44 w-44 lg:h-40 h-40 ' alt="exlpore-icon"/>
             </div>
            </div>
            
        </div>
    )
}

export default Explore
