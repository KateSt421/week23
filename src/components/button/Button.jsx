import './button.css';
function Button({ onClick }) {
  return (
    <button className="select-button" onClick={onClick}>Выбрать</button>
  );
}
export default Button;
