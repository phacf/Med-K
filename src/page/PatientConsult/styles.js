import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 80vh;

  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  h1 {
    margin: 3% 0 5% 0;
  }

  .container_button {
    cursor: pointer;
    margin-top: 5%;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 10px;
    width: 150px;
    box-shadow: 3px 3px 4px #b0b0b0, -1px 1px 4px #b0b0b0;
  }
`;

export const Section = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
`;

export const Date = styled.section`
  border: 1px solid black;
  width: 20%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  button {
    background-color: transparent;
    margin: 10%;
    font-size: 1rem;
    border: none;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const DescriptionDate = styled.div`
  text-align: justify;
  border: 1px solid black;
  width: 70%;
  word-wrap: break-word;
  overflow: auto;

  p {
    margin: 2% 0 0 1.2%;
  }
`;
