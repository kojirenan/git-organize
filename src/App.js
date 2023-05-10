import Banner from "./components/Banner";
import Form from "./components/Form";
import { useState } from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secundaryColor: "#D9F7E9",
    },
    {
      name: "Front-end",
      primaryColor: "#82CFFA",
      secundaryColor: "#E8F8FF",
    },
    {
      name: "Data-Science",
      primaryColor: "#A6D157",
      secundaryColor: "#F0F8E2",
    },
    {
      name: "Dev-Ops",
      primaryColor: "#E06B69",
      secundaryColor: "#FDE7E8",
    },
    {
      name: "UX e UI",
      primaryColor: "#DB6EBF",
      secundaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secundaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF",
    },
  ];

  const acessUsers = [
    {
      name: "Renan Koji",
      office: "Dev-Júnior",
      image: "https://github.com/kojirenan.png",
      team: teams[6].name,
    },
    {
      name: "Diego Fernandes",
      office: "CTO",
      image: "https://github.com/diego3g.png",
      team: teams[6].name,
    },
    {
      name: "Mayk Brito",
      office: "Professor",
      image: "https://github.com/maykbrito.png",
      team: teams[0].name,
    },
    {
      name: "Karina Candido",
      office: "Dev-Júnior",
      image: "https://github.com/karinapcandido.png",
      team: teams[1].name,
    },
    {
      name: "Paulo Silveira",
      office: "CEO",
      image: "https://github.com/peas.png",
      team: teams[6].name,
    },
  ];

  const [users, setusers] = useState([...acessUsers]);
  const onAddNewuser = (user) => {
    setusers([...users, user]);
  };

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
          primaryColor={team.primaryColor}
          secundaryColor={team.secundaryColor}
          users={users.filter((user) => user.team === team.name)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
