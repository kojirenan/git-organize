import "./Form.css";
import InputText from "../InputText";
import SelectList from "../SelectList";
import Button from "../Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UseUserSearch from "../../hooks/useUserSearch";

const Form = (props) => {
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
      props.onRegistereduser({
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
    <section className="form">
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
          items={props.teams}
          value={team}
          onChange={(value) => setTeam(value)}
        />
        <div className="form-footer">
          <Button>Adicionar Usuário</Button>
          {visible === "isVisible" ? (
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
