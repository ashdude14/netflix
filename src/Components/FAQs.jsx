import React, { useEffect, useRef, useState } from 'react'
import {data} from "./data.jsx"
const FAQs = () => {
     const [click,setClick]=useState(null);
    
   const handleClick = (i) =>
    { if(click===i)
       return setClick(null);
      setClick(i);
    }    
  return (   
    <div>
        <section className=" w-[100wv]  bg-black border-t-[5px] border-t-slate-700
     text-white sm:py-[50px] py-[70px] ">
         <div className=' max-w-[1170px] mx-auto px-[15px]' > 
      <h1 className='text-white  text-center  sm:text-[50px] 
      text-[40px] font-bold sm:leading-[65px] leading-[50px] py-4'>Frequently Asked Questions</h1>
   { 
   data.map((item,index)=>(
    <div className='bg-[#2d2d2d] mb-[20px]'>
   <div className=' relative text-white text-[30px] p-[20px] border-[2px] border-black 
   hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer 'onClick={()=>handleClick(index)}  > <h3> {item.quest}</h3>
    <span className=' absolute right-[20px] top-[10px] text-[40px] align-middle'>
          {click === index? 'x' : '+'}
            </span>
            </div>
           <div className={` ${click === index ? 'p-[20px] duration-350' : ' text-[40px] scale-y-0 h-0 origin-top '} `}>
          <h3>
          
            {item.answer}
            
          </h3>
      </div>
      </div>
   ))}

<h3 className='text-[20px] sm:text-[29px] md:text-[30px] text-center mt-[10px]'>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
         <div className="flex max-w-lg gap-2 mx-auto mt-8">
      <input
        type="text"
        id="email"
        name="email"
        className="form-input w-[200px] sm:w-[400px] border
         border-white bg-[transparent] text-white sm:text-[20px]
        text-[15px]  p-2 rounded-l-lg focus:outline-none focus:border-white border-spacing-2"
        placeholder="Email address"
      />
      <button
        type="button"
        className="bg-red-700 h-[50px] w-[200px]
         sm:w-[350px] text-white text-sm font-bold 
         sm:text-[20px]
         rounded-r-md hover:bg-red-800 focus:outline-none 
         focus:shadow-outline-red active:bg-red-900"
      >
        Get Started ≥
      </button>
     </div>
      </div>  
    </section>

    </div>
  )}
export default FAQs
