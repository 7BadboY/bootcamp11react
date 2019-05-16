import React from 'react';
import style from './UserCard.module.css';
import PropTypes from 'prop-types';

const UserCard = ({ name, tag, location, avatar, stats }) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img src={avatar} alt="user avatar" className={style.avatar} />
      <p className={style.name}>{name}</p>
      <p className={style.tag}>{tag}</p>
      <p className={style.location}>{location}</p>
    </div>

    <ul className={style.stats}>
      <li ClassName={style.stats__item}>
        <span className={style.label}>stats: </span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li ClassName={style.stats__item}>
        <span className={style.label}>Views: </span>
        <span className={style.quantity}>{stats.views}</span>
      </li>
      <li ClassName={style.stats__item}>
        <span className={style.label}>Likes: </span>
        <span className={style.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

UserCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape(PropTypes.shape).isRequired,
};

export default UserCard;
