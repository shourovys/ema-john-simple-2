import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price, seller, star, stock, features } = props.data
    return (
        <div className="product">
            <div className="img-container">
                <img src={img} alt="" />
            </div>

            <div className="product-bio">
                {/* {console.log(props)} */}
                <h4 className="name">{name}</h4>

                <div className="body">
                    <div className="lift">
                        <h6 className="by">By: {seller}</h6>
                        <h4 className="price">${price}</h4>
                        <p className="shock">Only {stock} lift in stock. Oder soon</p>
                        <button
                            className="buy-now-btn"
                            onClick={() => { props.handelAddBtn(props.data) }}
                        > <FontAwesomeIcon icon={faCartPlus} />  Add to cart</button>
                    </div>

                    <div className="right">
                        <h6 className="features">Features:</h6>
                        {features.map(fea => <p className="feature-list">{fea.description}: {fea.value}</p>)}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;