import InputText from "../InputText";
import SelectList from "../SelectList";
import ButtonForm from "../ButtonForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UseUserSearch from "../../hooks/useUserSearch";
import AddButton from "../AddButton";
import { TbSettings } from "react-icons/tb";

const FormAddUser = ({ teams, onRegistereduser, toggle }) => {
  const [user, setUser] = useState("");
  const [office, setOffice] = useState("");
  const [team, setTeam] = useState("");
  const [visible, setVisible] = useState("notVisible");

  const saveForm = async (e) => {
    e.preventDefault();
    const {
      name = 0,
      login,
      public_repos,
      followers,
    } = await UseUserSearch(user);

    if (name !== 0) {
      onRegistereduser({
        id: uuidv4(),
        name,
        login,
        office,
        public_repos,
        followers,
        image: `https://github.com/${user}.png`,
        team,
      });

      setVisible("isNotVisible");
    } else {
      setVisible("isVisible");
    }

    setUser("");
    setOffice("");
    setTeam("");
  };
  return (
    <form onSubmit={saveForm}>
      <h2>Preencha os dados para criar o card do usuário.</h2>
      <InputText
        required={true}
        label="GitHub username"
        placeholder="Digite o username do GitHub"
        value={user}
        onChange={(value) => setUser(value)}
      />
      <InputText
        required={true}
        label="Cargo"
        placeholder="Digite o cargo"
        value={office}
        onChange={(value) => setOffice(value)}
      />
      <SelectList
        required={true}
        label="Time"
        teams={teams}
        value={team}
        onChange={(value) => setTeam(value)}
      />
      <div className="form-footer">
        <ButtonForm type={"submit"}>Adicionar Usuário</ButtonForm>
        {visible === "isVisible" ? (
          <div className="notification">
            <p>Usuário não encontrado!</p>
            <p>Digite um username válido!</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <AddButton toggle={toggle}>
        <TbSettings size={40} color="#fff" />
      </AddButton>
    </form>
  );
};

export default FormAddUser;
