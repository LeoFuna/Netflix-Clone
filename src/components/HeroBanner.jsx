import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI }  from '../services';
import { 
  HeroBannerDetails, 
  HeroBannerImage, 
  GradientOnBannerContainer, 
  HeroBannerButtons, 
  HeroBannerTitle, 
  HeroBannerOverview, 
  HeroBannerVotes } from '../styles/MainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

function HeroBanner({ mediaType, selectedNewBanner }) {
  const [mediaBackground, setMediaBackground] = useState({})

  useEffect(async () => {
    if (selectedNewBanner.serieOrMovie === '') {
      const moviesFromApi = await fetchAPI(`/trending/${mediaType}/week?`);
      setMediaBackground(moviesFromApi.results[0]);
    } else {
      const moviesFromApi = await fetchAPI(`/${selectedNewBanner.serieOrMovie}/${selectedNewBanner.id}?`);
      setMediaBackground(moviesFromApi);
    }
  }, [mediaType, selectedNewBanner]);
  return (
    <>
      { mediaBackground.backdrop_path ? 
      <HeroBannerImage image={`https://image.tmdb.org/t/p/original${mediaBackground['backdrop_path']}`} >
        <GradientOnBannerContainer>
          <HeroBannerDetails>
            <HeroBannerTitle>{ mediaBackground.title ? mediaBackground.title : mediaBackground.name }</HeroBannerTitle>
            <HeroBannerOverview>{ mediaBackground.overview }</HeroBannerOverview>
            <HeroBannerVotes>{ mediaBackground.vote_average } pontos</HeroBannerVotes>
            <div style={{ display: 'flex' }}>
              <HeroBannerButtons type="button" setWidth='200px' isDetailButton={false}>
                <FontAwesomeIcon icon={ faPlay } />
                <p>Assistir depois</p>
              </HeroBannerButtons>
              <HeroBannerButtons type="button" setWidth='250px' setMarginLeft='12px' isDetailButton={true}>
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

HeroBanner.propTypes = {
  mediaType: PropTypes.string.isRequired,
  selectedNewBanner: PropTypes.shape({
    id: PropTypes.number,
    serieOrMovie: PropTypes.string
  }).isRequired
};

export default HeroBanner;
