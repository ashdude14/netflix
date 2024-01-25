import axios from 'axios';
import React, { useState, useEffect } from 'react';
import endpoints, { createImageUrl } from '../Services/MovieServices';
import logo from '../assets/Images/logo1.svg';
import MovieRow from '../Components/MovieRow';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const [movie, setMovie] = useState({});
 const {logOut} =UserAuth();
  const navigate=useNavigate();

  const outHandler= async () =>{
    try {
      await logOut();
      navigate('/');
    }
    catch(err) {console.log(err);}
  }

  useEffect(() => {
    axios.get(endpoints.popular).then((res) => {
      const movies = res.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    });
  }, []);

  if (!movie || !movie.title) {
    return <p>Fetching more...</p>;
  }
 
  const truncate=(str,length)=>{
    if(!str) return " ";
    
    return str.length>length ? str.slice(0,length) + "..." : str;

  }
  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className='bg-black h-screen w-full  '>
      {/* main banner started*/}
      <div className=' h-[40%] lg:h-[50%]  '>
   
        <div className=' flex absolute'>
            <div className='flex items-center'>
            <img
            className='mx-4 w-[100px] sm:w-[150px] p-4 sm:h-[70px]'
            src={logo}
            alt='netflix'
            />
             </div>
            <div className='ml-auto'>
          <button className='bg-red-500 text-sm md:text-xl 
           p-2 h-[40px] mt-2 sm:h-[50px]  text-white rounded-sm ' onClick={outHandler}>Log out</button>
          </div>
        </div>
        
           {/*  <button className='bg-red-500 text-sm md:text-xl p-2 text-white rounded-sm mr-4 mt-4 ' onClick={outHandler}>Log out</button>*/}
     
      
        <div className='w-full h-full bg-gradient-to-r from-black a'>
          <img
            className='w-full h-full object-cover object-top'
            src={createImageUrl(backdrop_path,"original")}
            alt={title}
          />
          <div className='absolute bottom-0 w-full top-[10%] lg:top-[25%] left-0 md:p-8 right-0 text-white p-4'>
            <h1 className='text-white text-3xl md:text-5xl font-bold '>{title}</h1>
            <div className='mt-8 mb-4'>
              <button className='capitalize border bg-gray-300 py-2 px-5 text-black '>
               play
              </button>
              <button className='capitalize border border-gray-300 py-2 px-5 ml-4'>
               watch later 
              </button>
              <div>
                <p className="text-gray-400 text-sm ">{release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncate(overview,170)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>-
      {/* main banner ended*/}
      <div className="">
      <MovieRow title="upcoming" url={endpoints.upcoming}/>
      <MovieRow title="trending" url={endpoints.trending}/>
      <MovieRow title="top rated" url={endpoints.topRated}/>
      <MovieRow title="popular" url={endpoints.popular}/>
      </div>
    </div>
  );
};

export default LandingPage;
