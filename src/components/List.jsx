import React from 'react';
import { useContext } from 'react';
import NetflixContext from '../Context/NetflixContext';
import PropTypes from 'prop-types';

function List({ dataToRenderByQuery }) {
  const { handleShowDetails } = useContext(NetflixContext);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'black', height: '100vh', paddingLeft: '7vw' }}>
      { dataToRenderByQuery.filter((media) => media.poster_path).map((media) => 
      <div key={ media.id }>
        <img 
          onClick={ () => handleShowDetails(media.id, media.media_type, media.serieOrMovie) } 
          style={{ with: '10vw', height: '14vw', margin: '10px', cursor: "pointer" }} 
          src={ `https://image.tmdb.org/t/p/original${media.poster_path}` } 
        />
      </div>) }
    </div>
  )
}

List.propTypes = {
  dataToRenderByQuery: PropTypes.array.isRequired
}

export default List;
