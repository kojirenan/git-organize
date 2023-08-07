import Card from 'components/Card';
import './Team.css';
import useUserList from 'hooks/useUserList';

const Team = ({ teamName, color, secundaryColor }) => {
  const users = useUserList();
  const usersTeam = users.filter(user => user.team === teamName);
  return (
    usersTeam.length > 0 && (
      <section className="team" style={{ backgroundColor: secundaryColor }}>
        <h3 style={{ borderColor: color }}>{teamName}</h3>
        <div className="members">
          {users.map(user => (
            <Card key={user.id} {...user} />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
