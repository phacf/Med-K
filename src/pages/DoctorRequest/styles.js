import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 10px auto;
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: rgba(234, 234, 258, 0.3);
`;
export const SectionForm = styled.section`
  width: 50%;
  h2 {
    text-align: center;
    padding: 10px;
    font-variant: small-caps;
    text-decoration: underline;
  }
  div.scroll-history {
    height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: ${(props) => (props.scroll ? "auto" : "hidden")};
  }
  div.ant-radio-group {
    text-align: center;
    /* margin: 0 auto; */
    /* align-items: center; */
    width: 100%;
    padding: 5px;
  }
  @media (max-width: 780px) {
    width: 320px;
    border-top: ${(props) =>
      props.scroll ? "hidden" : " 1px solid rgb(193, 206, 255)"};
  }
`;

export const TitlePage = styled.div`
  margin: 5px 0 20px;
  h1 {
    font-size: 36px;
    font-variant: small-caps;
  }
  hr {
    margin-top: 0;
    padding-top: 0;
    border-color: rgb(193, 206, 255);
  }
`;

export const NewSelect = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  h2 {
    margin: 0 10px 0 0;
    font-variant: small-caps;
  }
`;
