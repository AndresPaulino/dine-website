import React from 'react';
import patternDivide from 'assets/images/patterns/pattern-divide.svg';
import MenuCardOne from './components/MenuCards/MenuCardOne';

function Menu() {
  return (
    <section className='bg-black py-20 px-6 flex flex-col justify-center'>
      <div className='flex justify-center pb-10'>
        <img src={patternDivide} alt='pattern divide' />
      </div>
      <div className='flex flex-col justify-center mb-24'>
        <h1 className='text-white text-[32px] text-center font-semi'>A few highlights from our menu</h1>
        <p className='text-white text-center py-6'>
          We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is
          revamped every season.
        </p>
      </div>
      <div>
        <MenuCardOne />
      </div>
    </section>
  );
}

export default Menu;
