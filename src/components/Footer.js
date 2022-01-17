import React from 'react'
import { FaFacebookF,FaRegCopyright,FaInstagram ,FaYoutube ,FaTwitter  } from "react-icons/fa";
 import { MdEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
import "./styles/Footer.css";

function Footer() {
    return (
        <div>
            <div className="footer-top h-screen grid place-items-end">
            <div className="footer bg-white opacity-90 h-1/2 w-full">
            <div className="md:flex lg:flex justify-around items-center py-14 ">
            <div className="fotitle">
            <div className="">
              <img
                className="h-0 w-0 lg:h-32 lg:w-72"
                src="https://firebasestorage.googleapis.com/v0/b/medias-da388.appspot.com/o/toio-media%2Frobotech%20logo%20PNG-02.png?alt=media&token=906020b2-92fe-41f6-a078-47ce2a701506"
                alt="logo"
              />
            </div>
          </div>
          <div className="details font-bold mb-6 text-justify text-lg ">
          <p className="text-black">
              Stay Ahead Of The Changing World. 
              </p>
              <p>Innovated And Motivated Through Technology.</p>
               <div className="font-bold items-center flex text-justify text-lg pt-10">
            <FaRegCopyright/>
            <p className="text-black px-3">
              2021 TOIO, Org
             </p>
          </div>
          </div>
            <div className="contact mb-3"> 
            <ul className="text-black text-lg font-bold text-justify">
              <li className="">info@toio.or.tz</li>
              <li className="">+255 788 961 951</li>
              <li className="">Kalenga Street</li>
              <li className="">Upanga, Dar Es Salaam</li>

            <ul className="text-2xl flex gap-4 ">
            <li className="">
                  <MdEmail />
              </li>
              <li className="">
                  <FaInstagram />
              </li>
              <li className="">
                  <FaFacebookF />
              </li>
              <li className="">
                  <FaTwitter />
              </li>
              <li className="">
                  <FaYoutube />
              </li>
             
            </ul> 
            
            </ul> 
           </div>
           </div>

          

            </div>

            </div>
         
          
        </div>
    )
}

export default Footer
