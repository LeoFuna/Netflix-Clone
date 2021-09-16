import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../services';
import NetflixContext from './NetflixContext';
import PropTypes from 'prop-types';

function NetflixProvider({ children }) {
  const [genres, setGenres] = useState({ genresMovie: [], genresSerie: [] });
  const [itemToDetail, setItemToDetail] = useState({});
  const [detailsVisibility, setDetailsVisibility] = useState(false);
  const [itemToRenderOnDetail, setItemToRenderOnDetail] = useState({});
  const [likedItems, setLikedItems] = useState([]);
  const [dislikedItems, setDislikedItems] = useState([]);

  function handleShowDetails(id, mediaType) {
    if (id && mediaType) {
      setItemToDetail({ id, mediaType });
      setDetailsVisibility(true);
    } else {
      setDetailsVisibility(false);
    }
  }

  function handleLikeAndDislike(media, likeOrDislike) {
    if (likeOrDislike === 'like') {
      const likedMedia = likedItems.filter((item) => item.id === media.id );
      likedMedia.length > 0 ? setLikedItems(likedItems.filter((item) => item.id !== media.id)) : setLikedItems([...likedItems, media]);
    } else {
      const dislikedMedia = dislikedItems.filter((item) => item.id === media.id );
      dislikedMedia.length > 0 ? setDislikedItems(dislikedItems.filter((item) => item.id !== media.id)) : setDislikedItems([...dislikedItems, media]);
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
    <NetflixContext.Provider value={ { genres, handleShowDetails, itemToRenderOnDetail, detailsVisibility, handleLikeAndDislike, likedItems, dislikedItems } } >
      { children }
    </NetflixContext.Provider>
  ) 
}

NetflixProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NetflixProvider;
