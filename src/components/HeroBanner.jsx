import React, { useEffect, useState } from 'react';
import { fetchAPI }  from '../services';
import { HeroBannerDetails, HeroBannerImage } from '../styles/MainStyles'

function HeroBanner() {
  const [mediaBackground, setMediaBackground] = useState({})

  useEffect(async () => {
    const moviesFromApi = await fetchAPI('/discover/tv?sort_by=popularity.desc&page=1&with_networks=213&include_null_first_air_dates=false')
    setMediaBackground(moviesFromApi.results[0])
  }, []);
  console.log(mediaBackground)
  return (
    <>
      { mediaBackground.backdrop_path ? 
      <HeroBannerImage image={`https://image.tmdb.org/t/p/original${mediaBackground['backdrop_path']}`} >
        <HeroBannerDetails>
          <h1 style={{color: 'green'}}>{ mediaBackground.name }</h1>
          <p style={{color: 'green'}}>{ mediaBackground.overview }</p>
          <p style={{color: 'green'}}>{ mediaBackground.vote_average }</p>
          <button type="button">ASISTIR</button>
          <button type="button">MAINS INFORMAÇÕES</button>
        </HeroBannerDetails>
      </HeroBannerImage> : <p>LOADING...</p> }
    </>
  )
}

export default HeroBanner;
