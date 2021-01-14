import MenuDoctor from "./menu/doctor-menu";
import MenuPatient from "./menu/patient-menu";
import { GlobalStyle, Display } from "./styles/global";

import Routes from "./routes";

function App() {
  return (
    <>
      <MenuDoctor />
      <MenuPatient />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
