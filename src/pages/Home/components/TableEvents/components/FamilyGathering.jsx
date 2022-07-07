import React from 'react';
import { windowSize } from 'utils';
import familyGatheringMobile from 'assets/images/homepage/family-gathering-mobile.jpg';
import familyGatheringTablet from 'assets/images/homepage/family-gathering-tablet.jpg';
import familyGatheringDesktop from 'assets/images/homepage/family-gathering-desktop.jpg';

function FamilyGathering({ active, handleActive }) {
  const { width } = windowSize();
  const image = width < 768 ? familyGatheringMobile : width < 1024 ? familyGatheringTablet : familyGatheringDesktop;

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
          <h2 className='text-[32px] font-bold'>Family Gathering</h2>
          <p className='text-sm mt-4'>
            We love catering for entire families. So please bring everyone along for a special meal with your loved
            ones. We'll provide a memorable experience for all.
          </p>
        </div>
      </div>
    </article>
  );
}

export default FamilyGathering;
