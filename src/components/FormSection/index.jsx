import { StyledMain, Content } from "./styles";

const FormSection = ({ children }) => {
  return (
    <StyledMain>
      <Content>{children}</Content>
    </StyledMain>
  );
};

export default FormSection;
