import React from 'react';
import Hero from '../../blocks/Hero/Hero';
import HomeCard from './components/HomeCardFirst';

function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className='z-10 flex flex-col justify-center'>
        <HomeCard />
      </section>
    </div>
  );
}

export default Home;
