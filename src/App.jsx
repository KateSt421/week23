import './index.css'
import Tariff from './components/Tariff';
import tariffs from './data';

const TariffList = () => {
    return (
        <div className="tariff-list">
            {tariffs.map((tariff, index) => (
                <Tariff 
                    key={index} 
                    name={tariff.name} 
                    price={tariff.price} 
                    speed={tariff.speed} 
                    volume={tariff.volume}
                    isHighlighted={tariff.price === 550} 
                />
            ))}
        </div>
    );
};

export default TariffList;

