import './Form.css';
import InputText from '../InputText';
import SelectList from '../SelectList';
import Button from '../Button';

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

    const saveForm = (e) => {
        e.preventDefault()
        console.log("Form submit")
    }

    return(
        <section className='form'>
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText binding={true} label="Nome" placeholder="Digite seu nome"/>
                <InputText binding={true} label="Cargo" placeholder="Digite seu cargo"/>
                <InputText label="Imagem" placeholder="Informe o endereço da imagem"/>
                <SelectList binding={true} label="Time" items={teams} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;