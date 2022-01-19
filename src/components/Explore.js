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
        <div className='w-7/12 h-1/4 bg-white rounded-lg p-1 -mt-80 -mr-96 '>
            <div className='flex  justify-around '>
              <div className='w-full flex flex-col'>
               {Exproledata.map((item, index) => {
           return(
             <span key={index} className="font-bold text-xl w-1/2 text-center rounded-lg p-1 cursor-pointer hover:text-red-600" style={item.title===selected?{color:"white",background:"red"}:{color:"black"}} onClick={info}>{item.title}</span>
           )
            })}
            </div>
           
            <p className="text-justify w-full text-sm -ml-40  font-semibold justify my-7">{desc}</p>
            <div className='w-48 h-52 mt-5  overflow-hidden'>
              <img src={pic} alt="exlpore-icon"/>
             </div>
            </div>
            
        </div>
    )
}

export default Explore
