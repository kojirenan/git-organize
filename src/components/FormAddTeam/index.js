import InputText from '../InputText';
import SelectList from '../SelectList';
import { useState } from 'react';
import AddButton from '../AddButton';
import { MdArrowBack } from 'react-icons/md';
import useTeamList from 'hooks/useTeamList';
import useAddTeamToList from 'hooks/useAddTeamToList';
import useHasUserInTheTeam from 'hooks/useHasUserInTheTeam';
import useDeleteTeamToList from 'hooks/useDeleteTeamToList';
import useCreateTeam from 'hooks/useCreateTeam';
import Button from 'components/Button';
import { toast } from 'react-toastify';

const FormTeam = ({ toggleForm }) => {
  const [newTeam, setNewTeam] = useState('');
  const [deleteTeam, setDeleteTeam] = useState('');
  const [whatBtn, setWhatBtn] = useState('');

  const createATeam = useCreateTeam();

  const teams = useTeamList();
  const addNewTeam = useAddTeamToList();
  const hasUserInTheTeam = useHasUserInTheTeam(deleteTeam);
  const deleteTeamToList = useDeleteTeamToList();

  const saveForm = async e => {
    e.preventDefault();

    if (whatBtn === 'newTeam') {
      if (newTeam === '') {
        toast.error('É necessário escolher um time para adicionar.');
        return;
      }
      const hasRepeatedTeam = teams.find(el => el.name === newTeam);
      const aNewTeam = createATeam(newTeam);

      if (hasRepeatedTeam) {
        toast.info('O time já existe! Escolha um time com outro nome.');
      } else {
        toast.info('Novo time adicionado com sucesso.');
        addNewTeam(aNewTeam);
      }
      setNewTeam('');
    } else {
      if (deleteTeam === '') {
        toast.error('É necessário escolher um time para excluir.');
        return;
      }
      const teamToDelete = teams.find(el => el.name === deleteTeam);

      if (!teamToDelete) {
        return;
      } else if (hasUserInTheTeam) {
        toast.error('Não é possível excluir times com usuários! Exclua todos usuários antes de excluir um time.');
      } else {
        toast.info('Time excluído com sucesso.');
        deleteTeamToList(teamToDelete.id);
        setDeleteTeam('');
      }
    }
  };

  return (
    <form onSubmit={saveForm}>
      <h2>Adicione ou Exclua seus times.</h2>
      <InputText label="Adicione um time" placeholder="Digite o nome do seu novo time" value={newTeam} onChange={setNewTeam} />
      <div>
        <Button onClickFn={() => setWhatBtn('newTeam')}>Adicionar Time</Button>
      </div>
      <SelectList label="Exclua um time" teams={teams} value={deleteTeam} onChange={setDeleteTeam} />
      <div>
        <Button onClickFn={() => setWhatBtn('deleteTeam')}>Excluir time</Button>
      </div>
      <AddButton toggle={toggleForm} message={'Voltar ao formulário para adicionar usuário'}>
        <MdArrowBack size={20} color="#fff" />
      </AddButton>
    </form>
  );
};

export default FormTeam;
