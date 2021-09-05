import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import NetflixContext from "../Context/NetflixContext";

function Main() {
  const [genresToRender, setGenresToRender] = useState([]);
  const { genres: { genresMovie, genresSerie } } = useContext(NetflixContext);
  const [selectedLi, setSelectedLi] = useState({ wantSeries: true, wantMovies: true });
  const [mediaType, setMediaType] = useState('all');
  const [selectedNewBanner, setSelectedNewBanner] = useState({ id: 0, serieOrMovie: '' });

  function handleSelectedLi(nameLi) {
    setSelectedNewBanner({ id:0 , serieOrMovie: ''});
    switch (nameLi) {
      case 'inicio':
          setGenresToRender(returnArrayUnique([...genresMovie, ...genresSerie]));
          setSelectedLi({ wantSeries: true, wantMovies: true });
          setMediaType('all');
        break
      case 'series':
          setGenresToRender(genresSerie);
          setSelectedLi({ wantSeries: true, wantMovies: false });
          setMediaType('tv');
        break
      case 'filmes':
          setGenresToRender(genresMovie);
          setSelectedLi({ wantSeries: false, wantMovies: true });
          setMediaType('movie');
        break
      default:
          setGenresToRender(returnArrayUnique([...genresMovie, ...genresSerie]));
          setSelectedLi({ wantSeries: true, wantMovies: true }); // ainda ajustar para lista de desejos
          setMediaType('all');
    }
  }

  function handleSelectedNewBanner(id, serieOrMovie) {
    setSelectedNewBanner({ id, serieOrMovie });
  }

  function returnArrayUnique(array) {
    let nonUniqueArray = array.concat();
    for(let index=0; index<nonUniqueArray.length; index += 1) {
        for(let innerIndex=index+1; innerIndex<nonUniqueArray.length; innerIndex += 1) {
            if(nonUniqueArray[index].id === nonUniqueArray[innerIndex].id)
            nonUniqueArray.splice(innerIndex, 1);
        }
    }

    return nonUniqueArray;
  }
  
  useEffect(() => {
    setGenresToRender(returnArrayUnique([...genresMovie, ...genresSerie]));
  }, [genresMovie, genresSerie]);
  
  if (genresToRender.length !== 0) {
    return (
      <div>
        <Header handleSelectedLi={ handleSelectedLi } />
        <HeroBanner selectedNewBanner={ selectedNewBanner } mediaType={ mediaType } />
        {genresToRender.map((genre) => <Carousel handleSelectedNewBanner={ handleSelectedNewBanner } selectedLi={ selectedLi } key={ genre.id } genre={ genre } /> )}
      </div>
    )
  }
  return (
    <div>LOADING...</div>
  )

}

export default Main;
