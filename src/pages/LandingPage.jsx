import axios from 'axios';
import React, {useState,useEffect}from 'react'
import endpoints from "../Services/MovieServices"
const LandingPage = () => {
    const [movies,setMovies]=useState({});
    useEffect(()=>{
        axios.get(endpoints.popular).then((res)=>{
          const movie=res.data.results;
          const randomMovie = movie[Math.floor(Math.random() * movie.length)];
         setMovies(randomMovie);
        });
    },[]);

    if(!movies)
    {
        return(
            <>
            <p>fetching more...</p>
            </>
        )
    }
const {title, backdrop_path, release_date, overview}=movies;

  return (
    <div className='text-red-900  text-[56px]'>
        <h1>{title}</h1> 
    </div>
  )
}


export default LandingPage;
