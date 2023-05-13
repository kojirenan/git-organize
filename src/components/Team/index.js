import Card from "../Card";
import "./Team.css";

const Team = (props) => {
  return (
    props.users.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secundaryColor }}
      >
        <h3 style={{ borderColor: props.color }}>{props.teamName}</h3>
        <div className="members">
          {props.users.map((user) => (
            <Card
              id={user.id}
              key={user.id}
              name={user.name}
              login={user.login}
              image={user.image}
              repositories={user.public_repos}
              followers={user.followers}
              office={user.office}
              onDelete={props.onDelete}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
