import React, { useState } from "react";
import propTypes from 'prop-types';

import './TabAccordion.scss';

export default function TabAccordion(props){

  const { content = [] } = props;
  const [ active, setActive ] = useState(0);

  function clickTab(value) {
    setActive(value);
    let width = window.innerWidth;
    if(active === value && width <= 991){
      setActive();
    }
  }

  window.addEventListener("resize", clickTab);

  return(
    <section className='tab'>
      <div className='tab__container'>
        <ul className='tab__list'>
          {content.map((list, index) => (
            <li className={'tab__item' + (active === index ? ' tab__item--active' : '')} key={index} onClick={() => clickTab(index)}>{list.title}</li>
          ))}
        </ul>
        <div className='tab__content'>
          {content.map((item, index) => (
            <div key={index} className={'tab__accordion ' + (active === index ? ' tab__accordion--active' : '')}>
              <p className='tab__title' onClick={() => clickTab(index)}>
                {item.title}
              </p>
              <p className={'tab__text' + (active === index ? ' tab__text--active' : '')}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

TabAccordion.propTypes = {
  content: propTypes.array,
}