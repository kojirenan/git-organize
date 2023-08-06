import "./Button.css";

const ButtonForm = ({ children, type }) => {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
};

export default ButtonForm;
