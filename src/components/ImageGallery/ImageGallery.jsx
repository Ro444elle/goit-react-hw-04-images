// ImageGallery.jsx
import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          openModal={() => openModal(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
