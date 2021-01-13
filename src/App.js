import MenuDoctor from "./menu/doctor-menu";
import MenuPatient from "./menu/patient-menu";
import { GlobalStyle, Display } from "./styles/global";

function App() {
  return (
    <>
      <MenuDoctor />
      <MenuPatient />
      <GlobalStyle />
    </>
  );
}

export default App;
