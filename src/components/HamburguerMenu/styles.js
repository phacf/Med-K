import styled from "styled-components";

import { colors } from "../../styles/colors";

export const MenuContainer = styled.div`
  width: 28px;
  height: 21px;
  cursor: pointer;

  .stripe {
    width: 100%;
    height: 2.5px;
    background-color: ${colors.blue4};
  }

  .stripe:first-child {
    transition: 0.3s ease;
    transform: ${({ isMenuClosed }) =>
      isMenuClosed ? "translateY(0)" : "translateY(9px) rotateZ(-45deg)"};
  }

  .stripe:nth-child(2) {
    transition: 0.3s ease;
    transform: translateY(7px);
    opacity: ${({ isMenuClosed }) => (isMenuClosed ? "1" : "0")};
  }

  .stripe:last-child {
    transition: 0.3s ease;
    transform: ${({ isMenuClosed }) =>
      isMenuClosed ? "translateY(14px)" : "translateY(4px) rotate(45deg)"};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
