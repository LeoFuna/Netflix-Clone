import React, { useState } from 'react';
import { Logo, HeaderContainer, HeaderMainDiv, UlFromHeader, LiFromHeader, SearchBar, HeaderContainerRight, DivSearchBar, ProfileAvatar } from '../styles/MainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import netflixLogo from '../images/netflix-logo.png';


function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [readyToCloseSearchBar, setReadyToCloseSearchBar] = useState(false);
  const [transparencyOnHeader, setTransparecyOnHeader] = useState(true);
  const [whichIsBold, setWhichIsBold] = useState({
    inicio: true,
    series: false,
    filmes: false,
    bombando: false,
    minhaLista: false,
  });

  function handleSearchBarVisibility() {
    if (isVisible) {
      setReadyToCloseSearchBar(true);
      setTimeout(() => setIsVisible(false), 380);
    } else {
      setReadyToCloseSearchBar(false);
      setIsVisible(true);
    }
  }

  function handleTargetOnClick({ target: { id } }) {
    const previousSelectedLi = Object.entries(whichIsBold).filter((li) => li[1] === true);
    setWhichIsBold({
      ...whichIsBold,
      [id]: true,
      [previousSelectedLi[0][0]]: false,
    })
  }

  function handleHeaderTransparencyOnScroll() {
    if (window.scrollY === 0) {
      setTransparecyOnHeader(true)
    } else {
      setTransparecyOnHeader(false);
    }
  }

  window.addEventListener('scroll', handleHeaderTransparencyOnScroll);

  return (
    <HeaderMainDiv>
      <HeaderContainer transparencyOnHeader={ transparencyOnHeader }>
        <Logo src={ netflixLogo } alt="Netflix Logo" />
        <UlFromHeader>
          <LiFromHeader onClick={ handleTargetOnClick } id="inicio" isBold={ whichIsBold.inicio }>Início</LiFromHeader>
          <LiFromHeader onClick={ handleTargetOnClick } id="series" isBold={ whichIsBold.series }>Séries</LiFromHeader>
          <LiFromHeader onClick={ handleTargetOnClick } id="filmes" isBold={ whichIsBold.filmes }>Filmes</LiFromHeader>
          <LiFromHeader onClick={ handleTargetOnClick } id="bombando" isBold={ whichIsBold.bombando }>Bombando</LiFromHeader>
          <LiFromHeader onClick={ handleTargetOnClick } id="minhaLista" isBold={ whichIsBold.minhaLista }>Minha lista</LiFromHeader>
        </UlFromHeader>
      </HeaderContainer>
      <HeaderContainerRight transparencyOnHeader={ transparencyOnHeader }>
        <DivSearchBar isOpen={ isVisible }>
          <FontAwesomeIcon style={{ fontSize: '1.15em', marginRight: '5px' }} onClick={ handleSearchBarVisibility } icon={ faSearch } />
          <SearchBar placeholder="Títulos, gente e gêneros" readyToCloseSearchBar={ readyToCloseSearchBar } isVisible={ isVisible } type="text" />
        </DivSearchBar>
        <ProfileAvatar />
      </HeaderContainerRight>
    </HeaderMainDiv>
  )
}

export default Header;
