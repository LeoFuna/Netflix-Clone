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
  const [watchAfterList, setWatchAfterList] = useState([]);

  function handleShowDetails(id, mediaType) {
    if (id && mediaType) {
      setItemToDetail({ id, mediaType });
      setDetailsVisibility(true);
    } else {
      setDetailsVisibility(false);
    }
  }

// FUNÇÃO QUE UTILIZA UMA "FLAG" PARA SABER EM QUAL CONDICIONAL ENTRAR E A PARTIR DAI FAZ VERIFICAÇÕES PARA ADICIONAR FILMES/SERIES AO LIKE OU DISLIKE
// GARANTINDO QUE NÃO HAJA LIKE E DISLIKE NO MESMO FILME, POR NAO FAZER SENTIDO
  function handleLikeAndDislike(media, likeOrDislike) {
    if (likeOrDislike === 'like') {
      const likedMedia = likedItems.filter((item) => item.id === media.id );
      const dislikedMedia = dislikedItems.filter((item) => item.id === media.id);
      // GARANTE QUE DARÁ LIKE QUANDO NENHUM DOS BOTOES TIVER ACIONAMENTO
      if (likedMedia.length === 0 & dislikedMedia.length === 0) {
        setLikedItems([...likedItems, media]);
      }
      // GARANTE QUE TIRARÁ O LIKE QUANDO O LIKE FOR CLICKADO NOVAMENTE
      if (likedMedia.length !== 0) {
        setLikedItems(likedItems.filter((item) => item.id !== media.id));
      }
      // GARANTE QUE CASO O DISLIKE JÁ ESTEJA ACIONADO ELE FAÇA UMA ALTERAÇÃO PARA LIKE AO TER O LIKE CLICKADO, ASSIM NÃO GERANDO LIKE E DISLIKE JUNTOS
      else {
        setDislikedItems(dislikedItems.filter((item) => item.id !== media.id));
        setLikedItems([...likedItems, media]);
      }
    } else {
      const likedMedia = likedItems.filter((item) => item.id === media.id );
      const dislikedMedia = dislikedItems.filter((item) => item.id === media.id );
      if (likedMedia.length === 0 & dislikedMedia.length === 0) {
        setDislikedItems([...dislikedItems, media]);
      } 
      if (dislikedMedia.length !== 0) {
        setDislikedItems(dislikedItems.filter((item) => item.id !== media.id));
      } else {
        setLikedItems(likedItems.filter((item) => item.id !== media.id))
        setDislikedItems([...dislikedItems, media]);
      }
    }
  }

  function handleWatchAfterList(media) {
    const mediaThatWasSelected = watchAfterList.filter((item) => item.id === media.id);
    if (mediaThatWasSelected[0]) {
      setWatchAfterList(watchAfterList.filter((item) => item.id !== media.id ));
    } else {
      setWatchAfterList([...watchAfterList, media]);
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
    <NetflixContext.Provider value={ 
      { genres, 
        handleShowDetails,
        itemToRenderOnDetail,
        detailsVisibility, 
        handleLikeAndDislike, 
        likedItems, 
        dislikedItems,
        handleWatchAfterList,
        watchAfterList
      } 
      } >
      { children }
    </NetflixContext.Provider>
  ) 
}

NetflixProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NetflixProvider;
