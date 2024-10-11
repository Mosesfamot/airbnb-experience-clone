import React from 'react';
import CardImage from '../images/image-card1.png';
import StarImage from '../images/Star1.png';

export default function Card() {
    return (
        <section className="card-section">
            <img src={CardImage} className="card-image" alt="card_image"></img>
            <article className="card-rating">
                <article className="image-span">
                    <img src={StarImage} className="star-image" alt="star_image"></img>
                    <span>5.0</span>
                    <span className="light">(6)</span>
                    <span className="light">. USA</span>
                </article>
                <p>Life lessons with Katie Zaferes</p>
                <p className="price"><span>From $136</span> / person </p>
            </article>
        </section>
    )
}