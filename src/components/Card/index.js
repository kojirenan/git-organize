import './Card.css';
import { TbCircleX } from 'react-icons/tb';
import { FaGithubSquare } from 'react-icons/fa';
import useDeleteUserToList from '../../hooks/useDeleteUserToList';

const Card = ({ id, name, avatar_url, login, office, followers, public_repos }) => {
  const deleteUser = useDeleteUserToList();
  return (
    name !== 0 && (
      <div className="card">
        <TbCircleX size={30} color="white" className="delete" onClick={() => deleteUser(id)} />
        <img src={avatar_url} alt={name} />
        <div className="info">
          <h4>{name}</h4>
          <div className="card-link">
            <FaGithubSquare size={30} color="rgba(244, 19, 100, 1)" />
            <a href={`https://github.com/${login}`} target="_blank" rel="noreferrer">
              {login}
            </a>
          </div>
          <h5>{office}</h5>
          <p>{`Seguidores: ${followers}`}</p>
          <p>{`Repositórios: ${public_repos}`}</p>
        </div>
      </div>
    )
  );
};

export default Card;
