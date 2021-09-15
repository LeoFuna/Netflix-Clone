import React, { useState, useEffect, useContext } from 'react';
import NetflixContext from '../Context/NetflixContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { DetailsDiv, ImageBackgroundOnDetails } from '../styles/MainStyles';

function Details() {
  const [itemToRender, setItemToRender] = useState({});
  const { itemToRenderOnDetail, detailsVisibility, handleShowDetails } = useContext(NetflixContext);
  useEffect(() => {
    setItemToRender(itemToRenderOnDetail);
    console.log(itemToRenderOnDetail)
  }, [itemToRenderOnDetail]);
  
  if (itemToRender.original_title) {
    return (
      <DetailsDiv showDetails={ detailsVisibility }>
        <div className="main-div-details">
            <ImageBackgroundOnDetails imageDetails={ `https://image.tmdb.org/t/p/original${itemToRender.backdrop_path }` }> 
              <div className="gradient-div">
                <div className="up-div-details">
                  <div className="left-up-div">
                    <div className="title-details">
                      <h1>{ itemToRender.title }</h1>
                    </div>
                    <div>
                      <button className="watch-after-details-button">
                        <FontAwesomeIcon icon={ faPlay } />
                        <p>Assistir depois</p>
                      </button>
                      <button className="thumbs-button">
                        <FontAwesomeIcon icon={ faThumbsUp } />
                      </button>
                      <button className="thumbs-button">
                        <FontAwesomeIcon icon={ faThumbsDown } />
                      </button>
                    </div>
                  </div>
                  <div className="right-up-div">
                    <button className="exit-button" onClick={ () => handleShowDetails() }>
                      <FontAwesomeIcon  icon={ faTimesCircle } />
                    </button>
                  </div>
                </div>
                <div className="down-div-details">
                  <div className="left-down-div">
                    <div className="tags-details">
                      <p className="relevance-details">{ itemToRender.vote_average * 10 }% relevante</p>
                      <p>{ itemToRender.release_date.split("-")[0] }</p>
                      <p>{ itemToRender.runtime ? `${itemToRender.runtime} min` : '' }</p>
                    </div>
                    <p className="overview-details">{ itemToRender.overview ? itemToRender.overview : "Desculpe, não há descrição pelo produtor..." }</p>
                  </div>
                  <div className="right-down-div">
                    <p><span style={{ color: "#777" }}>Votos: </span>{ itemToRender.vote_count }</p>
                    <p><span style={{ color: "#777" }}>Gêneros: </span>{itemToRender.genres ? itemToRender.genres.map((genre) => `${genre.name} | `) : ''}</p>
                    <p><span style={{ color: "#777" }}>Produzido por: </span>{itemToRender.production_companies ? itemToRender.production_companies.map((company) => `${company.name} | `) : ''}</p>
                    <p><span style={{ color: "#777" }}>Pontos de popularidade: </span>{ Math.round(itemToRender.popularity) }</p>
                  </div>
                </div>
              </div>
            </ImageBackgroundOnDetails>
        </div>
      </DetailsDiv>
    );
  }
  return (
    <DetailsDiv showDetails={ detailsVisibility }>
      <div className="main-div-details"> 
        <ImageBackgroundOnDetails imageDetails={ `https://image.tmdb.org/t/p/original${itemToRender.backdrop_path }` }>
          <div className="gradient-div">
            <div className="up-div-details">
              <div className="left-up-div">
                <div className="title-details">
                  <h1>{ itemToRender.name }</h1>
                </div>
                <div>
                  <button className="watch-after-details-button">
                    <FontAwesomeIcon icon={ faPlay } />
                    <p>Assistir depois</p>
                  </button>
                  <button className="thumbs-button">
                    <FontAwesomeIcon icon={ faThumbsUp } />
                  </button>
                  <button className="thumbs-button">
                    <FontAwesomeIcon icon={ faThumbsDown } />
                  </button>
                </div>
              </div>
              <div className="right-up-div">
                <button className="exit-button" onClick={ () => handleShowDetails() }>
                  <FontAwesomeIcon  icon={ faTimesCircle } />
                </button>
              </div>
            </div>
            <div className="down-div-details">
              <div className="left-down-div">
                <div className="tags-details">
                  <p className="relevance-details">{ itemToRender.vote_average * 10 }% relevante</p>
                  <p>{ itemToRender.first_air_date ? itemToRender.first_air_date.split("-")[0] : '' }</p>
                  <p>{ itemToRender.seasons ? `${itemToRender.number_of_seasons} Temporada(s)` : '' }</p> 
                </div>
                <p className="overview-details">{ itemToRender.overview ? itemToRender.overview : "Desculpe, não há descrição pelo produtor..." }</p>
              </div>
              <div className="right-down-div">
                <p><span style={{ color: "#777" }}>Votos: </span>{ itemToRender.vote_count }</p>
                <p><span style={{ color: "#777" }}>Gêneros: </span>{itemToRender.genres ? itemToRender.genres.map((genre) => `${genre.name} | `) : ''}</p>
                <p><span style={{ color: "#777" }}>Total de episódios: </span>{ itemToRender.number_of_episodes }</p>
                <p><span style={{ color: "#777" }}>Último Lançamento: </span>{ itemToRender.last_air_date ? itemToRender.last_air_date.split("-")[0] : '' }</p>
                <p><span style={{ color: "#777" }}>{ itemToRender.created_by === [] ? 'Criado por: ' : ''}</span>{ itemToRender.created_by === [] ? itemToRender.created_by.map((author) => `${author.name} | `) : '' }</p>
              </div>
            </div>
          </div>
        </ImageBackgroundOnDetails>
      </div>
    </DetailsDiv>
  )
}

export default Details;
