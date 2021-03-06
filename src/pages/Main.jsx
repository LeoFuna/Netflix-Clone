import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import NetflixContext from "../Context/NetflixContext";
import List from "../components/List";

function Main() {
  const [genresToRender, setGenresToRender] = useState([]);
  const { genres: { genresMovie, genresSerie }, watchAfterList } = useContext(NetflixContext);
  const [selectedLi, setSelectedLi] = useState({ wantSeries: true, wantMovies: true });
  const [mediaType, setMediaType] = useState('all');
  const [selectedNewBanner, setSelectedNewBanner] = useState({ id: 0, serieOrMovie: '' });
  const [isSearching, setIsSearching] = useState(false);
  const [isWatchAfterList, setIsWatchAfterList] = useState(false);
  const [dataToRenderByQuery, setDataToRenderByQuery] = useState([{}]);

  function handleSelectedLi(nameLi) {
    setSelectedNewBanner({ id:0 , serieOrMovie: ''});
    switch (nameLi) {
      case 'inicio':
          setGenresToRender(returnArrayUnique([...genresMovie, ...genresSerie]));
          setSelectedLi({ wantSeries: true, wantMovies: true });
          setMediaType('all');
          setIsWatchAfterList(false);
        break
      case 'series':
          setGenresToRender(genresSerie);
          setSelectedLi({ wantSeries: true, wantMovies: false });
          setMediaType('tv');
          setIsWatchAfterList(false);
        break
      case 'filmes':
          setGenresToRender(genresMovie);
          setSelectedLi({ wantSeries: false, wantMovies: true });
          setMediaType('movie');
          setIsWatchAfterList(false);
        break
      default:
          setIsWatchAfterList(true);
    }
  }

  function handleSelectedNewBanner(id, serieOrMovie) {
    setSelectedNewBanner({ id, serieOrMovie });
  }

  function handleIsSearching(dataFromQuery) {
    if (dataFromQuery[0] !== 'semBusca') {
      setIsSearching(true);
      setDataToRenderByQuery(dataFromQuery);
    } else {
      setIsSearching(false);
      setDataToRenderByQuery([]);
    }
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
        <Header handleIsSearching={ handleIsSearching } handleSelectedLi={ handleSelectedLi } />
        { isSearching || isWatchAfterList ?  <div /> : <HeroBanner selectedNewBanner={ selectedNewBanner } mediaType={ mediaType } /> }
        { isSearching || isWatchAfterList ? <div style={{ height: '90px', background: 'black' }} /> : genresToRender.map(
          (genre) => <Carousel handleSelectedNewBanner={ handleSelectedNewBanner } selectedLi={ selectedLi } key={ genre.id } genre={ genre } /> )
        }
        { isSearching ? <List dataToRenderByQuery={ dataToRenderByQuery } /> : <div /> }
        { isWatchAfterList && !isSearching ? <List dataToRenderByQuery={ watchAfterList } /> : <div /> }
        <Details />
      </div>
    )
  }
  return (
    <div>LOADING...</div>
  )

}

export default Main;
