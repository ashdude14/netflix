import React, { useEffect, useState } from 'react'
import request from "../requests"

import axios from "axios"
const Main = () => {
  const [movies,setMovies]=useState([]);
  
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(()=>{
    axios.get(request.requestPopular).then((response)=>{
      setMovies(response.data)
    })
  },[])
  console.log(movie);
  return (
    <div>
      
    </div>
  )
}

export default Main
