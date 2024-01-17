import React from 'react'
import { createImageUrl } from '../Services/MovieServices'

const MovieItem = ({movie}) => {
    const {title,backdrop_path,poster_path}=movie;
  return (
    <div>
  <div className="relative inline-block w-[160px] sm:w-[200px] md:w-[240px] 
  rounded-lg overflow-hidden cursor-pointer m-2">
   <img src={createImageUrl(backdrop_path ?? poster_path,"w500")} alt="" />
  </div>
    </div>
  )
}

export default MovieItem
