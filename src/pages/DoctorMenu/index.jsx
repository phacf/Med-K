import { useHistory, Link } from "react-router-dom";

const MenuDoctor = () => {
  const history = useHistory();
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

  return (
    <div style={divStyle}>
      <h1>Bem-vindo ao Medi-k Doutor</h1>
      <div>
        <div>
          <Link to="/">Resultados de exames</Link>
        </div>
        <div>
          <Link to="/">Carteira de vacinação</Link>
        </div>
        <div>
          <Link to="/">Solicitar agendamento de consulta</Link>
        </div>
        <div>
          <Link to="/">Solicitar agendamento de exame</Link>
        </div>
      </div>
      <div>Sair</div>
    </div>
  );
};
export default MenuDoctor;
