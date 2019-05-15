import React from 'react';
import styles from './UserCard.module.css';

const UserCard = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className="description">
      <img src={avatar} alt="user avatar" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li ClassName="stats__item">
        <span className="label">stats: </span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li ClassName="stats__item">
        <span className="label">Views: </span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li ClassName="stats__item">
        <span className="label">Likes: </span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);
export default UserCard;
