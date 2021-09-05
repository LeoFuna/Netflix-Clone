import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../services';
import NetflixContext from './NetflixContext';
import PropTypes from 'prop-types';

function NetflixProvider({ children }) {
  const [genres, setGenres] = useState({ genresMovie: [], genresSerie: [] });
  useEffect( async () => {
    const genresFromApiMovie = await fetchAPI('/genre/movie/list?');
    const genresFromApiSerie = await fetchAPI('/genre/tv/list?');
    setGenres({ genresMovie: genresFromApiMovie.genres, genresSerie: genresFromApiSerie.genres })
  }, [])
  
  return (
    <NetflixContext.Provider value={ { genres } } >
      { children }
    </NetflixContext.Provider>
  ) 
}

NetflixProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NetflixProvider;
