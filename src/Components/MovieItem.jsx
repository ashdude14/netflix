import React from 'react';
import { createImageUrl } from '../Services/MovieServices';

const MovieItem = ({ movie }) => {
  const { title, backdrop_path, poster_path } = movie;

  return (
    <div className="relative  w-[240px] sm:w-[280px] md:w-[320px] rounded-lg overflow-hidden cursor-pointer m-2">
      <img
        className="w-full h-40 block object-cover object-top"
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
