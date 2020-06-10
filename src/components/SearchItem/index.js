import React from 'react';

import { Search } from 'react-feather';
import './style.css';

const SearchItem = () => {
  return (
    <div className='search-area'>
      <input
        className='search-input'
        type='text'
        placeholder='Pesquisar categoria'></input>
      <div className='search-box'>
        <Search size={20} />
      </div>
    </div>
  );
};

export default SearchItem;
