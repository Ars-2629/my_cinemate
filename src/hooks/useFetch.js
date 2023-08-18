import {useState,useEffect} from 'react';

export function useFetch(apirouter,queryname) {

const [data,setData]=useState([]);

const url=`https://api.themoviedb.org/3${apirouter}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryname}`

useEffect(()=>{
    async function fetchMovies(){
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.results);
   }
   fetchMovies();
  },[url]);

  return (
   {data}
  )
}
