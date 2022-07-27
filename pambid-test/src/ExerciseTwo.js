import React from 'react';
import TabAccordion from './components/TabAccordion/TabAccordion';

import data from './data.json'

function ExerciseTwo() {
  return (
    <div className='main'>
      <TabAccordion content={data} />
    </div>
  );
}

export default ExerciseTwo;
