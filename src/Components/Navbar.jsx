import React from 'react'
const bgImg="url('../assets/Images/bg.jpg')"; 
const Navbar = () => {
  return (
   
    <div className="flex text-white items-centre justify-between p-4 z-[100] absolute w-full " >
       <h1 className='text-red-600 text-4xl cursor-pointer'>NETFLIX</h1>
       <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
       </div>
    </div>
  )
}

export default Navbar
