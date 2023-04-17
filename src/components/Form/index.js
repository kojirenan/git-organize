import './Form.css';
import InputText from '../InputText';
import SelectList from '../SelectList';
import Button from '../Button';
import { useState } from 'react';

const Form = () => {
    const teams = [
        "Programação",
        "Front-End",
        "Data Science",
        "Dev-Ops",
        "UX e UI",
        "Mobile",
        "Inovação e Gestão"
    ]

    const [name, setName] = useState("");
    const [office, setOffice] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    const saveForm = (e) => {
        e.preventDefault()
        console.log("Form submit => ", name, office, image,  team)
    }

    return(
        <section className='form'>
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText binding={true} label="Nome" placeholder="Digite seu nome" value={name} onChange={value => setName(value)}/>
                <InputText binding={true} label="Cargo" placeholder="Digite seu cargo" value={office} onChange={value => setOffice(value)}/>
                <InputText label="Imagem" placeholder="Informe o endereço da imagem" value={image} onChange={value => setImage(value)}/>
                <SelectList binding={true} label="Time" items={teams} value={team} onChange={value => setTeam(value)}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;