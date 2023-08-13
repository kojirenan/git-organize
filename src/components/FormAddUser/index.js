import InputText from 'components/InputText';
import SelectList from 'components/SelectList';
import Button from 'components/Button';
import { useState } from 'react';
import useTeamList from 'hooks/useTeamList';
import useUserSearch from 'hooks/useUserSearch';
import useAddUserToList from 'hooks/useAddUserToList';
import AddButton from 'components/AddButton';
import { AiOutlineTeam } from 'react-icons/ai';
import useUserList from 'hooks/useUserList';
import { toast } from 'react-toastify';

const FormAddUser = ({ toggleForm }) => {
  const [user, setUser] = useState('');
  const [office, setOffice] = useState('');
  const [team, setTeam] = useState('');

  const users = useUserList();
  const userSearch = useUserSearch();
  const addUser = useAddUserToList();
  const teams = useTeamList();

  const saveForm = async e => {
    e.preventDefault();
    const hasRepeatedUser = users.find(username => username.login === user);
    if (hasRepeatedUser) {
      toast.error('Usuário já cadastrado!');
      return;
    }

    const newUser = await userSearch(user);

    if (newUser !== 0) {
      addUser(newUser, team, office);
      toast.success('Usuário cadastrado com sucesso!');
    } else {
      toast.error('Usuário não encontrado! Digite um username válido.');
    }

    setUser('');
    setOffice('');
    setTeam('');
  };

  return (
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
      </div>
      <AddButton toggle={toggleForm} message={'Adicione ou exclua seus times'}>
        <AiOutlineTeam size={20} color="#fff" />
      </AddButton>
    </form>
  );
};

export default FormAddUser;
