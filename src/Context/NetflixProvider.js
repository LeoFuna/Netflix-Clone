import React from 'react';
import NetflixContext from './NetflixContext';
import PropTypes from 'prop-types';

function NetflixProvider({ children }) {
  const teste = 'oi'
  return (
    <NetflixContext.Provider value={ { teste } } >
      { children }
    </NetflixContext.Provider>
  ) 
}

NetflixProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NetflixProvider;
