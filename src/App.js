import Banner from "./components/Banner";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";
import hexToRgba from "hex-to-rgba";

function App() {
  const teams = [
    {
      name: "Front-end",
      color: "#020659",
    },
    {
      name: "Back-End",
      color: "#8C144C",
    },
    {
      name: "FullStack",
      color: "#725EF2",
    },
    {
      name: "Mobile",
      color: "#F2E205",
    },
    {
      name: "DataScience",
      color: "#595959",
    },
  ];

  const acessUsers = JSON.parse(localStorage.getItem("@organo-users")) || [
    {
      id: uuidv4(),
      name: "Renan Koji",
      office: "Dev-Júnior",
      image: "https://github.com/kojirenan.png",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "Diego Fernandes",
      office: "CTO",
      image: "https://github.com/diego3g.png",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "Mayk Brito",
      office: "Professor",
      image: "https://github.com/maykbrito.png",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "Karina Candido",
      office: "Dev-Júnior",
      image: "https://github.com/karinapcandido.png",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "Paulo Silveira",
      office: "CEO",
      image: "https://github.com/peas.png",
      team: teams[2].name,
    },
  ];

  const [users, setUsers] = useState([...acessUsers]);
  const onAddNewuser = (user) => {
    setUsers([...users, user]);
  };

  useEffect(() => {
    localStorage.setItem("@organo-users", JSON.stringify(users));
  }, [users]);

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onRegistereduser={(user) => onAddNewuser(user)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          teamName={team.name}
          color={team.color}
          secundaryColor={hexToRgba(team.color, 0.5)}
          users={users.filter((user) => user.team === team.name)}
          onDelete={deleteUser}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
