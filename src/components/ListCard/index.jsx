import PendencyCard from "../../components/PendencyCard";

const ListCard = ({ patient }) => {
  console.log(patient);
  return patient.patientRequest.map((res, index) => {
    return (
      <PendencyCard
        key={index}
        name={patient.name}
        description={res.description}
        confirmed={res.isConfirm}
      />
    );
  });
};

export default ListCard;
