import React from 'react';
import Header from './components/Header/Header'
import Grid from './components/Grid/Grid';

import { headerContent, gridContent } from './data';

function ExerciseOne() {
  return (
    <div className='main'>
      <Header content={headerContent} />
      <Grid content={gridContent} />
    </div>
  );
}

export default ExerciseOne;
