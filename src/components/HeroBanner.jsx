import React, { useEffect, useState } from 'react';
import { fetchAPI}  from '../services';

function HeroBanner() {
  const [mediaBackground, setMediaBackground] = useState({})

  useEffect(async () => {
    const moviesFromApi = await fetchAPI('/trending/all/day')
    setMediaBackground(moviesFromApi.results[0])
  }, []);
  // console.log(mediaBackground)
  return (
    <div>
      { mediaBackground.poster_path ? <img src={ `https://image.tmdb.org/t/p/original/${mediaBackground['poster_path']}` } /> : <p>LOADING...</p> }
    </div>
  )
}

export default HeroBanner;
