import React from 'react';
import HeroImage from '../images/hero-image.png';

export default function Hero() {
    return (
        <section>
            <img src={HeroImage} className="hero-image" alt="hero-image"></img>
            <h2>Online Experinces</h2>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}