import { Link, useHistory } from "react-router-dom";

export default function MenuPatient() {
  const divStyle = {
    height: "85vh",
    width: "50vw",
    backgroundColor: "white",
    color: "black",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  };

  const divStyle1 = {};

  const divStyle2 = {};

  const divStyle3 = {};

  const divStyle4 = {};

  const divStyle5 = {};

  const divStyle6 = {};

  const history = useHistory();

  return (
    <div style={divStyle}>
      <h1>Bem-vindo ao Medi-k</h1>
      <div>
        <div>
          <Link to="/rick-and-morty-characters">Historico de Consultas</Link>
        </div>
        <div>
          <button onClick={() => history.push(`/patient/exam/${id}`)}>
            Resultados de exames
          </button>
        </div>
        <div>
          <Link to="/rick-and-morty-characters">Carteira de vacinação</Link>
        </div>
        <div>
          <Link to="/rick-and-morty-characters">
            Solicitar agendamento de consulta
          </Link>
        </div>
        <div>
          <Link to="/rick-and-morty-characters">
            Solicitar agendamento de exame
          </Link>
        </div>
        <div>
          <Link to="/rick-and-morty-characters">
            Informações gerais do sistema de saúde
          </Link>
        </div>
      </div>
      <div>Sair</div>
    </div>
  );
}
