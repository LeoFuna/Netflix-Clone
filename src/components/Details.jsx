import React, { useState, useEffect, useContext } from 'react';
import NetflixContext from '../Context/NetflixContext';
import { DetailsDiv } from '../styles/MainStyles';

function Details() {
  const [itemToRender, setItemToRender] = useState({});
  const { itemToRenderOnDetail, detailsVisibility, handleShowDetails } = useContext(NetflixContext);
  useEffect(() => {
    setItemToRender(itemToRenderOnDetail);
  }, [itemToRenderOnDetail]);
  return (
    <DetailsDiv showDetails={ detailsVisibility }>
      <div>
        {itemToRender.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${itemToRender.backdrop_path}`} style={{ width: '40vw' }} /> : ''}
        <h1>{'name' in itemToRender ? itemToRender.name : itemToRender.title}</h1>
        <p>{ itemToRender.overview }</p>
        <p>{ itemToRender.vote_average * 10 }% relevante</p>
        <p>{ itemToRender.vote_count } votos</p>
        <p>Lançamento: { itemToRender.first_air_date ? itemToRender.first_air_date : itemToRender.release_date }</p>
        <p>{itemToRender.genres ? itemToRender.genres.map((genre) => genre.name) : ''}</p>
        <p>{ itemToRender.runtime ? `${itemToRender.runtime} minutos` : '' }</p>
        <p>{ itemToRender.seasons ? `${itemToRender.seasons.length} temporadas` : '' }</p>
        <button onClick={ () => handleShowDetails() }>X</button>
      </div>
      <button>Assistir Depois</button>
    </DetailsDiv>
  )
}

export default Details;
