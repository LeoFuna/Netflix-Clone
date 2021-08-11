import React from 'react';
import './App.css';
import Main from './pages/Main';
import NetflixProvider from './Context/NetflixProvider';


function App() {
  return (
    <NetflixProvider>
        <Main />  
    </NetflixProvider>
  );
}

export default App;
