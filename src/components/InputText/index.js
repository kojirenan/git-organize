import './InputText.css';

const InputText = (props) => {
    const newPlaceholder = `${props.placeholder}...`

    return(
        <div className="input-text">
            <label>{props.label}</label>
            <input required={props.binding} placeholder={newPlaceholder}/>
        </div>
    )
}

export default InputText;