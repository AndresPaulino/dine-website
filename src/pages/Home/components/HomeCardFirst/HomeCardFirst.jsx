import React from 'react';
import { windowSize } from 'utils';
import enjoyablePlaceMobile from 'assets/images/homepage/enjoyable-place-mobile.jpg';
import enjoyablePlaceTablet from 'assets/images/homepage/enjoyable-place-tablet.jpg';
import enjoyablePlaceDesktop from 'assets/images/homepage/enjoyable-place-desktop.jpg';

function HomeCardFirst() {
  const { width } = windowSize();

  const image = width < 768 ? enjoyablePlaceMobile : width < 1024 ? enjoyablePlaceTablet : enjoyablePlaceDesktop;

  return (
    <div className='z-10 py-28'>
      <div className='flex flex-col items-center justify-center h-full'>
        <img src={image} alt='enjoyable place' />
      </div>
    </div>
  );
}

export default HomeCardFirst;
