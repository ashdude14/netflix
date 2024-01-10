import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
    <section className=" w-[100wv]  bg-black border-t-[5px] border-t-slate-700
 text-white sm:py-[50px] py-[70px] ">
     <div className='flex max-w-[1170px] mx-auto px-[15px] item-center justify-between gap-10' > 
  <h1 className='text-white '>Author - Aashish Kumar Singh</h1>
  <h1 className='text-white'> Copyright © {new Date().getFullYear()}. All rights are reserved.</h1>
  <div className=" items-center   ">
       <h4 className='text-white '>let's connect!</h4>
       <h4> LinkedIn</h4>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/aashish-kumar-singh-499241164//"
                  >
                    <FaLinkedin width={32} height={32} />
                  </a>
                 
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/ashdude14"
                  >
                     <h4> GitHub</h4>
                    <FaGithub width={32} height={32} />
                  </a>
        
            </div>
</div>
</section>
</div>
  )
}

export default Footer
