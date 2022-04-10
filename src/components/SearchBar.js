import * as React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SearchBar() {

  return (
    <div className="search_input">
      <input type="text" placeholder='검색하고 싶은 맛집 정보를 입력하세요.'/>
      <Link to='/search'>
        <FaSearch className="search_icon" color='#4c86f8'/>
      </Link>
    </div>
  );
}

export default SearchBar;
