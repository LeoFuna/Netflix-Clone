import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../services';
import AliceCarousel from 'react-alice-carousel';

function Carousel( { genre: { id, name } } ) {
  const [mediasFromGenre, setMediaFromGenre] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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
    250: { items: 2 },
    500: { items: 3 },
    750: { items: 4 },
    1000: { items: 5 },
    1250: { items: 6 },
  };

  function galleryItems() {
    return mediasFromGenre.map((media) => (
      <div style={{margin: '20px' }} key={ media.id }>
        {/* <p>{ media.title }</p> */}
        <img style={{ width: '250px' }} src={ `https://image.tmdb.org/t/p/original${media.poster_path}` } />
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
      renderNextButton={() => <button style={{ color: 'white', fontSize: '50px', fontWeight: 'bolder', position: 'absolute', right: '-1vw', padding: '159px 30px', marginTop: '-417px', backgroundColor: 'rgba(0,0,0,0.8)', border: 'none',zIndex: '1' }}>{ '>' }</button>}
      renderPrevButton={ () => <button style={{ color: 'white', fontSize: '50px', fontWeight: 'bolder', position: 'absolute', left: '0vw', padding: '159px 30px', marginTop: '-417px', backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', zIndex: '1' }}>{ '<' }</button> }
      responsive={ responsive } 
    >{ galleryItems() }</AliceCarousel>
  }


  return (
    <div style={{ display: 'flex', flexDirection:'column', width: '99vw',  backgroundColor: 'black' }}>
      <h1 style={{ color: 'white' }}>{ name }</h1>
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
