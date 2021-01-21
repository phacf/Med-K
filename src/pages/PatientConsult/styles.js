import styled from "styled-components";

export const Page = styled.div`
  width: 90%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 95%;
    min-height: calc(100vh - 80px);
  }
`;
export const Container = styled.div`
  width: 80vw;
  height: 80vh;
  text-align: center;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  h1 {
    margin: 3% 0 5% 0;
  }
`;

export const Section = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Date = styled.section`
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

  @media (max-width: 768px) {
    width: 90%;
    height: 20%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 2%;
    button {
      margin: 0;
      margin-left: 10px;
    }
  }
`;

export const DescriptionDate = styled.div`
  text-align: justify;
  width: 70%;
  word-wrap: break-word;
  overflow: auto;

  p {
    margin: 2% 0 0 1.2%;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 70%;
  }
`;

export const Notification = styled.div`
  width: 100px;
  height: 100px;
  animation-name: showNotification;
  animation-duration: 0.3s;

  @keyframes showNotification {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
