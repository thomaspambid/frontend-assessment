import React from 'react';
import propTypes from 'prop-types';

import './Grid.scss';

export default function Grid(props) {

  const { content = [] } = props;

  return(
    <section className='grid'>
      <div className='grid__container'>
        {content.map((item, index) => (
          <div key={index} className='grid__box'>
            <img className='grid__image' src={item.image} alt='' width={400} height={300} />
            <p className='grid__text'>{item.text}</p>
            <a className='grid__link' href='#read-more'>{item.button}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

Grid.propTypes = {
  content: propTypes.array,
}
