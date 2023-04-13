import './SelectList.css';

const SelectList = (props) => {
    console.log(props.items)

    return(
        <div className='select-list'>
            <label>{props.label}</label>
            <select required={props.binding}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SelectList;