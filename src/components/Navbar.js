import React from 'react';
import Logo from '../images/airbnb-logo.png';

export default function Navbar() {
    return (
        <section className="navbar">
            <img src={Logo} className="logo" alt="Airbnb Logo"></img>
        </section>
    )
}