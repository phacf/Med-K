import Slide from "react-reveal/Slide";

import { StyledVaccinesContent } from "./styles";

import Card from "../../components/VaccinesCard";

export default function PageVaccines() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div style={{ width: "100%" }}>
      <Slide bottom>
        <StyledVaccinesContent>
          {userInfo.vaccines ? (
            userInfo.vaccines.map((value, index) => (
              <Card
                local={value.local}
                type={value.type}
                date={value.date}
                next={value.next}
                key={index}
              />
            ))
          ) : (
            <h1>Nenhuma informação encontrada</h1>
          )}
        </StyledVaccinesContent>
      </Slide>
    </div>
  );
}
