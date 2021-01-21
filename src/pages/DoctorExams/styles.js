import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 90px;
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
`;
export const SectionData = styled.section`
  width: 30%;
  text-align: center;
  h2 {
    text-align: center;
    padding: 10px;
  }
  div.scroll-history {
    height: 45vh;
    overflow-y: ${(props) => (props.scroll ? "auto" : "hidden")};
  }
  div button {
    text-decoration: underline;
  }
`;

export const SectionDescription = styled.section`
  width: 70%;
  h2 {
    text-align: center;
    padding: 10px;
  }
  div.scroll-history {
    height: 45vh;
    overflow-y: ${(props) => (props.scroll ? "auto" : "hidden")};
  }
  div h3 {
    font-size: 20px;
  }
  div h4 {
    font-variant: all-small-caps;
    font-weight: bold;
  }
  div p {
    text-indent: 20px;
    margin: 20px 10px;
  }
`;
