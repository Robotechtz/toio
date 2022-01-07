import React  from 'react'
import Navbar from './Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <div className="w-full h-screen top-0">
             <Navbar/>
            <div className='h-screen lg:-mt-16'> <Carousel  autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
                <div className='h-screen '>
                    <img src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/IMG_8972%20copy.jpg?alt=media&token=4d9d814c-0d18-443c-956f-6b5002a4a1e4" alt='home' />
                    
                </div>
                <div className='h-screen'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/IMG_9003%20copy.jpg?alt=media&token=a58bde25-8da4-4a92-b0e2-14f67016147c" alt="home" />
                    
                </div>
                <div className='h-screen'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/IMG_9004%20copy.jpg?alt=media&token=7c4acdba-2c59-4d5a-9a5b-5802980deb71" alt="home" />
                   
                </div >
                  <div className='h-screen'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/robotech-web.appspot.com/o/IMG_0040%20copy.jpg?alt=media&token=6f68b029-0bf9-4cff-b0c7-3b5c0f932ccc" alt="home" />
                    
                </div>
            </Carousel></div>
           <div className='w-full h-screen grid place-items-center z-20 relative -mt-96'>
        <span className="font-bold text-9xl text-black capitalize">Innovation</span>
           </div>
            
        </div>
    )
}

export default Home