import React, { useState } from 'react';
import axios from 'axios';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const apiKey = '38153781-c51513b757834e649365382a3';

  const handleSearch = async e => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${keyword}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(response.data.hits);
      onSubmit(images);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header>
      <form className={styles.SearchForm} onSubmit={handleSearch}>
        <div className={styles.Searchbar}>
          <input
            className={styles.SearchFormInput}
            type="text"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <button
            className={styles.SearchFormButton}
            type="submit"
            onClick={handleSearch}
          >
            Search Image
          </button>
        </div>

        <div className={styles.ImageGallery}>
          {images.map(image => (
            <img
              className={styles.ImageGalleryItemImage}
              key={image.id}
              src={image.webformatURL}
              alt="pic"
            />
          ))}
        </div>
      </form>
    </header>
  );
};

// *

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// *

export default SearchBar;
