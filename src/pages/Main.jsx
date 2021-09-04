import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import { fetchAPI } from "../services";

function Main() {
  const [genres, setGenres] = useState([]);
  const [selectedLi, setSelectedLi] = useState({ wantSeries: true, wantMovies: true });
  const [mediaType, setMediaType] = useState('all');
  const [selectedNewBanner, setSelectedNewBanner] = useState({ id: 0, serieOrMovie: '' });

  function handleSelectedLi(nameLi) {
    setSelectedNewBanner({ id:0 , serieOrMovie: ''});
    switch (nameLi) {
      case 'inicio':
          setSelectedLi({ wantSeries: true, wantMovies: true });
          setMediaType('all');
        break
      case 'series':
          setSelectedLi({ wantSeries: true, wantMovies: false });
          setMediaType('tv');
        break
      case 'filmes':
          setSelectedLi({ wantSeries: false, wantMovies: true });
          setMediaType('movie');
        break
      default:
          setSelectedLi({ wantSeries: true, wantMovies: true }); // ainda ajustar para lista de desejos
          setMediaType('all');
    }
  }

  function handleSelectedNewBanner(id, serieOrMovie) {
    setSelectedNewBanner({ id, serieOrMovie });
  }

  useEffect(async () => {
    const genresFromApi = await fetchAPI('/genre/movie/list?');
    // const dataFilterPerQuery = await fetchAPI('/search/multi?query=la%20casa%20de%20papel&page=1&include_adult=false'); usar query parecida com essa para fazer a query
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
