import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../services';

function Carousel( { genreId } ) {
  const [mediasFromGenre, setMediaFromGenre] = useState([])

  useEffect( async () => {
    const mediasFromApi = await fetchAPI(`/discover/movie?with_genres=${ genreId }&sort_by=vote_average.desc&vote_count.gte=10`);
    const filteredMedia = mediasFromApi.results.filter((media) => media.poster_path !== null && media.original_language === 'en' || media.original_language === 'es' || media.original_language === 'fr')
    const sevenMedias = []
    let index = 0
    do {
      sevenMedias.push(filteredMedia[index]);
      index += 1;
    } while ( index < 6 )
    console.log(sevenMedias)
    setMediaFromGenre(sevenMedias)
  }, [])

  return (
    <div style={{ display: 'flex' }}>
      { mediasFromGenre.map((media) => (
        <div key={ media.id }>
          <p>{ media.title }</p>
          <img style={{ width: '150px' }} src={ `https://image.tmdb.org/t/p/original${media.poster_path}` } />
        </div>
      ))}
    </div>
  )
}

Carousel.propTypes = {
  genreId: PropTypes.string.isRequired,
};

export default Carousel;
