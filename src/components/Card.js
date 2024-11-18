import React from 'react';

export default function Card(props) {

    let badgeText
    if (props.openspot === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section className="card-section">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card-image" alt="card_image"></img>
            <article className="card-rating">
                <article className="image-span">
                    <img src={require('../images/Star1.png')} className="star-image" alt="star_image"></img>
                    <span>{props.item.stats.rating}</span>
                    <span className="light">({props.item.stats.reviewCount})</span>
                    <span className="light">{props.item.location}</span>
                </article>
                <p>{props.item.title}</p>
                <p className="price"><span>From ${props.item.price}</span> / person </p>
            </article>
        </section>
    )
}