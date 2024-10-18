import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './styles.css';

export default function App() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Card 
        img={require('./images/image-card1.png')}
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </section>
  )
}