import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secundaryColor: "#D9F7E9"
    },
    {
      name: "Front-end",
      primaryColor: "#82CFFA",
      secundaryColor: "#E8F8FF"
    },
    {
      name: "Data-Science",
      primaryColor: "#A6D157",
      secundaryColor:"#F0F8E2"
    },
    {
      name: "Dev-Ops",
      primaryColor: "#E06B69",
      secundaryColor: "#FDE7E8"
    },
    {
      name: "UX e UI",
      primaryColor: "#DB6EBF",
      secundaryColor: "#FAE9F5"
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secundaryColor: "#FFF5D9"
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF"
    }
  ]

  const [employees, setEmployees] = useState([]);
  const onAddNewEmployee = (employee) => {
    setEmployees([...employees, employee]);
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teams={teams.map(team => team.name)}
        onRegisteredEmployee={employee => onAddNewEmployee(employee)} 
      />
      {teams.map(team => <Team 
        key={team.name} 
        teamName={team.name} 
        primaryColor={team.primaryColor} 
        secundaryColor={team.secundaryColor} 
        employees={employees.filter(employee => employee.team === team.name)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
