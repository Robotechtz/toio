import React from 'react'

function About() {
    return (
        <div className="w-full h-screen">
            <div className='w-full h-1/2 bg-red-700 p-10'>
                <p className='text-lg text-white'>The future of tomorrow lies in the hands of the people, for which we believe that relevant guidance in ensuring the community is up to par with consistent change in technology. Every co-op is by the people, for the people.</p>
                <p className='text-lg text-white'>CO-OPS sectors: Community Development, Education, Health, Agriculture, E-Mobility, Lighting, Entrepreneurship & Digital Marketing, AI/IOT/ML</p>
                <div className='w-full grid grid-cols-3 p-2 pt-10'>
                    <div >
                        <h1 className='text-black text-7xl font-bold text-center'>2000+</h1>
                        <h1 className='text-white text-lg text-center'>People reached</h1>
                    </div>
                    <div >
                        <h1 className='text-black text-7xl font-bold text-center'>12</h1>
                        <h1 className='text-white text-lg text-center'>Prototype built</h1>
                    </div>
                     <div >
                        <h1 className='text-black text-7xl font-bold text-center'>5</h1>
                        <h1 className='text-white text-lg text-center'>CO-OP's under develpoment</h1>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-2 w-full pl-32 ">
                 <iframe
            className="lg:w-9/12 lg:h-72 w-full -mt-7"
            title="Toio Intro"
            src="https://www.youtube.com/embed/b3NQcCBm0x4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
           <iframe
            className="lg:w-9/12 lg:h-72 w-full -mt-7"
            title="Project students"
            src="https://www.youtube.com/embed/gcAA-3AwQD4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
            </div>

        </div>
    )
}

export default About
