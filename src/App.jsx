import { useState } from "react";
import './index.css';
import Tariff from './components/tariff/Tariff';
import tariffs from './data';
import Header from './components/header/Header';

const TariffList = () => {
    const [selectedTariff, setSelectedTariff] = useState("");

    const handleTariffClick = (name) => {
        setSelectedTariff(name);
    };

    return (
        <>
            <Header />
            <div className="tariff-list"> 
                {tariffs.map((tariff, index) => (
                    <Tariff 
                        key={index} 
                        name={tariff.name} 
                        price={tariff.price} 
                        speed={tariff.speed} 
                        volume={tariff.volume}
                        isHighlighted={tariff.price === 550} 
                        onClick={() => handleTariffClick(tariff.name)} 
                    />
                ))}
            </div>
            {selectedTariff && <h2 className="selected-tariff">Вы выбрали: {selectedTariff}</h2>}
        </>
    );
};

export default TariffList;


