import React from 'react';
import { windowSize } from 'utils';
import enjoyablePlaceMobile from 'assets/images/homepage/enjoyable-place-mobile.jpg';
import enjoyablePlaceTablet from 'assets/images/homepage/enjoyable-place-tablet.jpg';
import enjoyablePlaceDesktop from 'assets/images/homepage/enjoyable-place-desktop.jpg';
import patternDivide from 'assets/images/patterns/pattern-divide.svg';

function HomeCardFirst() {
  const { width } = windowSize();

  const image = width < 768 ? enjoyablePlaceMobile : width < 1024 ? enjoyablePlaceTablet : enjoyablePlaceDesktop;

  return (
    <div className='z-10 py-28'>
      <div className='flex flex-col items-center justify-center h-full px-6'>
        <img className='w-full shadow-2xl' src={image} alt='enjoyable place' />
      </div>
      <div className='flex justify-center py-12'>
        <img className='' src={patternDivide} alt='divide' />
      </div>
      <div>
        <div className='flex flex-col items-center justify-center h-full px-6'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold px-16'>Enjoyable place for all the family</h2>
            <p className='text-sm px-5 mt-4'>
              Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour
              of the farm before your meal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCardFirst;
