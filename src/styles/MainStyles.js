import styled, { keyframes } from "styled-components";

export const HeaderMainDiv = styled.header`
  display: flex;
  position: fixed;
  height: 90px;
  background-color: transparent;
  z-index: 2;
`;

export const Logo = styled.img`
  width: 100px;
  margin-left: 20px;
  cursor: pointer;
`;

const animationTransparecyHeader = keyframes`
  0% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 32%, rgba(0,0,0,1) 100%);
  }
  10% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 32%, rgba(0,0,0,0.9) 100%);
  }
  20% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.90) 32%, rgba(0,0,0,0.80) 100%);
  }
  30% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 32%, rgba(0,0,0,0.7) 100%);
  }
  40% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.80) 32%, rgba(0,0,0,0.6) 100%);
  }
  50% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 32%, rgba(0,0,0,0.5) 100%);
  }
  60% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 32%, rgba(0,0,0,0.4) 100%);
  }
  70% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 32%, rgba(0,0,0,0.3) 100%);
  }
  80% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 32%, rgba(0,0,0,0.2) 100%);
  }
  90% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 32%, rgba(0,0,0,0.1) 100%);
  }
  100% {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 32%, rgba(0,0,0,0) 100%);
  }
`;

export const HeaderContainer = styled.div`
  width: 47.6vw;
  padding-left: 2vw;
  background: rgb(0,0,0);
  animation: ${ ({ transparencyOnHeader }) => transparencyOnHeader ? animationTransparecyHeader : '' };
  animation-duration: ${ ({ transparencyOnHeader }) => transparencyOnHeader ? '0.4s' : '' };
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
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
  font-weight: ${({ isBold }) => isBold ? "900" : "initial" };
  text-transform: capitalize;
  list-style: none;
  margin: 15px;
  cursor: pointer;
  &:hover {
    color: rgba(255,255,255,0.9);
  }
`;

export const DivSearchBar = styled.div`
  background-color: ${ ({ isOpen }) => isOpen ? 'black' : 'transparent' };
  border: ${ ({ isOpen }) => isOpen ? '1px solid white' : 'transparent' };
  padding: 6px 9px;
  margin-right: 30px;
  display: flex;
`;

const SearchBarAnimationOpen = keyframes`
  from {
    width: 10px;
  }
  to {
    width: 250px;
  }
`;

const SearchBarAnimationClose = keyframes`
  from {
    width: 250px;
  }
  to {
    width: 10px;
  }
`;

export const SearchBar = styled.input`
  display: ${({ isVisible }) => isVisible ? '' : 'none' };
  background-color: inherit;
  color: white;
  border: none;
  animation: ${ SearchBarAnimationOpen };
  animation: ${ ({ readyToCloseSearchBar }) => readyToCloseSearchBar ? SearchBarAnimationClose : '' };
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
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
    width: 98.95vw;
    height: 960px;
    @media only screen and (min-width: 1680px) {
    width: 99.2vw;
    }
    @media only screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 99.1vw;
    }
`;

export const GradientOnBannerContainer = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
  background: linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 30%, rgba(0,0,0,0) 100%);
  display: flex;
  align-items: center;
`;

export const HeroBannerDetails = styled.div`
  margin-top: 90px;
  font-size: 1.5em;
  margin-left: 4vw;
  width: 37vw;
`;

export const HeroBannerTitle = styled.h1`
  color: white;
  text-transform: capitalize;
  font-size: 2.7em;
`;

export const HeroBannerOverview = styled.p`
  color: white;
  font-size: 0.83em;
`;

export const HeroBannerVotes = styled.p`
  color: #46d369;
  font-size: 1em;
  font-weight: bolder;
`;

export const HeroBannerButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  font-size: 0.8em;
  font-weight: bolder;
  margin-left: ${({ setMarginLeft }) => setMarginLeft};
  width: ${({ setWidth }) => setWidth};
  background-color: ${({isDetailButton}) => isDetailButton ? 'rgba(109, 109, 110, 0.7)' : 'white' };
  color: ${({isDetailButton}) => isDetailButton ? 'white' : 'black' };
  border-radius: 8px;
  border-width: 2px;
  border: 2px solid rgba(0,0,0,0);
  &:focus {
    border: 2px solid rgba(0,0,0,1);
    box-shadow: 0 0 0 1.5pt white;
  }
  &:hover {
    background-color: ${({isDetailButton}) => isDetailButton ? 'rgba(109, 109, 110, 0.6)' : 'rgba(255,255,255,0.8)'};
  }
  & > p {
    margin-left: 12px;
  }
`;

export const MainDivCarousel = styled.div`
  display: flex;
  flex-direction: column;
  width: 98.95vw;
  background-color: black;
  @media only screen and (min-width: 1680px) {
  width: 99.2vw;
  }
  @media only screen and (min-width: 1440px) and (max-width: 1680px) {
  width: 99.1vw;
  }
`;

export const ButtonCarrousel = styled.button`
  color: ${({ toggleDivCarousel }) => toggleDivCarousel ? 'rgba(244,244,240,0.4)' : 'rgba(0,0,0,0.4)'};
  font-size: 35px;
  font-weight: bolder;
  position: absolute;
  right: -1px;
  width: 5vw;
  height: 14.1vw;
  top: 1.4vw;
  background-color: rgba(0,0,0,0.4);
  border: none;
  z-index: 1;
  transition:font-size 0.5s;
  -moz-transition:font-size 0.5s; /* Firefox 4 */
  -webkit-transition:font-size 0.5s; /* Safari and Chrome */
  -o-transition:font-size 0.5s;
  &:hover {
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 40px;
  }
  @media only screen and (min-width: 1680px) {
    top: 1.05vw;
  }
  @media only screen and (min-width: 1440px) and (max-width: 1680px) {
    top: 1.2vw;
  }
`;

export const PosterCarousel = styled.img`
  width: 10vw;
  height: 14vw;
  &:hover {
    position: absolute;
    border: 2px solid rgba(244,244,240,0.4);
  }
`;

export const CursorSpanCarousel = styled.span`
  color: rgb(0,0,0);
  font-size: 0.6em;
  display: block;
`;

const ShowingText = keyframes`
  from { 
    color: rgb(0,0,0);
    margin-left: 0em;
  }
  to {
    color: white;
    margin-left: 0.75em;
  }
`;

const HiddingText = keyframes`
  from { 
    color: white;
    margin-left: 0.75em;
  }
  to {
    color: rgb(0,0,0);
    margin-left: 0em;
  }
`;

export const HeaderCarousel = styled.h1`
  display: flex;
  align-items: center;
  color: white;
  font-size: 28px; 
  width: fit-content;
  margin-left: 3vw;
  margin-bottom: -3.5vh;
  ${CursorSpanCarousel} {
    animation: ${({ toggleCursor }) => toggleCursor ? HiddingText : ''};
    animation-duration: ${({ toggleCursor }) => toggleCursor ? '0.8s' : '0s'};
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  &:hover {
    cursor: pointer;
    ${CursorSpanCarousel} {
      animation: ${ShowingText};
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
  }
`;

export const DetailsDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000000;
  height: 100vh;
  width: 100vw;
  display: ${ ({ showDetails }) => showDetails ? 'flex' : 'none' };
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(14px);
  & > .main-div-details {
    width: 80vw;
    height: 90vh;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    color: white;
    & > .description-details {
      background-color: #141414;

    }
  }
`;

export const ImageBackgroundOnDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  background-image: url(${ ({ imageDetails }) => imageDetails !== 'https://image.tmdb.org/t/p/originalnull'  ? imageDetails : `http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg` });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0%;
  width: 80vw;
  height: 90vh;
  border-radius: 15px;

  & > .gradient-div {
    width: 80vw;
    background: linear-gradient(360deg, rgba(20, 20, 20, 1) 0%, rgba(20,20,20,1) 45%, rgba(20,20,20,0) 100%);
    display: flex;
    flex-direction: column;
    & > .up-div-details {
      height: 50%;
      display: flex;
      & > .right-up-div {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        & > .exit-button {
          align-self: flex-start;
          margin: 15px;
          font-size: 2.5em;
          color: white;
          background-color: transparent;
          border-style: none;
          & :hover {
            color: black;
          }
        }
      }
      & > .left-up-div {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & > .title-details {
          height: 80%;
          align-self: flex-start;
          display: flex;
          align-items: flex-end;
          & > h1 {
            margin-left: 0.95em;
            font-size: 2.8em;
            -webkit-text-stroke: 1.5px black;
            @media only screen and (min-width: 1680px) {
              font-size: 3.2em;
            }
          }
        }
        & > div {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 85%;
          height: 15%;
            & > .thumbs-button {
              width: 3em;
              height: 3em;
              margin: 10px 0px 10px 10px;
              border-color: rgba(255,255,255,.5);
              border-radius: 50%;
              border-width: 2px;
              background-color: rgba(42,42,42,.6);
              color: rgba(255,255,255,.5);
              font-size: 1em;
            }
            & > .watch-after-details-button {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1em;
              font-weight: bolder;
              width: 200px;
              height: 3em;
              background-color:  white;
              color: black;
              border-radius: 8px;
              border-width: 2px;
              border: 2px solid rgba(0,0,0,0);
              &:focus {
                border: 2px solid rgba(0,0,0,1);
                box-shadow: 0 0 0 1.5pt white;
              }
              &:hover {
                background-color: rgba(255,255,255,0.8);
              }
              & > p {
                margin-left: 12px;
              }
            }
        }
      }
    }
    & > .down-div-details {
      height: 50%;
      display: flex;
      & > .right-down-div {
        height: 100%;
        width: 50%;
        margin-top: 1.4em;
        margin-left: 1em;
        margin-right: 1.5em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        font-size: 1.1em;
      }
      & > .left-down-div {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        & > .overview-details {
          margin-left: 2.5em;
          margin-right: 2em;
          font-size: 1em;
          @media only screen and (min-width: 1680px) {
            font-size: 1.2em;
          }
          @media only screen and (min-width: 1440px) and (max-width: 1680px) {
            font-size: 1.1em;
          }
        }
        & > .tags-details {
          display: flex;
          margin-top: 2em;
          & > p {
            margin: 5px;
            margin-left: 2.5em;
            font-size: 1.3em;
          }
          & > .relevance-details {
            color: #46d369;
            font-size: 1.3em;
            font-weight: bolder;
          }
        }
      }
    }
  }
`;
