import './Form.css';
import InputText from '../InputText';
import SelectList from '../SelectList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState("");
    const [office, setOffice] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    const saveForm = (e) => {
        e.preventDefault();
        props.onRegisteredEmployee({
            name,
            office,
            image: `https://github.com/${image}.png`,
            team
        });
        setName("");
        setOffice("");
        setImage("");
        setTeam("");
    }

    return(
        <section className='form'>
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText binding={true} label="Nome" placeholder="Digite seu nome" value={name} onChange={value => setName(value)}/>
                <InputText binding={true} label="Cargo" placeholder="Digite seu cargo" value={office} onChange={value => setOffice(value)}/>
                <InputText label="Imagem - (Github username)" placeholder="Informe o endereço da imagem" value={image} onChange={value => setImage(value)}/>
                <SelectList binding={true} label="Time" items={props.teams} value={team} onChange={value => setTeam(value)}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;