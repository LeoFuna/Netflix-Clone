import styled from "styled-components";

export const HeaderMainDiv = styled.header`
  display: flex;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const HeaderContainer = styled.div`
  width: 50vw;
  background-color: black;
  display: flex;
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

export const HeroBannerImage = styled.div`
    background-image: url(${ ({ image }) => image });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 15%;
    width: 99.21vw;
    height: 700px;
    display: flex;
    align-items: center;
`;

export const HeroBannerDetails = styled.div`
  font-size: 1.6em;
  margin-left: 4vw;
  width: 37vw;
`;
