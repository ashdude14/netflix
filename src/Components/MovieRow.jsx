import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import MovieItem from "./MovieItem";
import {MdChevronLeft,MdChevronRight} from "react-icons/md"

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]); // Change from object to array
    const rowId= Math.floor(Math.random()*1000);
  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, [url]);

// slider handler
 const slide = (offset) => {
  const slider= document.getElementById('slider'+rowId);
  slider.scrollLeft=slider.scrollLeft+offset;
 }


  return (
    <div>
      <h2 className='md:text-xl p-4 capitalize text-white text-bold'>{title}</h2>
      <div className="relative  flex item-center group">
      <div className=" hidden sm:block">
        <MdChevronLeft 
          onClick={()=>{slide(-500)}}
        className=" bg-white  rounded-full absolute left-2 opacity-80 text-gray-700 
        z-10 hidden group-hover:block cursor-pointer align-middle mt-20 "  size={40} />
        </div>
      <div id={`slider`+rowId} 
      className="flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
 {movies.map((movie) => (
    <div key={movie.id} className="inline-block">
      <MovieItem movie={movie} />
    </div>
  ))}
</div>
 <div className=" hidden sm:block">
    <MdChevronRight
       onClick={()=>{slide(500)}}
        className=" bg-white  rounded-full absolute right-2 opacity-80 text-gray-700 
        z-10 hidden group-hover:block cursor-pointer align-middle mt-20 " size={40} />
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
