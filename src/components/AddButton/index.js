import "./AddButton.css";

function AddButton({ children, toggle }) {
  return (
    <button type="button" className="add-button" onClick={toggle}>
      {children}
    </button>
  );
}

export default AddButton;
