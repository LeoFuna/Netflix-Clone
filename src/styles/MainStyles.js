import styled from "styled-components";

export const HeaderMainDiv = styled.header`
  display: flex;
  position: fixed;
  background-color: transparent;
  z-index: 2;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const HeaderContainer = styled.div`
  width: 47vw;
  margin-left: 2vw;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 32%, rgba(0,0,0,0) 100%);
  display: flex;
  align-items: center;
  color: white;
`; 

export const HeaderContainerRight = styled(HeaderContainer)`
  justify-content: flex-end;
`;

export const UlFromHeader = styled.ul`
  display: flex;
  color: white;
`;

export const LiFromHeader = styled.li`
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : "initial" };
  list-style: none;
  margin: 15px;
`;

export const SearchBar = styled.input`
  display: ${({ display }) => display};
`;

export const HeroBannerImage = styled.div`
    background-image: url(${ ({ image }) => image });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 5%;
    width: 100vw;
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
