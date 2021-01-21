import { StyledContent } from "./styles";

const WelcomeContent = ({ isDoctor }) => {
  return (
    <StyledContent isDoctor={isDoctor}>
      <h1>
        Bem vindo(a),
        <br />
        {isDoctor ? "Dr(a)." : "Sr(a)"} Claudio
      </h1>
    </StyledContent>
  );
};

export default WelcomeContent;
