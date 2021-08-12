import React, { useState } from 'react';
import { Logo, HeaderContainer, HeaderMainDiv, UlFromHeader, LiFromHeader, SearchBar, HeaderContainerRight } from '../styles/MainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import netflixLogo from '../images/netflix-logo.png';


function Header() {
  const [isVisible, setIsVisible] = useState('none')

  function handleSearchBarVisibility() {
    isVisible === 'none' ? setIsVisible('') : setIsVisible('none');
  }

  return (
    <HeaderMainDiv>
      <HeaderContainer>
        <div>
          <Logo src={ netflixLogo } alt="Netflix Logo" />
        </div>
        <div>
          <UlFromHeader>
            <LiFromHeader fontWeight="900">Início</LiFromHeader>
            <LiFromHeader>Séries</LiFromHeader>
            <LiFromHeader>Filmes</LiFromHeader>
            <LiFromHeader>Bombando</LiFromHeader>
            <LiFromHeader>Minha lista</LiFromHeader>
          </UlFromHeader>
        </div>
      </HeaderContainer>
      <HeaderContainerRight>
        <FontAwesomeIcon onClick={ handleSearchBarVisibility } icon={ faSearch } />
        <SearchBar type="text" display={ isVisible } />
        <div style={{width: '60px', height: '60px', backgroundColor: 'white'}} />
      </HeaderContainerRight>
    </HeaderMainDiv>
  )
}

export default Header;
