import Button from "../button/Button";
import './tariff.css';

const Tariff = ({ name, price, speed, volume, isHighlighted, onClick }) => {
    return (
        <div className={`tariff-card ${isHighlighted ? "highlighted" : ""}`}>
            <h3>{name}</h3>
            <p>Стоимость: {price}р</p>
            <p>Скорость: {speed}</p>
            <p>Объем трафика: {volume}</p>
            <Button onClick={onClick} />
        </div>
    );
};

export default Tariff;
