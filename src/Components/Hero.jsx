import React from 'react'

const Hero = () => {
  return (
    <div className=' text-white flex items-center justify-center h-screen w-screen'>
      <h1 className=' font-extralight text-[28px] sm:text-[32px] md:text-[45px] '>Unlimited movies, 
      TV shows and more</h1>
      <p className='text-white text-center justify-center absolute mt-[110px] text-[20px] sm:text-[29px] md:text-[30px]'>
      Watch anywhere. Cancel anytime.
      </p>
      <h3 className='absolute  text-center justify-center mt-[250px] text-[20px] sm:text-[29px] md:text-[30px]'>
      Ready to watch? Enter your email to create or restart your membership.
      </h3>
    </div>
  )
}

export default Hero
