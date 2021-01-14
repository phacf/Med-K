import MenuDoctor from "./menu/doctor-menu";
import MenuPatient from "./menu/patient-menu";
import { GlobalStyle, Display } from "./styles/global";
import { getPatientInfoThunk } from "./store/modules/user/thunk";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() =>
          dispatch(
            getPatientInfoThunk({
              email: "jogod@ksks.com",
              password: "jackzinho",
            })
          )
        }
      ></button>
      <MenuDoctor />
      <MenuPatient />
      <GlobalStyle />
    </>
  );
}

export default App;
