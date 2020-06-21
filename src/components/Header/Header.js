import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <div className="logo"><img src={logo} /></div>
                <navbar className="navbar">
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/review">Review</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                </navbar>
            </nav>

        </div>
    );
};

export default Header;