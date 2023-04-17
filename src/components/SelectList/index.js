import './SelectList.css';

const SelectList = (props) => {
    return(
        <div className='select-list'>
            <label>{props.label}</label>
            <select required={props.binding} value={props.value} onChange={event => props.onChange(event.target.value)}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SelectList;