import React from 'react';

const Hero = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center h-screen'>
      <h1 className='font-extralight text-[28px] sm:text-[32px] md:text-[45px] text-center'>
        Unlimited movies, TV shows and more
      </h1>
      <p className='text-[20px] sm:text-[29px] md:text-[30px] text-center mt-4'>
        Watch anywhere. Cancel anytime.
      </p>
      <h3 className='text-[20px] sm:text-[29px] md:text-[30px] text-center mt-8'>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
    </div>
  );
};

export default Hero;
