import Card from '../Card';
import './Team.css';

const Team = (props) => {
    return (
        props.employees.length > 0 && <section className='team' style={{ backgroundColor: props.secundaryColor }}>
            <h3 style={{ borderColor: props.primaryColor}}>{props.teamName}</h3>
            <div className='members'>
                {props.employees.map(employee => <Card key={employee.name} name={employee.name} image={employee.image} office={employee.office}/>)}
            </div>
        </section>
    )
}

export default Team;