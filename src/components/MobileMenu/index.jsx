import { useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import { StyledMobileMenu, ButtonContainer } from "./styles";

const MobileMenu = ({ isMenuClosed, setClosed, menuItems, paths }) => {
  const history = useHistory();
  return (
    <StyledMobileMenu isMenuClosed={isMenuClosed}>
      <nav>
        <ul>
          {menuItems.map((value, index) => (
            <li
              key={index}
              onClick={() => {
                history.push(paths[index]);
                setClosed();
              }}
            >
              {value}
            </li>
          ))}
        </ul>
      </nav>
      <ButtonContainer>
        <button
          onClick={() => {
            localStorage.clear();
            history.push("/");
            document.location.reload(true);
          }}
        >
          <FiLogOut />
        </button>
      </ButtonContainer>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
