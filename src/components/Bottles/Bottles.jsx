import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import './Bottles.css';
import { addToLocalStorage, getStoreCard, removeFromLocalStorage } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        if (bottles.length) {
            const storeCard = getStoreCard()

            const saveCard = [];
            for (const id of storeCard) {
                // console.log(id);

                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    saveCard.push(bottle)
                }
            }

            // console.log('save card', saveCard);
            setCards(saveCard);
        }
    }, [bottles])


    const handleButtonPress = (bottle) => {
        console.log(bottle);
        const newCart = [...cards, bottle];
        setCards(newCart);
        addToLocalStorage(bottle.id)
    }

    const handleRemove = id => {
        removeFromLocalStorage(id)
    }
    return (
        <div>
            <h3>Bottles available: {bottles.length}</h3>
            <Cart cards={cards} handleRemove={handleRemove}></Cart>

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