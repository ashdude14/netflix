import React from 'react';
import Header from './Header';
import video2 from "../assets/Videos/vid2.mp4"
import video1 from "../assets/Videos/vid1.mp4"
//const vid2="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v";
//const vid1="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v";
const tv1="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png";
const tv2="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png";
const mob1="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg";
const down1="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif";
const img2="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png";
const img3="https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d";
const Hero = () => {
  return (<>
  <div className=" bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')] 
    w-[100vw]  bg-no-repeat bg-cover items-center justify-center " >
     <div className=" w-[100vw] bg-[rgba(0,0,0,0.7)]">
    <Header/>
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
          <video className='absolute w-[80%] left-[10%] bottom-[20%] z-[1]' src={video1} autoPlay loop playsInline muted ></video>
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
                <h3 className='text-[white] font-bold'>Stranger Things</h3>
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
     
    <section className=" w-[100wv]  bg-black border-t-[5px] border-t-slate-700
     text-white sm:py-[50px] py-[50px] ">
         <div className=' max-w-[1170px] mx-auto px-[15px]' >  

          <div className=' px-10 grid sm:grid-cols-2 grid-clos-1 items-center'>
           <div className='text-white'>
            <h2 className='sm:text-[50px] text-[40px] font-bold'>Watch everywhere</h2>
            <p className=' pt-[30px] text-[20px] sm:text-[25px]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
             </div>
          <div className=' relative '>
          <video className='absolute w-[60%] left-[20%] bottom-[40%] z-[1]' src={video2} autoPlay loop playsInline muted ></video>
            <img className='relative z-[2]' src={tv2} alt="tv" />
          
          </div>
         </div>
         </div>
        
    </section>
    
    <section className=" w-[100wv]  bg-black border-t-[5px] border-t-slate-700
     text-white sm:py-[50px] py-[70px] ">
         <div className=' max-w-[1170px] mx-auto px-[15px]' >  

          <div className=' px-10 grid sm:grid-cols-2 grid-clos-1 items-center'>
           <figure className=' relative sm:order-1 order-2' >
            <img src={img3} alt="kidImg" />
            
           </figure >
           
           <div className='text-white sm:order-2 order-1'>
            <h2 className='sm:text-[50px] text-[40px] font-bold sm:leading-[65px] leading-[50px]'>Create profiles for kids</h2>
            <p className=' pt-[30px] text-[20px] sm:text-[25px]'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
             </div>
         </div>
         </div>
        
    </section>
 </div>
 </div>
    </>
  );
};

export default Hero;

