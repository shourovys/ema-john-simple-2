import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const fast10 = fakeData.slice(0, 10)
    const [data, setData] = useState(fast10)


    const [cart, setCart] = useState([]);
    const handelAddBtn = (data) => {
        console.log(data);
        const newCart = [...cart, data]
        setCart(newCart)
        // console.log({ cart });

    }



    return (
        <div className="shop-container">

            <div className="product-container">
                {data.map(data => <Product
                    data={data}
                    handelAddBtn={handelAddBtn}
                ></Product>)}
            </div>


            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>

    );
};

export default Shop;