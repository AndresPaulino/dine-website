import React from 'react';
import { windowSize } from 'utils';
import socialEventMobile from 'assets/images/homepage/social-events-mobile.jpg';
import socialEventTablet from 'assets/images/homepage/social-events-tablet.jpg';
import socialEventDesktop from 'assets/images/homepage/social-events-desktop.jpg';

function SocialEvents({ active, handleActive }) {
  const { width } = windowSize();
  const image = width < 768 ? socialEventMobile : width < 1024 ? socialEventTablet : socialEventDesktop;

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
          <h2 className='text-[32px] font-bold'>Social Events</h2>
          <p className='text-sm mt-4'>
            Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties.
            We'll work with you to make your event a hit with everyone.
          </p>
        </div>
      </div>
    </article>
  );
}

export default SocialEvents;
