import React from 'react';
import { windowSize } from 'utils';
import specialEventMobile from 'assets/images/homepage/special-events-mobile.jpg';
import specialEventTablet from 'assets/images/homepage/special-events-tablet.jpg';
import specialEventDesktop from 'assets/images/homepage/special-events-desktop.jpg';

function SpecialEvents({ active, handleActive }) {
  const { width } = windowSize();
  const image = width < 768 ? specialEventMobile : width < 1024 ? specialEventTablet : specialEventDesktop;

  const events = ['Family Gathering', 'Special Events', 'Social Events'];

  return (
    <article>
      <div className='items-stretch w-full object-fill'>
        <img className='shadow-2xl w-full h-full' src={image} alt='family gathering' />
      </div>
      {/* Event Tabs */}
      <div className='text-[17px] font-normal tracking-widest uppercase py-16'>
        {events.map((event, index) => (
          <div key={index} onClick={() => handleActive(event)}>
            <div className='flex items-center justify-center'>
              <div className='text-center py-2 flex flex-col justify-center items-center'>
                <h2 className={`${active === event ? 'font-semi text-secondary-clay' : 'text-secondary-gray'}`}>
                  {event}
                </h2>
                <div
                  className={`${
                    active === event
                      ? 'flex text-center items-center justify-center border-b w-10 border-primary-beaver'
                      : 'hidden'
                  }`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col items-center justify-center h-full px-6'>
        <div className='text-center'>
          <h2 className='text-[32px] font-bold'>Special Events</h2>
          <p className='text-sm mt-4'>
            Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be
            sure to mark your special date with an unforgettable meal.
          </p>
        </div>
      </div>
    </article>
  );
}

export default SpecialEvents;
