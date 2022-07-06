import React from 'react';
import Hero from 'blocks/Hero/Hero';
import HomeCardFirst from './components/HomeCardFirst';
import HomeCardSecond from './components/HomeCardSecond';
import Menu from './components/Menu';

function Home() {
  return (
    <div>
      <section className='-z-10'>
        <Hero />
      </section>
      <section className='flex flex-col justify-center'>
        <div className='z-20'>
          <HomeCardFirst />
        </div>
        <div className='pt-0 pb-32'>
          <HomeCardSecond />
        </div>
      </section>
      <section className=''>
        <Menu />
      </section>
    </div>
  );
}

export default Home;
