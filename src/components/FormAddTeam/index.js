import InputText from "../InputText";
import SelectList from "../SelectList";
import ButtonForm from "../ButtonForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddButton from "../AddButton";
import { MdDelete, MdArrowBack } from "react-icons/md";

const FormAddTeam = ({ teams, onRegisteredTeam, onDelete, toggle, users }) => {
  const [newTeam, setNewTeam] = useState("");
  const [deleteTeam, setDeleteTeam] = useState("");
  const [visibleAdd, setVisibleAdd] = useState("notVisible");
  const [visibleDel, setVisibleDel] = useState("notVisible");

  const saveForm = async (e) => {
    e.preventDefault();
    const hasTeam = teams.find((el) => el.name === newTeam);

    if (hasTeam) {
      setVisibleAdd("isVisible");
    } else {
      onRegisteredTeam({
        id: uuidv4(),
        name: newTeam,
        color: "#8c144c",
      });
      setVisibleAdd("notVisible");
    }
    setNewTeam("");
  };

  const deleteTeamForm = (e) => {
    e.preventDefault();
    const teamToDelete = teams.find((el) => el.name === deleteTeam);
    const hasUser = users.find((user) => user.team === deleteTeam);

    if (!teamToDelete) {
      return;
    } else if (hasUser) {
      setVisibleDel("isVisible");
    } else {
      onDelete(teamToDelete.id);
      setDeleteTeam("");
    }
  };

  return (
    <div>
      <form onSubmit={saveForm}>
        <h2>Adicione ou Exclua seus times.</h2>
        <InputText
          required={true}
          label="Adicione um time"
          placeholder="Digite o nome do seu novo time"
          value={newTeam}
          onChange={(value) => setNewTeam(value)}
        />
        <div className="form-footer">
          <ButtonForm type={"submit"}>Adicionar Time</ButtonForm>
          {visibleAdd === "isVisible" ? (
            <div className="notification">
              <p>O time já existe!</p>
              <p>Escolha um time com outro nome</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </form>
      <form onSubmit={deleteTeamForm}>
        <SelectList
          required={false}
          label="Selecione um time para excluir"
          teams={teams.map((team) => team.name)}
          value={deleteTeam}
          onChange={(value) => setDeleteTeam(value)}
        />
        <div className="form-footer">
          <ButtonForm type={"submit"}>
            <MdDelete size={20} />
            Excluir time
          </ButtonForm>
          {visibleDel === "isVisible" ? (
            <div className="notification">
              <p>Não é possível excluir times com usuários</p>
              <p>Exclua todos usuários antes de excluir um time</p>
            </div>
          ) : (
            <p>Exclua todos usuários antes de excluir um time</p>
          )}
        </div>
        <AddButton toggle={toggle}>
          <MdArrowBack size={40} color="#fff" />
        </AddButton>
      </form>
    </div>
  );
};

export default FormAddTeam;
