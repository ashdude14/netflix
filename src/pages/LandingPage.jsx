import axios from 'axios';
import React, { useState, useEffect } from 'react';
import endpoints from '../Services/MovieServices';
import logo from '../assets/Images/logo1.svg';
import Slider from '../Components/Slider';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const LandingPage = () => {
  const [movie, setMovie] = useState({});

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
    <div className='bg-black h-screen w-full '>
      {/* main banner started*/}
      <div className='relative h-[40%] lg:h-[50%]'>
        <figure>
          <img
            className='px-4 absolute w-[100px] sm:w-[150px] sm:h-[70px]'
            src={logo}
            alt='netflix'
            
          />
        </figure>
        <div className='w-full h-full bg-gradient-to-r from-black '>
          <img
            className='w-full h-full object-cover object-top'
            src={IMAGE_BASE_URL + backdrop_path}
            alt={title}
          />
          <div className='absolute bottom-0 w-full top-[10%] lg:top-[25%] left-0 md:p-8 right-0 text-white p-4'>
            <h1 className='text-white text-3xl md:text-5xl font-bold'>{title}</h1>
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
    </div>
  );
};

export default LandingPage;
