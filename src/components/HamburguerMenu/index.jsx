import { MenuContainer } from "./styles";

const HamburguerMenu = ({ setClosed, isMenuClosed }) => {
  return (
    <MenuContainer isMenuClosed={isMenuClosed} onClick={setClosed}>
      <div className="stripe"></div>
      <div className="stripe"></div>
      <div className="stripe"></div>
    </MenuContainer>
  );
};

export default HamburguerMenu;
