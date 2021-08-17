import React, { useEffect, useState } from 'react';
import { fetchAPI }  from '../services';
import { HeroBannerDetails, HeroBannerImage, GradientOnBannerContainer } from '../styles/MainStyles'

function HeroBanner() {
  const [mediaBackground, setMediaBackground] = useState({})

  useEffect(async () => {
    const moviesFromApi = await fetchAPI('/trending/all/week?')
    setMediaBackground(moviesFromApi.results[0])
  }, []);
  return (
    <>
      { mediaBackground.backdrop_path ? 
      <HeroBannerImage image={`https://image.tmdb.org/t/p/original${mediaBackground['backdrop_path']}`} >
        <GradientOnBannerContainer>
        <HeroBannerDetails>
          <h1 style={{color: 'white'}}>{ mediaBackground.title }</h1>
          <p style={{color: 'gray'}}>{ mediaBackground.overview }</p>
          <p style={{color: '#158007', fontSize: '16px', fontWeight: 'bolder'}}>{ mediaBackground.vote_average } pontos</p>
          <button type="button">ASISTIR</button>
          <button type="button">MAINS INFORMAÇÕES</button>
        </HeroBannerDetails>
        </GradientOnBannerContainer>
      </HeroBannerImage> : <p>LOADING...</p> }
    </>
  )
}

export default HeroBanner;
