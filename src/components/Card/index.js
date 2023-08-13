import styles from './Card.module.css';
import { TbCircleX } from 'react-icons/tb';
import { FaGithubSquare } from 'react-icons/fa';
import useDeleteUserToList from 'hooks/useDeleteUserToList';

const Card = ({ id, name, avatar_url, login, office, followers, public_repos }) => {
  const deleteUser = useDeleteUserToList();
  return (
    name !== 0 && (
      <div className={styles.card}>
        <TbCircleX size={30} color="white" className={styles.delete} onClick={() => deleteUser(id)} />
        <img src={avatar_url} alt={name} />
        <div className={styles.info}>
          <h4>{name}</h4>
          <div className={styles['card-link']}>
            <FaGithubSquare className={styles.icon} color="rgba(244, 19, 100, 1)" />
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
