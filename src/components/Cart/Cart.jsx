
import React from 'react';
import Bottle from '../Bottles/Bottle';
import "./Cart.css"

const Cart = ({ cards, handleRemove }) => {
    console.log(cards);
    return (
        <div>
            <h3>Cart: {cards.length}</h3>
            <div className='cart-container'>
                {
                    cards.map(Bottle => <div key={Bottle.id}>
                        <img src={Bottle.img} alt="" />
                        <button onClick={() => handleRemove(Bottle.id)} className='mt-4 text-white btn btn-warning'>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;