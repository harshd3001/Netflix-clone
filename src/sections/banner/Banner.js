import React, { useEffect, useState } from 'react'
import axios from '../axios'
import url from '../request'
import './Banner.css';


function Banner() {
    const [movie,setmovie]=useState([])

    useEffect(()=>{
        async function fetchdata(){
            const request=await axios.get(url.fetchNetflixOriginals)
            setmovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length)
            ]);
        }
        fetchdata()
    },[])

  return (
    <header className='banner'style={{
        backgroundSize:'cover',
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:'centre centre',
        color:'white'
    }}>
        <div className="banner_contents">
            <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name }</h1>
            <div className="banner_buttons">
                <button className="button_banner">play</button>
                <button className="button_banner">more info</button>
            </div>
            <h1 className='banner_desc'>{movie?.overview}</h1>
        </div>
        <div className='banner_fadeBottom'></div>
    </header>
  )
}

export default Banner
