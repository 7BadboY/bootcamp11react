import React from 'react';
import styles from './UserCard.module.css';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={user.avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>{user.tag}</p>
      <p className={styles.location}>{user.location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}>stats: </span>
        <span className={styles.quantity}>{user.stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views: </span>
        <span className={styles.quantity}>{user.stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes: </span>
        <span className={styles.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

UserCard.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      tag: PropTypes.string,
      location: PropTypes.string,
      avatar: PropTypes.string,
      stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
      }),
    }).isRequired,
  };


export default UserCard;
