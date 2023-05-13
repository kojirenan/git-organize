import "./SelectList.css";

const SelectList = (props) => {
  return (
    <div className="select-list">
      <label>{props.label}</label>
      <select
        required={props.required}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      >
        <option value=""></option>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectList;
