
const key=import.meta.env.VITE_TMDB_KEY;
const movieBaseUrl="https://api.themoviedb.org/3"

const endpoints = {
popular : `${movieBaseUrl}/movie/popular?api_key=${key}`,
topRated :  `${movieBaseUrl}/movie/top_rated?api_key=${key}`,
trending:  `${movieBaseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
upcoming :  `${movieBaseUrl}/movie/upcoming?api_key=${key}`,
};
console.log(`${movieBaseUrl}/movie/popular?api_key=${key}`);    
export default endpoints;
