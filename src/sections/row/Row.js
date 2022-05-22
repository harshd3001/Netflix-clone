import React,{useState,useEffect} from 'react';
import './Row.css';
import axios from '../axios';


const baseurl='https://image.tmdb.org/t/p/original/';

function Row({title,fetchurl}) {
    const[movies,setmovies]=useState([]);
    useEffect(()=>{
    async function fetchdata(){
        const request=await axios.get(fetchurl);
        setmovies(request.data.results);
       }
    fetchdata();
    },[fetchurl])
    
  return (
    <div className='row'>    
      <h2>{title}</h2>
      <div className="row_posters">
            {movies.map(movie=>(
            <img 
            key={movie.id}
            className='row_poster'
            src={`${baseurl}${movie.poster_path}`} alt={movie.name} />
            ))}
      </div>
    </div>
  )
}

export default Row
