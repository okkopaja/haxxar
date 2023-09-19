import React from 'react'

function Landing() {
  return (
    <>
    <div>
        <div className='h-screen bg-gradient-to-br from-green-500 via-orange-400 to-purple-700'>
            <div className='h-20'></div>
         <div className=' p-10 flex flex-col space-y-20'>
          <div className='flex flex-col font-bold text-5xl'>
             <h1>
                SAME CURRICULUM 
             </h1>
             <h1 className='bg-gradient-to-r from-rose-700 via-blue-500 to-indigo-800 inline-block text-transparent bg-clip-text'>
             
                NEW APPROACH
             </h1>          
           </div>
           <div className='text-3xl font-nanum'>
            <p>
                ASSESS YOURSELF TODAY ON OUR
            </p>
            <p>
                CUTTING EDGE ARTIFICIAL INTELLIGENCE
            </p>
            <p>
                BASED ADAPTIVE TESTS.
            </p>
           </div>
           <div>
            <button className='h-14 w-40 rounded-lg bg-gradient-to-l from-rose-600 to-black font-bold font-nanum text-xl text-white hover:bg-gradient-to-tr  hover:to-rose-600 hover:scale-105 '>
                Get Started
            </button>
           </div>
         </div>
        </div>
    </div>
    </>
  )
}

export default Landing

