import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import { fetchAPI } from "../services";

function Main() {
  const [genres, setGenres] = useState([]);
  const [selectedLi, setSelectedLi] = useState({ wantSeries: true, wantMovies: true });

  function handleSelectedLi(nameLi) {
    console.log(nameLi);
    switch (nameLi) {
      case 'inicio':
          setSelectedLi({ wantSeries: true, wantMovies: true });
        break
      case 'series':
          setSelectedLi({ wantSeries: true, wantMovies: false });
        break
      case 'filmes':
          setSelectedLi({ wantSeries: false, wantMovies: true });
        break
      default:
          setSelectedLi({ wantSeries: true, wantMovies: true }); // ainda ajustar para lista de desejos
    }
  }

  useEffect(async () => {
    const genresFromApi = await fetchAPI('/genre/movie/list?');
    setGenres(genresFromApi.genres);
  }, []);
  
  if (genres.length !== 0) {
    return (
      <div>
        <Header handleSelectedLi={ handleSelectedLi } />
        <HeroBanner />
        {genres.map((genre) => <Carousel selectedLi={ selectedLi } key={ genre.id } genre={ genre } /> )}
      </div>
    )
  }
  return (
    <div>LOADING...</div>
  )

}

export default Main;
