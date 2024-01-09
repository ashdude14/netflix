import React, { useEffect, useRef, useState } from 'react'

const FAQs = () => {
     const [click,setClick]=useState(false);
    
   function handleClick()
    {
        console.log(`clicked ${click} `);
        setClick(!click);
    }
   
       
    
  return (
       
    <div>
        <section className=" w-[100wv]  bg-black border-t-[5px] border-t-slate-700
     text-white sm:py-[50px] py-[70px] ">
         <div className=' max-w-[1170px] mx-auto px-[15px]' > 
      <h1 className='text-white  text-center  sm:text-[50px] 
      text-[40px] font-bold sm:leading-[65px] leading-[50px] py-4'>Frequently Asked Questions</h1>
      <div className='bg-[#2d2d2d] mb-[20px]'>
        <div className=' faqQs relative text-white text-[30px] p-[20px] border-[2px] border-black 
        hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer 'onClick={handleClick} > <h3>What is Netflix?</h3>
          <span className=' absolute right-[20px] top-[10px] text-[40px] align-middle'>
          {click ? 'x' : '+'}
            </span> 
        </div>
  
    
      <div className={` ${click ? 'p-[20px] duration-200' : ' text-[20px] scale-y-0 h-0 origin-top '} `}>
          <h3>
            <p>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
</p> <p>
You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            </p>
          </h3>
      </div>
   
    </div>
    </div>
    </section>
    </div>
  )
}

export default FAQs
