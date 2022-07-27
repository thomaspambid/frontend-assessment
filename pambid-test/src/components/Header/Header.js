import React from 'react';
import propTypes from 'prop-types';

import './Header.scss'

export default function Header(props) {

  const { content = [] } = props;

  return(
    <section className='header'>
      {content.map((item, index) => (
        <div key={index} className='header__container'>
          <h1 className='header__title'>{item.title}</h1>
          <p className='header__text'>{item.text}</p>
        </div>
      ))}
    </section>
  )
}

Header.propTypes = {
  content: propTypes.array,
}
