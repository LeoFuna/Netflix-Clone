import React from 'react';
import { Logo, HeaderContainer, HeaderMainDiv, UlFromHeader, LiFromHeader } from '../styles/MainStyles';

function Header() {
  return (
    <HeaderMainDiv>
      <HeaderContainer>
        <div>
          <Logo src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/1280px-Logonfx.png'} alt="Netflix Logo" />
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
      <HeaderContainer>
        <p>Elementos de busca e perfil</p>
      </HeaderContainer>
    </HeaderMainDiv>
  )
}

export default Header;
