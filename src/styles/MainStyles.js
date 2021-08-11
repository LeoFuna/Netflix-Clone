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
