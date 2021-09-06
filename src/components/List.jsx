import React from 'react';
import PropTypes from 'prop-types';

function List({ dataToRenderByQuery }) {
  console.log(dataToRenderByQuery)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'black'}}>
      { dataToRenderByQuery.filter((media) => media.poster_path).map((media) => 
      <div key={ media.id } >
        <img style={{ with: '10vw', height: '14vw', margin: '10px' }} src={ `https://image.tmdb.org/t/p/original${media.poster_path}` } />
      </div>) }
    </div>
  )
}

List.propTypes = {
  dataToRenderByQuery: PropTypes.array.isRequired
}

export default List;
