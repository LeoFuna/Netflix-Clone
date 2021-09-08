import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import NetflixContext from '../Context/NetflixContext';
import { DetailsDiv } from '../styles/MainStyles';

function Details() {
  const [itemToRender, setItemToRender] = useState({});
  const { itemToRenderOnDetail } = useContext(NetflixContext);
  useEffect(() => {
    setItemToRender(itemToRenderOnDetail);
  }, [itemToRenderOnDetail]);

  return (
    <DetailsDiv>
      <div>
        <img src={`https://image.tmdb.org/t/p/original${itemToRender.backdrop_path}`} style={{ width: '40vw' }} />
        <h1>{'name' in itemToRender ? itemToRender.name : itemToRender.title}</h1>
        <p>{ itemToRender.overview }</p>
        <p>{ itemToRender.vote_average * 10 }% relevante</p>
        <p>{ itemToRender.vote_count } votos</p>
        <p>Lançamento: { itemToRender.first_air_date ? itemToRender.first_air_date : itemToRender.release_date }</p>
        <p>{itemToRender.genres.map((genre) => genre.name)}</p>
        <p>{ itemToRender.runtime ? `${itemToRender.runtime} minutos` : '' }</p>
        <p>{ itemToRender.seasons ? `${itemToRender.seasons.length} temporadas` : '' }</p>
        {console.log(itemToRender)}
      </div>
      <button>Assistir Depois</button>
    </DetailsDiv>
  )
}

Details.propTypes = {
  itemToDetail: PropTypes.shape({
    id: PropTypes.number,
    mediaType: PropTypes.string
  }).isRequired
}

export default Details;
