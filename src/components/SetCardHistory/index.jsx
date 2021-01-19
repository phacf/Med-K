import { Card } from "antd";

const setCardHistory = ({ history }) => {
  return (
    <div className="scroll-history">
      {history.consultations ? (
        history.consultations.map((consult, index) => (
          <Card
            key={index}
            title={consult.type}
            bordered={true}
            style={{ width: 350, margin: 10 }}
          >
            <p className="data-consult">
              {consult.data && /[A-Za-z]/.test(consult.data)
                ? consult.data
                    .replace(/[A-Z].*Z/, "")
                    .split("-")
                    .reverse()
                    .join("-")
                : consult.data}
            </p>
            <p>{consult.description ? consult.description : "Sem descrição"}</p>
          </Card>
        ))
      ) : (
        <p>Sem histórico</p>
      )}
    </div>
  );
};

export default setCardHistory;
