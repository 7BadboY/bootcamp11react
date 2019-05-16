import React from 'react';
import PricingItems from './PricingItems';
import PropTypes from 'prop-types';
import style from './PricingPlan.module.css';

const PricingPlan = ({ plan }) => (
  <ul className={style.pricingPlan}>
    {plan.map(el => (
      <li key={el.id}>
        <PricingItems el={el} />
      </li>
    ))}
  </ul>
);

PricingPlan.protoTypes = {
  plan: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PricingPlan;
