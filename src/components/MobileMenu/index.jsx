import { useHistory } from "react-router-dom";

import { StyledMobileMenu } from "./styles";

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
    </StyledMobileMenu>
  );
};

export default MobileMenu;
