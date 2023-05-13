import "./InputText.css";

const InputText = (props) => {
  const newPlaceholder = `${props.placeholder}...`;

  const onTyping = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onTyping}
        required={props.required}
        placeholder={newPlaceholder}
      />
    </div>
  );
};

export default InputText;
