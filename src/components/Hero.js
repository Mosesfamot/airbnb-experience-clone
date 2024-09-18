import React from 'react';
import HeroImage from '../images/hero-image.png';

export default function Hero() {
    return (
        <section className="container">
            <section className="hero-image">
                <img src={HeroImage} alt="hero-image"></img>
            </section>
            <section className="text">
                <h2>Online Experinces</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </section>
        </section>
    )
}