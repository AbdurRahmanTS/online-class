import React from 'react';
import './Purchase.css'

const Purchase = (props) => {
    const purchase = props.purchase;
    const totalPrice = purchase.reduce((total, enroll) => total + enroll.price, 0)

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="purchase">
            <h1>Purchase Summary</h1>
            <h5>Purchase In: {purchase.length}</h5>
            <h5>Total: {formatNumber(totalPrice)}</h5>
        </div>
    );
};

export default Purchase;