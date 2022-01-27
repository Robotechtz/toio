import React from 'react'

function About() {
    return (
        <div className="w-full h-screen">
            <div className='w-full h-2/3 bg-red-700 lg:p-10 p-5'>
                <p className='lg:text-lg text-sm text-white'>The future of tomorrow lies in the hands of the people, for which we believe that relevant guidance in ensuring the community is up to par with consistent change in technology. Every co-op is by the people, for the people.</p>
                <p className='lg:text-lg text-sm text-justify text-white'>CO-OPS sectors: Community Development, Education, Health, Agriculture, E-Mobility, Lighting, Entrepreneurship & Digital Marketing, AI/IOT/ML</p>
                <div className='w-full grid grid-cols-3 lg:p-2 p-1 lg:pt-20 pt-10'>
                    <div >
                        <h1 className='text-black lg:text-7xl text-xl font-bold text-center'>2000+</h1>
                        <h1 className='text-white lg:text-lg text-sm text-center'>People reached</h1>
                    </div>
                    <div >
                        <h1 className='text-black lg:text-7xl text-xl font-bold text-center'>12</h1>
                        <h1 className='text-white lg:text-lg text-sm text-center'>Prototype built</h1>
                    </div>
                     <div >
                        <h1 className='text-black lg:text-7xl text-xl font-bold text-center'>5</h1>
                        <h1 className='text-white lg:text-lg text-sm text-center'>CO-OP's under develpoment</h1>
                    </div>
                </div>
            </div>
            
            <div className="grid h-1/3 grid-cols-2 w-full lg:pl-32 ">
                 <iframe
            className="lg:w-9/12 lg:h-72 h-full w-full px-1 lg:-mt-7"
            title="Toio Intro"
            src="https://www.youtube.com/embed/b3NQcCBm0x4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
           <iframe
            className="lg:w-9/12 lg:h-72 h-full w-full px-1 lg:-mt-7"
            title="Project students"
            src="https://www.youtube.com/embed/gcAA-3AwQD4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
            </div>

        </div>
    )
}

export default About
