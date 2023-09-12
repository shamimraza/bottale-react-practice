import React from 'react';
import './Bottal.css';

const Bottle = ({ bottle, handleButtonPress }) => {
    // console.log(bottle);
    const { name, img, price } = bottle;

    return (
        <div className='battle'>
            <h2>name: {name}</h2>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={() => handleButtonPress(bottle)} className='btn btn-neutral text-white'>Purchase</button>
        </div>
    );
};

export default Bottle;