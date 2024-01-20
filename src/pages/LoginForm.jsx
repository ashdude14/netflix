import React, { useState } from 'react';
import logo from "../assets/Images/logo1.svg";
import {auth,db } from "../Services/firebase";
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const {user,signUp,logIn} =UserAuth();
  
  const navigate= useNavigate();

  const handleToggleMode = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
      try{
        if(isSignUp){
        await signUp(email,password );
        navigate('/home')}
        else{
          await logIn(email,password);
          navigate('/home');
      }
    }
      catch(err){
        console.log(err);
      }
     
     
      // Reset the form fields
      setEmail('');
      setPassword('');
    
  };
  

  return (
    
  <div className=" bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')] 
  w-[100vw]  bg-no-repeat bg-cover items-center justify-center " >
    <div className='bg-[rgb(0,0,0,0.7)]'>
    <figure>
          <img className="w-[100px] sm:w-[150px] sm:h-[70px] p-4 mx-8 " src={logo} alt="netflix" />
        </figure>
    <div className="flex justify-center items-center h-screen">
      <div className="bg-black/60  p-8 rounded-lg shadow-md w-96">
        <h1 className="text-white text-2xl font-bold mb-6">{isSignUp ? 'Sign Up' : 'Log In'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-white"
              type="email"
              placeholder='email'
              autoComplete='email'
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-white"
              type="password"
              id="password"
              placeholder='password'
              autoComplete='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
            type="submit"
          >
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        <p className="text-white mt-4">
          {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
          <button
            className="text-red-500 ml-1 underline focus:outline-none"
            onClick={handleToggleMode}
          >
            {isSignUp ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
