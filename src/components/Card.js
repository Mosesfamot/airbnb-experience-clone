import React from 'react';

export default function Card(props) {
    return (
        <section className="card-section">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={props.img} className="card-image" alt="card_image"></img>
            <article className="card-rating">
                <article className="image-span">
                    <img src={require('../images/Star1.png')} className="star-image" alt="star_image"></img>
                    <span>{props.rating}</span>
                    <span className="light">({props.reviewCount})</span>
                    <span className="light">{props.location}</span>
                </article>
                <p>{props.title}</p>
                <p className="price"><span>From ${props.price}</span> / person </p>
            </article>
        </section>
    )
}