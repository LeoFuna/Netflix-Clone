import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import { fetchAPI } from "../services";

function Main() {
  const [genres, setGenres] = useState([]);

  useEffect(async () => {
    const genresFromApi = await fetchAPI('/genre/movie/list?');
    setGenres(genresFromApi.genres);
  }, []);
  
  if (genres.length !== 0) {
    return (
      <div>
        <Header />
        <HeroBanner />
        {genres.map((genre) => <Carousel key={ genre.id } genreId={ genre.id } /> )}
      </div>
    )
  }
  return (
    <div>LOADING...</div>
  )

}

export default Main;
