import { StyledPageTitle } from "./styles";

const PageTitle = ({ title }) => {
  return (
    <StyledPageTitle>
      <h1>{title}</h1>
      <hr />
    </StyledPageTitle>
  );
};

export default PageTitle;
