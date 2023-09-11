import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import './Bottles.css';
import { addToLocalStorage } from "../../utilities/localStorage";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    const handleButtonPress = (bottle) => {
        const newCart = [...cards, bottle];
        setCards(newCart);
        addToLocalStorage(bottle.id)
    }
    return (
        <div>
            <h3>Bottles available: {bottles.length}</h3>
            <h3>card: {cards.length}</h3>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleButtonPress={handleButtonPress}
                        bottle={bottle}>
                    </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;