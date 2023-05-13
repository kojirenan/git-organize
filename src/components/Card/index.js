import "./Card.css";
import { TbCircleX } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

const Card = ({
  name,
  login,
  repositories,
  followers,
  image,
  office,
  onDelete,
  id,
}) => {
  return (
    name !== 0 && (
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
          <div className="card-link">
            <FaGithubSquare size={30} color="rgba(244, 19, 100, 1)" />
            <a
              href={`https://github.com/${login}`}
              target="_blank"
              rel="noreferrer"
            >
              {login}
            </a>
          </div>
          <h5>{office}</h5>
          <p>{`Seguidores: ${followers}`}</p>
          <p>{`Repositórios: ${repositories}`}</p>
        </div>
      </div>
    )
  );
};

export default Card;
