import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 90px;
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const SectionForm = styled.section`
  width: 50%;
  h2 {
    text-align: center;
    padding: 10px;
  }
  div.scroll-history {
    height: 45vh;
    overflow-y: ${(props) => (props.scroll ? "auto" : "hidden")};
  }
`;
