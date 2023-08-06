import './SelectList.css';

const SelectList = ({ required, label, teams, value, onChange }) => {
  return (
    <div className="select-list">
      <label>{label}</label>
      <select required={required} value={value} onChange={event => onChange(event.target.value)}>
        <option value=""></option>
        {teams.map(team => (
          <option key={team.id}>{team.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectList;
