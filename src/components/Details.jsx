import React, { useState, useEffect, useContext } from 'react';
import NetflixContext from '../Context/NetflixContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { DetailsDiv, ImageBackgroundOnDetails } from '../styles/MainStyles';

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
            <ImageBackgroundOnDetails imageDetails={ `https://image.tmdb.org/t/p/original${itemToRender.backdrop_path }` }>
              <div className="left-div">
                <h1>{ itemToRender.title }</h1>
                <button>Assistir Depois</button>
              </div>
              <div className="right-div">
                <button className="exit-button" onClick={ () => handleShowDetails() }>
                  <FontAwesomeIcon  icon={ faTimesCircle } />
                </button>
              </div>
            </ImageBackgroundOnDetails>
            <p>{ itemToRender.overview }</p>
            <p>{ itemToRender.vote_average * 10 }% relevante</p>
            <p>{ itemToRender.vote_count } votos</p>
            <p>Lançamento: { itemToRender.release_date }</p>
            <p>{itemToRender.genres ? itemToRender.genres.map((genre) => genre.name) : ''}</p>
            <p>{ itemToRender.runtime ? `${itemToRender.runtime} minutos` : '' }</p>
          </div>
        </div>
      </DetailsDiv>
    );
  }
  return (
    <DetailsDiv showDetails={ detailsVisibility }>
      <div>
        <div>
          <ImageBackgroundOnDetails imageDetails={ `https://image.tmdb.org/t/p/original${itemToRender.backdrop_path }` }>
            <div className="left-div">
              <h1>{ itemToRender.name }</h1>
              <div>
                <button>Assistir Depois</button>
                <button>
                  <FontAwesomeIcon icon={ faThumbsUp } />
                </button>
                <button>
                  <FontAwesomeIcon icon={ faThumbsDown } />
                </button>
              </div>
            </div>
            <div className="right-div">
              <button className="exit-button" onClick={ () => handleShowDetails() }>
                <FontAwesomeIcon  icon={ faTimesCircle } />
              </button>
            </div>
          </ImageBackgroundOnDetails>
          <p>{ itemToRender.overview }</p>
          <p>{ itemToRender.vote_average * 10 }% relevante</p>
          <p>{ itemToRender.vote_count } votos</p>
          <p>Lançamento: { itemToRender.first_air_date }</p>
          <p>{itemToRender.genres ? itemToRender.genres.map((genre) => genre.name) : ''}</p>
          <p>{ itemToRender.seasons ? `${itemToRender.seasons.length} temporadas` : '' }</p>
        </div>
      </div>
    </DetailsDiv>
  )
}

export default Details;
