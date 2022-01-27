import React, { useState }  from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./styles/home.css"
import OurTeam from './OurTeam';
import Explore from './Explore';
import Service from './Service';
import About from './About';
import Img from 'react-cool-img';





function Home() {
    const [explore, setExplore] = useState(false)
    return (
        <div className="w-full h-screen top-0">
             <Navbar setExplore={setExplore}/>
            <div className='lg:h-screen mt-0 lg:-mt-16'> <Carousel  autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showArrows={false}>
                <div className='h-screen bg-black '>
                    <Img 
                    placeholder=".\image\1.jpg"
                    src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/IMG_8972%20copy.jpg?alt=media&token=4d9d814c-0d18-443c-956f-6b5002a4a1e4" alt='home' className='opacity-40' />
                    
                </div>
                <div className='h-screen bg-black'>
                    <Img
                    placeholder=".\image\2.jpg"
                    src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/IMG_9003%20copy.jpg?alt=media&token=a58bde25-8da4-4a92-b0e2-14f67016147c" alt="home" className='opacity-40'/>
                    
                </div>
                <div className='h-screen bg-black'>
                    <Img
                    placeholder=".\image\3.jpg"
                    src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/IMG_9004%20copy.jpg?alt=media&token=7c4acdba-2c59-4d5a-9a5b-5802980deb71" alt="home" className='opacity-40'/>
                   
                </div >
                  <div className='h-screen bg-black'>
                    <Img
                    placeholder=".\image\4.jpg"
                    src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/IMG_0040%20copy.jpg?alt=media&token=6f68b029-0bf9-4cff-b0c7-3b5c0f932ccc" alt="home" className='opacity-40'/>
                    
                </div>
            </Carousel></div>
            <div className='z-20 relative h-screen w-full words'>
              {explore?<div className='w-full grid place-items-center -mr-40 h-screen '><Explore/></div>:<>
                   <div className='w-full h-screen grid place-items-center  words'>
        <span className="font-bold lg:text-9xl text-4xl text-white capitalize">Innovation</span>
           </div>
           <div className='flex items-center justify-center '>
        <span className='lg:h-16 lg:w-32 h-8 w-16 bg-red-600 rounded-sm block mx-3'></span>
        <p className='lg:text-2xl text-sm text-white font-bold justify capitalize block lg:w-2/5 w-3/5'>We focus towards technology innovation for the youth community</p>
           </div>
           </>}  
            </div>
        <Service/>
           <OurTeam/>
           <About/>
            <Footer/>
        </div>
    )
}

export default Home
