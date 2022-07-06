import React from 'react';
import { windowSize } from 'utils';
import beefMobile from 'assets/images/homepage/beef-mobile.jpg';
import beefDesktopTablet from 'assets/images/homepage/beef-desktop-tablet.jpg';

function MenuCardOne() {
  const { width } = windowSize();
  const image = width < 768 ? beefMobile : beefDesktopTablet;

  return (
    <article>
      <div className='flex flex-col items-center justify-center h-full'>
        <img className='w-full' src={image} alt='salmon' />
      </div>
      <div className='flex flex-col items-center justify-center pb-16'>
        <h2 className='text-white font-semi pt-10 text-md'>Rosemary Filet Mignon</h2>
        <p className='text-white text-sm text-center pt-3 font-light px-10'>
          Our prime beef served to your taste with a delicious choice of seasonal sides.
        </p>
      </div>
    </article>
  );
}

export default MenuCardOne;
