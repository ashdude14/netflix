import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import MovieItem from "./MovieItem";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]); // Change from object to array

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, [url]);

  return (
    <div>
      <h1 className='md:text-xl p-4 capitalize text-white text-bold'>{title}</h1>
      <div className="relative  flex item-center">
      <div id={`slider`} className="flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
  {movies.map((item) => (
    <MovieItem key={item.id} movie={item} />
  ))}
</div>

      </div>
    </div>
  );
};

export default MovieRow;
