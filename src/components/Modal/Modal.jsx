import React, { useEffect, useCallback } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  const handleKeyPress = useCallback(
    e => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return isOpen ? (
    <div className={styles.Overlay} onClick={handleOverlayClick}>
      <div className={styles.Modal}>
        <img src={imageUrl} alt="Large" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null;
};

// *

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

// *
export default Modal;
