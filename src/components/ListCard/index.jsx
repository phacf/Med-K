import PendencyCard from "../../components/PendencyCard";

const ListCard = ({ patient }) => {
  return patient.patientRequests.map((res, index) => (
    <PendencyCard key={index} patient={patient} request={res} />
  ));
};

export default ListCard;
