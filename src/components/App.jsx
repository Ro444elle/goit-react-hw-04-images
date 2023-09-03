import React, { useState } from 'react';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import styles from './App.module.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = '38153781-c51513b757834e649365382a3';
  const perPage = 12;
  const [page, setPage] = useState(1);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSearchSubmit = async keyword => {
    try {
      setLoading(true);
      const response = await fetchImages(keyword);

      if (Array.isArray(response.hits)) {
        setImages(response.hits);
        setPage(2);
      } else {
        console.error('Invalid API response:', response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const response = await fetchImages('', page);

      if (Array.isArray(response.hits)) {
        setImages(prevImages => [...prevImages, ...response.hits]);
        setPage(page + 1);
      } else {
        console.error('Invalid API response:', response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = imageUrl => {
    console.log(openModal);
    setModalImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const fetchImages = async (keyword, pageNum = 1) => {
    const url = `https://pixabay.com/api/?q=${keyword}&page=${pageNum}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
    const response = await fetch(url);
    return response.json();
  };

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>Image Search App</h1>
      </header>
      <main>
        <SearchBar onSubmit={handleSearchSubmit} />
        <ImageGallery images={images} openModal={openModal} />
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button onClick={() => handleLoadMore()} />
        )}
        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            imageUrl={modalImageUrl}
          />
        )}
      </main>
    </div>
  );
};

// * No need for PropTypes to be defined.
