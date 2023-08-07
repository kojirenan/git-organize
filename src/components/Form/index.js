import './Form.css';
import InputText from 'components/InputText';
import SelectList from 'components/SelectList';
import Button from 'components/Button';
import { useState } from 'react';
import useTeamList from 'hooks/useTeamList';
import useUserSearch from 'hooks/useUserSearch';
import useAddUserToList from 'hooks/useAddUserToList';

const Form = () => {
  const [user, setUser] = useState('');
  const [office, setOffice] = useState('');
  const [team, setTeam] = useState('');
  const [visible, setVisible] = useState('notVisible');

  const userSearch = useUserSearch();
  const addUser = useAddUserToList();
  const teams = useTeamList();

  const saveForm = async e => {
    e.preventDefault();
    const newUser = await userSearch(user);
    if (newUser !== 0) {
      addUser(newUser, team, office);
      setVisible('isNotVisible');
    } else {
      setVisible('isVisible');
    }

    setUser('');
    setOffice('');
    setTeam('');
  };

  return (
    <section className="form">
      <form onSubmit={saveForm}>
        <h2>Preencha os dados para criar o card do usuário.</h2>
        <InputText
          required={true}
          label="GitHub username"
          placeholder="Digite o username do GitHub"
          value={user}
          onChange={value => setUser(value)}
        />
        <InputText required={true} label="Cargo" placeholder="Digite o cargo" value={office} onChange={value => setOffice(value)} />
        <SelectList required={true} label="Time" teams={teams} value={team} onChange={value => setTeam(value)} />
        <div className="form-footer">
          <Button>Adicionar Usuário</Button>
          {visible === 'isVisible' ? (
            <div className="notification">
              <p>Usuário não encontrado!</p>
              <p>Digite um username válido!</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Form;
