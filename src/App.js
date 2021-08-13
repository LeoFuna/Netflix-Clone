import React from 'react';
import './App.css';
import Main from './pages/Main';
import NetflixProvider from './Context/NetflixProvider';
import "react-alice-carousel/lib/alice-carousel.css";


function App() {
  return (
    <NetflixProvider>
        <Main />  
    </NetflixProvider>
  );
}

export default App;
