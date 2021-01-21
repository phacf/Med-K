import { StyledContent } from "./styles";

const PageContent = ({ children }) => {
  return (
    <StyledContent>
      <div>{children}</div>
    </StyledContent>
  );
};

export default PageContent;
