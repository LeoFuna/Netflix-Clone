import React from 'react';
import { useContext } from 'react';
import NetflixContext from '../Context/NetflixContext';
import PropTypes from 'prop-types';

function List({ dataToRenderByQuery }) {
  const { handleShowDetails } = useContext(NetflixContext);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'black', height: '100vh'}}>
      { console.log(dataToRenderByQuery) }
      { dataToRenderByQuery.filter((media) => media.poster_path).map((media) => 
      <div key={ media.id } onClick={ () => handleShowDetails(media.id, media.media_type, media.serieOrMovie) } >
        <img style={{ with: '10vw', height: '14vw', margin: '10px' }} src={ `https://image.tmdb.org/t/p/original${media.poster_path}` } />
      </div>) }
    </div>
  )
}

List.propTypes = {
  dataToRenderByQuery: PropTypes.array.isRequired
}

export default List;
