import React from 'react';
import { windowSize } from 'utils';
import salmonMobile from 'assets/images/homepage/salmon-mobile.jpg';
import salmonDesktopTablet from 'assets/images/homepage/salmon-desktop-tablet.jpg';

function MenuCardOne() {
  const { width } = windowSize();
  const image = width < 768 ? salmonMobile : salmonDesktopTablet;

  return (
    <article>
      <div className='flex flex-col items-center justify-center h-full'>
        <img src={image} alt='salmon' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-white font-semi pt-10 text-md'>Seared Salmon Fillet</h2>
        <p className='text-white text-sm text-center pt-3 font-light'>
          Our locally sourced salmon served with a refreshing buckwheat summer salad.
        </p>
      </div>
    </article>
  );
}

export default MenuCardOne;
