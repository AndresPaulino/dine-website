import React from 'react';
import { windowSize } from 'utils';
import locallySourcedMobile from 'assets/images/homepage/locally-sourced-mobile.jpg';
import locallySourcedTablet from 'assets/images/homepage/locally-sourced-tablet.jpg';
import locallySourcedDesktop from 'assets/images/homepage/locally-sourced-desktop.jpg';
import patternDivide from 'assets/images/patterns/pattern-divide.svg';

function HomeCardFirst() {
  const { width } = windowSize();

  const image = width < 768 ? locallySourcedMobile : width < 1024 ? locallySourcedTablet : locallySourcedDesktop;

  return (
    <div className='z-10'>
      <div className='flex flex-col items-center justify-center h-full px-6'>
        <img className='w-full shadow-2xl' src={image} alt='enjoyable place' />
      </div>
      <div className='flex justify-center py-12'>
        <img className='' src={patternDivide} alt='divide' />
      </div>
      <div>
        <div className='flex flex-col items-center justify-center h-full px-6'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold px-16'>The most locally sourced food</h2>
            <p className='text-sm px-5 mt-4'>
              All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the
              freshest, most sustainable food.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCardFirst;
