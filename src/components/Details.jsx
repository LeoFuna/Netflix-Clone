import React, { useState, useEffect, useContext } from 'react';
import NetflixContext from '../Context/NetflixContext';
import { DetailsDiv } from '../styles/MainStyles';

function Details() {
  const [itemToRender, setItemToRender] = useState({});
  const { itemToRenderOnDetail, detailsVisibility, handleShowDetails } = useContext(NetflixContext);
  useEffect(() => {
    setItemToRender(itemToRenderOnDetail);
  }, [itemToRenderOnDetail]);

  if (itemToRender.original_title) {
    return (
      <DetailsDiv showDetails={ detailsVisibility }>
        <div>
          <div>
            <img src={`https://image.tmdb.org/t/p/original${itemToRender.backdrop_path}`} style={{ width: '40vw' }} />
            <h1>{ itemToRender.title }</h1>
            <p>{ itemToRender.overview }</p>
            <p>{ itemToRender.vote_average * 10 }% relevante</p>
            <p>{ itemToRender.vote_count } votos</p>
            <p>Lançamento: { itemToRender.release_date }</p>
            <p>{itemToRender.genres ? itemToRender.genres.map((genre) => genre.name) : ''}</p>
            <p>{ itemToRender.runtime ? `${itemToRender.runtime} minutos` : '' }</p>
          </div>
          <button onClick={ () => handleShowDetails() }>X</button>
          <button>Assistir Depois</button>
        </div>
      </DetailsDiv>
    );
  }
  return (
    <DetailsDiv showDetails={ detailsVisibility }>
      <div>
        <div>
          <img src={`https://image.tmdb.org/t/p/original${itemToRender.backdrop_path}`} style={{ width: '40vw' }} />
          <h1>{ itemToRender.name }</h1>
          <p>{ itemToRender.overview }</p>
          <p>{ itemToRender.vote_average * 10 }% relevante</p>
          <p>{ itemToRender.vote_count } votos</p>
          <p>Lançamento: { itemToRender.first_air_date }</p>
          <p>{itemToRender.genres ? itemToRender.genres.map((genre) => genre.name) : ''}</p>
          <p>{ itemToRender.seasons ? `${itemToRender.seasons.length} temporadas` : '' }</p>
        </div>
        <button onClick={ () => handleShowDetails() }>X</button>
        <button>Assistir Depois</button>
      </div>
    </DetailsDiv>
  )
}

export default Details;
