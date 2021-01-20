import Bounce from "react-reveal/Bounce";

import { StyledContent } from "./styles";

const WelcomeContent = ({ isDoctor }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <StyledContent>
      <Bounce left>
        <h1>
          Bem vindo(a),
          <br />
          {userInfo.type === "medic"
            ? `Dr(a). ${userInfo.name.split(" ")[0]}`
            : `Sr(a) ${userInfo.name.split(" ")[0]}`}
        </h1>
      </Bounce>
    </StyledContent>
  );
};

export default WelcomeContent;
