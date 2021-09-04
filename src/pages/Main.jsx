import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import { fetchAPI } from "../services";

function Main() {
  const [genres, setGenres] = useState([]);
  const [selectedLi, setSelectedLi] = useState({ wantSeries: true, wantMovies: true });
  const [mediaType, setMediaType] = useState('all');
  const [selectedNewBanner, setSelectedNewBanner] = useState(0);

  function handleSelectedLi(nameLi) {
    switch (nameLi) {
      case 'inicio':
          setSelectedLi({ wantSeries: true, wantMovies: true });
          setMediaType('all');
          setSelectedNewBanner(0);
        break
      case 'series':
          setSelectedLi({ wantSeries: true, wantMovies: false });
          setMediaType('tv');
          setSelectedNewBanner(0);
        break
      case 'filmes':
          setSelectedLi({ wantSeries: false, wantMovies: true });
          setMediaType('movie');
          setSelectedNewBanner(0);
        break
      default:
          setSelectedLi({ wantSeries: true, wantMovies: true }); // ainda ajustar para lista de desejos
          setMediaType('all');
          setSelectedNewBanner(0);
    }
  }

  function handleSelectedNewBanner(id) {
    setSelectedNewBanner(id);
  }

  useEffect(async () => {
    const genresFromApi = await fetchAPI('/genre/movie/list?');
    setGenres(genresFromApi.genres);
  }, []);
  
  if (genres.length !== 0) {
    return (
      <div>
        <Header handleSelectedLi={ handleSelectedLi } />
        <HeroBanner selectedNewBanner={ selectedNewBanner } mediaType={ mediaType } />
        {genres.map((genre) => <Carousel handleSelectedNewBanner={ handleSelectedNewBanner } selectedLi={ selectedLi } key={ genre.id } genre={ genre } /> )}
      </div>
    )
  }
  return (
    <div>LOADING...</div>
  )

}

export default Main;
