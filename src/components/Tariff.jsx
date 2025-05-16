import Button from "./Button";

const Tariff = ({ name, price, speed, volume, isHighlighted, children }) => {
    return (
        <div className={`tariff-card ${isHighlighted ? "highlighted" : ""}`}>
            <h3>{name}</h3>
            <p>Стоимость: {price}р</p>
            <p>Скорость: {speed}</p>
            <p>Объем включенного трафика: {volume}</p>
            {children} {<Button/>}
        </div>
    );
};

export default Tariff;
