import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/data';
import './styles.css';

export default function App() {

  const cardData = Data.map(item => {
    return <Card
      id={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      openspot={item.openSpots}
    />
  })

  return (
    <section>
      <Navbar />
      <Hero />
      <section className='card-list'>
        {cardData}
      </section>
    </section>
  )
}