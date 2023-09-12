import React from 'react';
import Bottle from '../Bottles/Bottle';

const Card = ({ card }) => {
    console.log(card);
    return (
        <div>
            <h3>card: {card.length}</h3>
            <div>
                {
                    card.map(Bottle => <img src={Bottle.img}></img>)
                }
            </div>
        </div>
    );
};

export default Card;