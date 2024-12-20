import React from 'react';

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section className="card-section">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card-image" alt="card_image"></img>
            <article className="card-rating">
                <article className="image-span">
                    <img src={require('../images/Star1.png')} className="star-image" alt="star_image"></img>
                    <span>{props.stats.rating}</span>
                    <span className="light">({props.stats.reviewCount})</span>
                    <span className="light">{props.location}</span>
                </article>
                <p>{props.title}</p>
                <p className="price"><span>From ${props.price}</span> / person </p>
            </article>
        </section>
    )
}