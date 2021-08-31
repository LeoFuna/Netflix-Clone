import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../services';
import { ButtonCarrousel, HeaderCarousel, CursorSpanCarousel } from '../styles/MainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import AliceCarousel from 'react-alice-carousel';

function Carousel( { genre: { id, name } } ) {
  const [mediasFromGenre, setMediaFromGenre] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggleCursor, setToggleCursor] = useState(false);
  useEffect( async () => {
    const mediasFromApi = await fetchAPI(`/discover/movie?with_genres=${ id }&sort_by=popularity.desc`);
    const filteredMedia = mediasFromApi.results.filter((media) => media.poster_path !== null && media.original_language !== 'jp')
    const sevenMedias = []
    let index = 0
    do {
      sevenMedias.push(filteredMedia[index]);
      index += 1;
    } while ( index < 9 )
    setMediaFromGenre(sevenMedias)
  }, [])

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
    return mediasFromGenre.map((media) => (
      <div style={{margin: '20px' }} key={ media.id }>
        <img style={{ width: '10vw', height: '14vw' }} src={ `https://image.tmdb.org/t/p/original${media.poster_path}` } />
      </div>
    ))
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
      renderNextButton={() => <ButtonCarrousel><FontAwesomeIcon icon={ faChevronRight } /></ButtonCarrousel>}
      renderPrevButton={ () => <ButtonCarrousel style={{ left: '0vw'}}><FontAwesomeIcon icon={ faChevronLeft } /></ButtonCarrousel>}
      responsive={ responsive } 
    >{ galleryItems() }</AliceCarousel>
  }


  return (
    <div style={{ display: 'flex', flexDirection:'column', width: '99vw',  backgroundColor: 'black' }}>
      <div style={{display: 'flex', alignItems: 'baseline'}}>
        <HeaderCarousel onMouseLeave={() => setToggleCursor(false)} onMouseOver={() => setToggleCursor(true)}>
          { name }
          <CursorSpanCarousel toggleCursor={toggleCursor}><FontAwesomeIcon icon={ faChevronRight } /></CursorSpanCarousel>
        </HeaderCarousel>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }} >
        { renderGallery() }
      </div>
    </div>
  )
}

Carousel.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired
};

export default Carousel;
