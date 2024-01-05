import React from 'react';
import { MdOutlineTranslate } from "react-icons/md";
import logo from "../assets/Images/logo1.svg";

const Header = () => {
  return (
    <div className='max-w-[1170px] mx-auto p-6 sm:px-[5px]'>
      <div className='grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px]'>
        <figure>
          <img className="w-[100px] sm:w-[150px] sm:h-[70px]" src={logo} alt="netflix" />
        </figure>
        <div className='flex justify-end gap-6 sm:gap-[20px]'>
          <div className='relative '>
          <MdOutlineTranslate className='absolute mt-1 ml-1 ' style={{ color: 'white', fontSize: '24px' }} />
            <select id='language' className='h-[30px] w-[50px] sm:w-[100px] text-white bg-black border-2 rounded-[5px] border-[white] p-[2px_2px_0px_22px]'>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <button className='bg-red-700 text-white rounded-[5px] h-[30px] w-[100px]'>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
