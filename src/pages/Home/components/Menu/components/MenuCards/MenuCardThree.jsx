import React from 'react';
import { windowSize } from 'utils';
import chocolateMobile from 'assets/images/homepage/chocolate-mobile.jpg';
import chocolateDesktopTablet from 'assets/images/homepage/chocolate-desktop-tablet.jpg';

function MenuCardOne() {
  const { width } = windowSize();
  const image = width < 768 ? chocolateMobile : chocolateDesktopTablet;

  return (
    <article>
      <div className='flex flex-col items-center justify-center h-full'>
        <img className='w-full' src={image} alt='salmon' />
      </div>
      <div className='flex flex-col items-center justify-center pb-16'>
        <h2 className='text-white font-semi pt-10 text-md'>Summer Fruit Chocolate Mousse</h2>
        <p className='text-white text-sm text-center pt-3 font-light px-10'>
          Creamy mousse combined with summer fruits and dark chocolate shavings.
        </p>
      </div>
    </article>
  );
}

export default MenuCardOne;
