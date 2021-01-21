import { Card, Empty } from "antd";

const setCardHistory = ({ history }) => {
  return (
    <div className="scroll-history">
      {history.consultations ? (
        history.consultations.map((consult, index) => (
          <Card
            key={index}
            title={consult.type}
            bordered={true}
            style={{ width: 300, margin: 10 }}
          >
            <p
              className="data-consult"
              style={{ fontVariant: "small-caps", fontSize: 12 }}
            >
              DATA:{" "}
              {consult.data && /[A-Za-z]/.test(consult.data)
                ? consult.data
                    .replace(/[A-Z].*Z/, "")
                    .split("-")
                    .reverse()
                    .join("-")
                : consult.data}
            </p>
            <p>
              Descrição:{" "}
              {consult.description ? consult.description : "Sem descrição"}
            </p>
          </Card>
        ))
      ) : (
        <Empty description="Sem histórico" />
      )}
    </div>
  );
};

export default setCardHistory;
