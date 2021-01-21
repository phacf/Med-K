import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  color: ${colors.gray2};

  @media screen and (min-width: 768px) {
    width: 95%;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: ${colors.blue1};
`;
export const SectionForm = styled.section`
  width: 50%;
  h2 {
    text-align: center;
    padding: 10px;
    margin-left: 15%;
    color: ${colors.gray2};
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

  label.ant-form-item-required {
    color: ${colors.gray2};
  }

  @media (max-width: 780px) {
    width: 320px;
  }
`;

export const NewSelect = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  h2 {
    margin: 0 10px 0 0;
    color: ${colors.gray2};
    font-variant: small-caps;
  }
`;
