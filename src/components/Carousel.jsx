import React from 'react';
import PropTypes from 'prop-types';

function Carousel( { genreId } ) {
  return (
    <div>
      { genreId }
    </div>
  )
}

Carousel.propTypes = {
  genreId: PropTypes.string.isRequired,
};

export default Carousel;
