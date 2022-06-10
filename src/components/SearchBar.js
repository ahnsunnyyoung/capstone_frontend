import { forwardRef, useEffect, useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

import '../css/SearchBar.css'
import lightStyles from '../styles/lightStyles';
import darkStyles from '../styles/darkStyles';

function SearchBar({ mode, ref }) {
  const classes = mode === 'dark' ? darkStyles() : lightStyles();

  return (
    <div className={classes.searchInput}>
      <input className='search_input' 
        type="text" 
        placeholder='검색하고 싶은 맛집 정보를 입력하세요.'
        ref = {ref}/>
      <Link to='/search'>
        <FaSearch className="search_icon" color='#4c86f8'/>
      </Link>
    </div>
  );
}

export default SearchBar;
