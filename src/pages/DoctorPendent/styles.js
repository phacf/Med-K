import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 95%;
    min-height: calc(100vh - 80px);
  }
`;

export const CardsContainer = styled.div`
  height: 100%;
  min-height: calc(100vh - 164px);
  display: flex;
  justify-content: ${(props) => (props.empty ? "center" : "space-between")};
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
  margin: 0 auto;
`;
