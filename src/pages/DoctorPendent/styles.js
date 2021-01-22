import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: ${(props) => (props.empty ? "center" : "space-between")};
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
  margin: 0 auto;
  padding-top: ${(props) => (props.empty ? "50px" : "0")};

  @media screen and (min-width: 768px) {
    width: 95%;
  }
`;
