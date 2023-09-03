import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
