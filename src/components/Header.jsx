import React, { useState } from 'react';
import { Logo, HeaderContainer, HeaderMainDiv, UlFromHeader, LiFromHeader, SearchBar, HeaderContainerRight, DivSearchBar, ProfileAvatar } from '../styles/MainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import netflixLogo from '../images/netflix-logo.png';


function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const [whichIsBold, setWhichIsBold] = useState({
    inicio: true,
    series: false,
    filmes: false,
    bombando: false,
    minhaLista: false,
  });

  function handleSearchBarVisibility() {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }

  function handleTargetOnClick({ target: { id } }) {
    const previousSelectedLi = Object.entries(whichIsBold).filter((li) => li[1] === true);
    setWhichIsBold({
      ...whichIsBold,
      [id]: true,
      [previousSelectedLi[0][0]]: false,
    })
  }

  return (
    <HeaderMainDiv>
      <HeaderContainer>
        <Logo src={ netflixLogo } alt="Netflix Logo" />
        <UlFromHeader>
          <LiFromHeader onClick={ handleTargetOnClick } id="inicio" fontWeight={ whichIsBold.inicio }>Início</LiFromHeader>
          <LiFromHeader onClick={ handleTargetOnClick } id="series" fontWeight={ whichIsBold.series }>Séries</LiFromHeader>
          <LiFromHeader onClick={ handleTargetOnClick } id="filmes" fontWeight={ whichIsBold.filmes }>Filmes</LiFromHeader>
          <LiFromHeader onClick={ handleTargetOnClick } id="bombando" fontWeight={ whichIsBold.bombando }>Bombando</LiFromHeader>
          <LiFromHeader onClick={ handleTargetOnClick } id="minhaLista" fontWeight={ whichIsBold.minhaLista }>Minha lista</LiFromHeader>
        </UlFromHeader>
      </HeaderContainer>
      <HeaderContainerRight>
        <DivSearchBar isOpen={ isVisible }>
          <FontAwesomeIcon style={{ fontSize: '1.15em', marginRight: '5px' }} onClick={ handleSearchBarVisibility } icon={ faSearch } />
          <SearchBar placeholder="Títulos, gente e gêneros" display={ isVisible } type="text" />
        </DivSearchBar>
        <ProfileAvatar />
      </HeaderContainerRight>
    </HeaderMainDiv>
  )
}

export default Header;
