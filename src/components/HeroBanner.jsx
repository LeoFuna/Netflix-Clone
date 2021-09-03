import React, { useEffect, useState } from 'react';
import { fetchAPI }  from '../services';
import { HeroBannerDetails, HeroBannerImage, GradientOnBannerContainer, HeroBannerButtons } from '../styles/MainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

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
          <h1 style={{color: 'white'}}>{ mediaBackground.title ? mediaBackground.title : mediaBackground.name }</h1>
          <p style={{color: 'gray'}}>{ mediaBackground.overview }</p>
          <p style={{color: '#158007', fontSize: '16px', fontWeight: 'bolder'}}>{ mediaBackground.vote_average } pontos</p>
          <div style={{ display: 'flex' }}>
            <HeroBannerButtons type="button" setWidth='200px'>
              <FontAwesomeIcon icon={ faPlay } />
              <p>Assistir</p>
            </HeroBannerButtons>
            <HeroBannerButtons type="button" setWidth='250px' setMarginLeft='12px'>
              <FontAwesomeIcon icon={ faInfoCircle } />
              <p>Mais informações</p>
            </HeroBannerButtons>
          </div>
        </HeroBannerDetails>
        </GradientOnBannerContainer>
      </HeroBannerImage> : <p>LOADING...</p> }
    </>
  )
}

export default HeroBanner;
