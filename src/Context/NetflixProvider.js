import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../services';
import NetflixContext from './NetflixContext';
import PropTypes from 'prop-types';

function NetflixProvider({ children }) {
  const [genres, setGenres] = useState({ genresMovie: [], genresSerie: [] });
  const [itemToDetail, setItemToDetail] = useState({});
  const [itemToRenderOnDetail, setItemToRenderOnDetail] = useState({});

  function handleShowDetails(id, mediaType) {
    setItemToDetail({ id, mediaType });
  }

  useEffect(async () => {
    if (Object.keys(itemToDetail).length > 0 ) {
      const detailsFromApi = await fetchAPI(`/${itemToDetail.mediaType}/${itemToDetail.id}?`);
      setItemToRenderOnDetail(detailsFromApi);
    }
  }, [itemToDetail]);

  useEffect( async () => {
    const genresFromApiMovie = await fetchAPI('/genre/movie/list?');
    const genresFromApiSerie = await fetchAPI('/genre/tv/list?');
    setGenres({ genresMovie: genresFromApiMovie.genres, genresSerie: genresFromApiSerie.genres });
  }, []);

  return (
    <NetflixContext.Provider value={ { genres, handleShowDetails, itemToRenderOnDetail } } >
      { children }
    </NetflixContext.Provider>
  ) 
}

NetflixProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NetflixProvider;
