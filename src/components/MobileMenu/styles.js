import styled from "styled-components";

import { colors } from "../../styles/colors";

export const StyledMobileMenu = styled.div`
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  z-index: 1;
  transition: 0.3s ease;
  left: ${({ isMenuClosed }) => (isMenuClosed ? "100%" : "0")};
  background-color: ${colors.blue1};
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  ul {
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  ul li {
    width: 100%;
    height: 33%;
    border-bottom: 1px solid ${colors.gray1};
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    color: ${colors.blue4};
    font-size: 1.5rem;
  }
  ul li:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
