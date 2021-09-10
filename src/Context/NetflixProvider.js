import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../services';
import NetflixContext from './NetflixContext';
import PropTypes from 'prop-types';

function NetflixProvider({ children }) {
  const [genres, setGenres] = useState({ genresMovie: [], genresSerie: [] });
  const [itemToDetail, setItemToDetail] = useState({});
  const [detailsVisibility, setDetailsVisibility] = useState(false);
  const [itemToRenderOnDetail, setItemToRenderOnDetail] = useState({});

  function handleShowDetails(id, mediaType) {
    if (id && mediaType) {
      setItemToDetail({ id, mediaType });
      setDetailsVisibility(true);
    } else {
      setDetailsVisibility(false);
    }
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
    <NetflixContext.Provider value={ { genres, handleShowDetails, itemToRenderOnDetail, detailsVisibility } } >
      { children }
    </NetflixContext.Provider>
  ) 
}

NetflixProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NetflixProvider;
