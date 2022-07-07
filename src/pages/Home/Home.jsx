import React from 'react';
import Hero from 'blocks/Hero/Hero';
import HomeCardFirst from './components/HomeCardFirst';
import HomeCardSecond from './components/HomeCardSecond';
import Menu from './components/Menu';
import TableEvents from './components/TableEvents';

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
      <section className='px-6 flex flex-col justify-center items-center py-24'>
        <TableEvents />
      </section>
    </div>
  );
}

export default Home;
