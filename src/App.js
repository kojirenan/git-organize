import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import useTeamList from './hooks/useTeamList';
import hexToRgba from 'hex-to-rgba';

function App() {
  // const users = useRecoilValue(listUsers);
  // const acessUsers = JSON.parse(localStorage.getItem('@organo-users')) || users;

  // useEffect(() => {
  //   localStorage.setItem('@organo-users', JSON.stringify(users));
  // }, [users]);
  const teams = useTeamList();

  return (
    <div className="App">
      <Banner />
      <Form />
      {teams.map(team => (
        <Team key={team.id} teamName={team.name} color={team.color} secundaryColor={hexToRgba(team.color, 0.5)} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
