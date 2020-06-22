import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;


    const makeNun2digit = num => Number(num.toFixed(2))


    let productPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        productPrice = productPrice + product.price


    }


    let shippingCost = 0;
    if (productPrice > 30) {
        shippingCost = 0
    }
    else if (productPrice > 20) {
        shippingCost = 5
    }
    else if (productPrice > 10) {
        shippingCost = 8
    }
    else {
        shippingCost = 10
    }

    const vat = productPrice / 10

    const grandTotal = productPrice + vat + shippingCost

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered : {cart.length}</p>
            <p>Product Price : {makeNun2digit(productPrice)}</p>
            <p><small>Shipping cost {makeNun2digit(shippingCost)} </small></p>
            <p><small>Vat : {makeNun2digit(vat)}</small></p>
            <p>Total Price : {makeNun2digit(grandTotal)}</p>

        </div>
    );
};

export default Cart;