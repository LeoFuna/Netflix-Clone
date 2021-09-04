import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../services';
import { ButtonCarrousel, HeaderCarousel, CursorSpanCarousel, PosterCarousel, MainDivCarousel } from '../styles/MainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import AliceCarousel from 'react-alice-carousel';

function Carousel( { genre: { id, name }, selectedLi: { wantSeries, wantMovies } } ) {
  const [mediasFromGenre, setMediaFromGenre] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggleCursor, setToggleCursor] = useState(false);
  const [toggleDivCarousel, setToggleDivCarousel] = useState(false);
  useEffect( async () => {
    let mediasFromApiUnsorted = [];
    if (wantSeries) {
      const mediasFromApiSeries = await fetchAPI(`/discover/tv?with_genres=${ id }&sort_by=popularity.desc`);
      mediasFromApiUnsorted = [...mediasFromApiSeries.results];
    }
    if (wantMovies) {
      const mediasFromApiMovie = await fetchAPI(`/discover/movie?with_genres=${ id }&sort_by=popularity.desc`);
      mediasFromApiUnsorted = [...mediasFromApiUnsorted, ...mediasFromApiMovie.results];
    }

    const mediasFromApi = mediasFromApiUnsorted.sort((element1, element2) => element1.popularity - element2.popularity);
    const filteredMedia = mediasFromApi.filter((media) => media.poster_path !== null && media.original_language !== 'jp');

    if (filteredMedia.length > 8) {
      const sevenMedias = []
      let index = 0
      do {
        sevenMedias.push(filteredMedia[index]);
        index += 1;
      } while ( index < 9 )
      setMediaFromGenre(sevenMedias)
    } else {
      setMediaFromGenre([])
    }
  }, [wantSeries, wantMovies]);

  const responsive = {
    0: { items: 1 },
    180: { items: 2 },
    360: { items: 3 },
    540: { items: 4 },
    720: { items: 5 },
    900: { items: 6 },
    1080: { items: 7 },
    1260: { items: 8 },
  };

  function galleryItems() {  
    {console.log(mediasFromGenre)}
    return mediasFromGenre.map((media) => (
      <div style={{margin: '20px', width: 'fit-content' }} key={ media.id }>
        <PosterCarousel src={ `https://image.tmdb.org/t/p/original${media.poster_path}` } />
      </div>
    ));
  }
  
  const onSlideChanged = (event) => {
    setCurrentIndex(event.item)
  };

  function renderGallery() {
    return <AliceCarousel  
      disableDotsControls={true}
      slideToIndex={ currentIndex } 
      onSlideChanged={ onSlideChanged } 
      infinite 
      renderNextButton={() => <ButtonCarrousel toggleDivCarousel={ toggleDivCarousel }><FontAwesomeIcon icon={ faChevronRight } /></ButtonCarrousel>}
      renderPrevButton={ () => <ButtonCarrousel toggleDivCarousel={ toggleDivCarousel } style={{ left: '0vw'}}><FontAwesomeIcon icon={ faChevronLeft } /></ButtonCarrousel>}
      responsive={ responsive } 
    >{ galleryItems() }</AliceCarousel>
  }

  if (mediasFromGenre.length > 8) {
    return (
      <MainDivCarousel>
        <HeaderCarousel 
          onMouseOver={() => setToggleCursor(true) }
          onMouseLeave={ () => setTimeout(() => setToggleCursor(false), 500) }
          toggleCursor={ toggleCursor }
        >
          { name }
          <CursorSpanCarousel>Ver tudo <FontAwesomeIcon icon={ faChevronRight } /></CursorSpanCarousel>
        </HeaderCarousel>
        <div 
          onMouseOver={() => setToggleDivCarousel(true)} 
          onMouseLeave={() => setToggleDivCarousel(false)} 
          style={{ display: 'flex', alignItems: 'center', margin: '20px', cursor: 'pointer' }}
        >
          { renderGallery() }
        </div>
      </MainDivCarousel>
    )
  }
  return(<div />)
}

Carousel.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  selectedLi: PropTypes.shape({
    wantSeries: PropTypes.bool,
    wantMovies: PropTypes.bool
  }).isRequired
};

export default Carousel;
