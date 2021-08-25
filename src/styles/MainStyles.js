import styled from "styled-components";

export const HeaderMainDiv = styled.header`
  display: flex;
  position: fixed;
  background-color: transparent;
  z-index: 2;
`;

export const Logo = styled.img`
  width: 100px;
  margin-left: 20px;
`;

export const HeaderContainer = styled.div`
  width: 47.6vw;
  padding-left: 2vw;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 32%, rgba(0,0,0,0) 100%);
  display: flex;
  align-items: center;
  color: white;
`; 

export const HeaderContainerRight = styled(HeaderContainer)`
  justify-content: flex-end;
  padding-right: 1.5vw;
`;

export const UlFromHeader = styled.ul`
  display: flex;
  color: white;
`;

export const LiFromHeader = styled.li`
  font-weight: ${(props) => props.fontWeight ? "900" : "initial" };
  list-style: none;
  margin: 15px;
`;

export const DivSearchBar = styled.div`
  background-color: ${ ({ isOpen }) => isOpen ? 'black' : 'transparent' };
  border: ${ ({ isOpen }) => isOpen ? '1px solid white' : 'transparent' };
  padding: 6px 9px;
  margin-right: 30px;
  display: flex;
`;

export const SearchBar = styled.input`
  display: ${({ display }) => display ? '' : 'none' };
  background-color: inherit;
  color: white;
  border: none;
  width: 250px;
  &:focus {
    outline: none;
  }
`;

export const ProfileAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  margin-right: 60px;
  background-color: #b55650;
`;

export const HeroBannerImage = styled.div`
    background-image: url(${ ({ image }) => image });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 5%;
    width: 99vw;
    height: 100vh;
`;

export const GradientOnBannerContainer = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
  background: rgb(0,0,0);
  background: linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 30%, rgba(0,0,0,0) 100%);
  display: flex;
  align-items: center;
`;

export const HeroBannerDetails = styled.div`
  font-size: 1.6em;
  margin-left: 4vw;
  width: 37vw;
`;

// export const ScrollContainer = styled.div`
//   overflow-x: scroll;
//   overflow-y: hidden;
//   width: auto;
// `;
