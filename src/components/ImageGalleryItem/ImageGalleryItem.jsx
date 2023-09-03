import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageUrl, altText, openModal }) => {
  const handleImageClick = () => {
    openModal(imageUrl);
  };

  return (
    <li className={styles.ImageGalleryItem} onClick={handleImageClick}>
      <img
        className={styles.ImageGalleryItemImage}
        src={imageUrl}
        alt={altText}
      />
    </li>
  );
};

// *

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

// *

export default ImageGalleryItem;
