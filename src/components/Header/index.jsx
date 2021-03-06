import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import { StyledHeader } from "./styles";
import HamburguerMenu from "../HamburguerMenu";
import MobileMenu from "../MobileMenu";

import logo from "../../assets/logo.png";

const Header = ({ menuItems, paths }) => {
  const history = useHistory();
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const setClosed = () => {
    setIsMenuClosed(!isMenuClosed);
  };

  return (
    <>
      <StyledHeader isMenuClosed={isMenuClosed}>
        <div className="container">
          <img src={logo} alt="Logo Med-K" onClick={() => history.push("/")} />
          <nav>
            <HamburguerMenu setClosed={setClosed} isMenuClosed={isMenuClosed} />
            <ul>
              {menuItems.map((value, index) => (
                <li key={index} onClick={() => history.push(paths[index])}>
                  {value}
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => {
              localStorage.clear();
              history.push("/");
              document.location.reload(true);
            }}
          >
            <FiLogOut />
          </button>
        </div>
      </StyledHeader>
      <MobileMenu
        isMenuClosed={isMenuClosed}
        setClosed={setClosed}
        menuItems={menuItems}
        paths={paths}
      />
    </>
  );
};

export default Header;
