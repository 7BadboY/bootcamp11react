import React from 'react';
import PropsTypes from 'prop-types';
import style from './PricingPlan.module.css';

const PricingItems = ({ el }) => (
  <div className={style.item}>
    <i className={style.icon}>
      <img src={el.icon} alt="" />
    </i>
    <h2 className={style.label}>{el.label}</h2>
    <p className={style.capacity}>{el.capacity}</p>
    <p className={style.description}>{el.description}</p>
    <p className={style.price}>{el.price}</p>
    <button type="submit" className={style.button}>
      Get Started
    </button>
  </div>
);

PricingItems.propsTypes = {
  el: PropsTypes.shape().isRequired,
};

export default PricingItems;
