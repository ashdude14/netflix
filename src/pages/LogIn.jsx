import React from 'react'
import Header from '../Components/Header'
import logo from "../assets/Images/logo1.svg";
import Footer from '../Components/Footer';
import LoginForm from '../Components/LoginForm';
const LogIn  = () => {

  return (
    <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')] 
    w-[100vw] h-[100vh] bg-no-repeat bg-cover   bg-[rgba(0,0,0,0.7) " >
       <div className=' px-[15px]'>
        <figure>
          <img className="absolute w-[100px] sm:w-[150px] sm:h-[70px]" src={logo} alt="netflix" />
        </figure>
      </div>
     <div className="    w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] flex flex-col justify-end">
      
         <div>
          <LoginForm/>
          </div>
         <div>
       <Footer/>
       </div>
     
    </div>
     </div>
  )
}

export default LogIn
