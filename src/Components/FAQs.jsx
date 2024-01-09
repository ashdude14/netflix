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
            Netflix is a streaming service that offers a wide variety 
            of award-winning TV shows, movies, anime, documentaries and more – 
            on thousands of internet-connected devices.
         </p> <p>
           You can watch as much as you want, whenever 
           you want, without a single ad – all for one low monthly price. 
           There's always something new to discover, and new TV shows
            and movies are added every week!
            </p>
          </h3>
      </div>
   {/* q2 */}
      <div className=' faqQs relative text-white text-[30px] p-[20px] border-[2px] border-black 
        hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer 'onClick={()=>(setClick(!click))} > <h3>How much does Netflix cost?</h3>
          <span className=' absolute right-[20px] top-[10px] text-[40px] align-middle'>
          {click ? 'x' : '+'}
            </span> 
        </div>
      <div className={` ${click ? 'p-[20px] duration-200' : ' text-[20px] scale-y-0 h-0 origin-top '} `}>
          <h3>
            <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 
            <br/> ₹149 to ₹649 a month. No extra costs, no contracts.
         </p>
          </h3>
      </div>
   
   {/* q 3*/ }
   <div className=' faqQs relative text-white text-[30px] p-[20px] border-[2px] border-black 
        hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer 'onClick={()=>(setClick(!click))} > <h3>Where can I watch?</h3>
          <span className=' absolute right-[20px] top-[10px] text-[40px] align-middle'>
          {click ? 'x' : '+'}
            </span> 
        </div>
      <div className={` ${click ? 'p-[20px] duration-200' : ' text-[20px] scale-y-0 h-0 origin-top '} `}>
          <h3>
            <p>
            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

<br/> You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </p>
          </h3>
      </div>
      
   {/* q 4*/ }
   <div className=' faqQs relative text-white text-[30px] p-[20px] border-[2px] border-black 
        hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer 'onClick={()=>(setClick(!click))} > <h3>How do I cancel?</h3>
          <span className=' absolute right-[20px] top-[10px] text-[40px] align-middle'>
          {click ? 'x' : '+'}
            </span> 
        </div>
      <div className={` ${click ? 'p-[20px] duration-200' : ' text-[20px] scale-y-0 h-0 origin-top '} `}>
          <h3>
            <p>
            Netflix is flexible. There are no annoying contracts and no commitments.
             You can easily cancel your account online in two clicks. 
             There are no cancellation fees – start or stop your account anytime.
            </p>
          </h3>
      </div>

   {/* q 5*/ }
   <div className=' faqQs relative text-white text-[30px] p-[20px] border-[2px] border-black 
        hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer 'onClick={()=>(setClick(!click))} > <h3>What can I watch on Netflix?</h3>
          <span className=' absolute right-[20px] top-[10px] text-[40px] align-middle'>
          {click ? 'x' : '+'}
            </span> 
        </div>
      <div className={` ${click ? 'p-[20px] duration-200' : ' text-[20px] scale-y-0 h-0 origin-top '} `}>
          <h3>
            <p>
          Netflix has an extensive library of feature films, documentaries, TV shows, anime,
           award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </p>
          </h3>
      </div>
     
   {/* q 6*/ }
   <div className=' faqQs relative text-white text-[30px] p-[20px] border-[2px] border-black 
        hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer 'onClick={()=>(setClick(!click))} > <h3> Is Netflix good for kids?</h3>
          <span className=' absolute right-[20px] top-[10px] text-[40px] align-middle'>
          {click ? 'x' : '+'}
            </span> 
        </div>
      <div className={` ${click ? 'p-[20px] duration-200' : ' text-[20px] scale-y-0 h-0 origin-top '} `}>
          <h3>
            <p>
            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental
controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
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
