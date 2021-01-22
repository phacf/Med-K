import styled from "styled-components";

import { colors } from "../../styles/colors";

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: ${colors.blue1};
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.3);

  img {
    width: 50px;
  }

  ul,
  li,
  a {
    display: none;
  }

  .container {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    height: 80px;

    .container {
      width: 95%;
    }

    img {
      cursor: pointer;
    }

    ul {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    li {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      font-size: 1rem;
      color: ${colors.gray2};
      cursor: pointer;
    }

    li:hover {
      transition: 0.3s;
      color: ${colors.blue4};
    }
  }
`;