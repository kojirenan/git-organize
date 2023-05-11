import "./Card.css";
import { TbCircleX } from "react-icons/tb";

const Card = ({ name, image, office, onDelete, id }) => {
  return (
    <div className="card">
      <TbCircleX
        size={30}
        color="white"
        className="delete"
        onClick={() => onDelete(id)}
      />
      <img src={image} alt={name} />
      <div className="info">
        <h4>{name}</h4>
        <p>{office}</p>
      </div>
    </div>
  );
};

export default Card;
