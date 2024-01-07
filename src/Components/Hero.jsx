import React from 'react';
const vid2="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v";
const vid1="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v";
const tv1="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png";
const mob1="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg";
const down1="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif";
const img2="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png";
const Hero = () => {
  return (<>
    <div className='text-white mx-4 flex flex-col items-center justify-center h-screen'>
      <h1 className='font-extralight text-[28px] sm:text-[32px] md:text-[45px] text-center'>
        Unlimited movies, TV shows and more
      </h1>
      <p className='text-[20px] sm:text-[29px] md:text-[30px] text-center mt-4'>
        Watch anywhere. Cancel anytime.
      </p>
      <h3 className='text-[20px] sm:text-[29px] md:text-[30px] text-center mt-8'>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
         {/* input + button */}
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
    <section className=" w-[100wv]  bg-black border-t-[5px] border-t-slate-700
     text-white sm:py-[50px] py-[50px] ">
         <div className=' max-w-[1170px] mx-auto px-[15px]' >  

          <div className=' px-10 grid sm:grid-cols-2 grid-clos-1 items-center'>
           <div className='text-white'>
            <h2 className='sm:text-[50px] text-[40px] font-bold'>Enjoy your TV</h2>
            <p className=' pt-[30px] text-[20px] sm:text-[25px]'>Watch on smart TVs,
             PlayStation, Xbox, Chromecast,<br/>Apple TV, Blu-ray players and more.</p>
             </div>
          <div className=' relative '>
          <video className='absolute w-[80%] left-[10%] bottom-[20%] z-[1]' src={vid1}></video>
            <img className='relative z-[2]' src={tv1} alt="tv" />
          
          </div>
         </div>
         </div>
        
    </section>

    <section className=" w-[100wv]  bg-black border-t-[5px] border-t-slate-700
     text-white sm:py-[50px] py-[70px] ">
         <div className=' max-w-[1170px] mx-auto px-[15px]' >  

          <div className=' px-10 grid sm:grid-cols-2 grid-clos-1 items-center'>
           <figure className=' relative sm:order-1 order-2' >
            <img src={mob1} alt="mobImg" />
            <div className='sm:w-[60%] w-[80%] absolute sm:left-[20%] left-[10%] bg-black border-[1px] border-[#ccc] bottom-[0px]
            grid grid-cols-[70%_auto] items-center'>
             <div className='grid grid-cols-[25%_auto] p-[10px] gap-[10px] items-center'>
               <img className=""src={img2} alt="" />
               <div className='text-white'>
                <h3 className='text-[white]'>Stranger Things</h3>
                <b className='text-[blue]'>Downloading...</b>
              </div>
             </div>
             <div>
              <img src={down1} alt="download.gif" />
           
             </div>
            </div>
           </figure >
           
           <div className='text-white sm:order-2 order-1'>
            <h2 className='sm:text-[50px] text-[40px] font-bold sm:leading-[65px] leading-[50px]'>Download your shows to watch offline</h2>
            <p className=' pt-[30px] text-[20px] sm:text-[25px]'>Save your favourites easily and always have something to watch.</p>
             </div>
         </div>
         </div>
        
    </section>
    </>
  );
};

export default Hero;

