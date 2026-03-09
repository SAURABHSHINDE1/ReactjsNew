import "./studentcard.css";
import data from "../studentdata.json";
import Card from "./card";
const StudentCard = () => {
  return (
    <>
      {data.map((elem, index) => {
        return (
        <Card key={index} elem={elem}/>
        );
      })}
    </>
  );
};

export default StudentCard;
