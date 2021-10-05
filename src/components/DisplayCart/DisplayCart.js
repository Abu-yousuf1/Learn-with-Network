import React from 'react';

const DisplayCart = (props) => {
    const { cart } = props

    const totalReducer = (previous, product) => previous + product.price * product.quantity;
    const total = cart.reduce(totalReducer, 0)

    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        totalQuantity += product.quantity;
    }
    return (
        <div>
            <h4> total Service: {totalQuantity}</h4>
            <h4 className="py-3">Price: {total} </h4>
        </div>
    );
};

export default DisplayCart;