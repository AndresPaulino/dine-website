import React, { useState } from 'react';
import { FamilyGathering, SocialEvents, SpecialEvents } from './components';
import { windowSize } from 'utils';
import { DarkButton } from 'blocks/Buttons';

function TableEvents() {
  const [activeTab, setActiveTab] = useState('familyGathering');

  return (
    <section className='px-6'>
      {activeTab === 'familyGathering' && <FamilyGathering handleActive={setActiveTab} />}
      {activeTab === 'socialEvents' && <SocialEvents handleActive={setActiveTab} />}
      {activeTab === 'specialEvents' && <SpecialEvents handleActive={setActiveTab} />}
    </section>
  );
}

export default TableEvents;
