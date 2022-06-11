import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import '../css/MainPage.css';
import MainLogo from './MainLogo';
import SearchBar from './SearchBar';
import lightStyles from '../styles/lightStyles';
import darkStyles from '../styles/darkStyles';

function MainPage() {
  const mode = "light"
  const classes = mode === 'dark' ? darkStyles() : lightStyles();

  const [searchtxt, setSearchtxt] = useState("");
  const navigate = useNavigate();

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearchtxt(e.target.value);
  }

  const onSearch = (e) => {
    e.preventDefault();
    if (searchtxt ===  null || searchtxt === "") {
      navigate('/search/null')
    } else {
      navigate('/search/'+searchtxt)
    }
  }

  return (
    <div className="main_page">

      <MainLogo size={300}/>
      <span className='no_drag'>x</span>
      {/* <SearchBar mode = {"light"} ref={inputRef}/> */}
      <div className={classes.searchInput}>

        <form style = {{"display": "flex","width":"100%"}}onSubmit={e=>onSearch(e)}>
          <input className='search_input' 
            type="text" 
            placeholder='검색하고 싶은 맛집 정보를 입력하세요.'
            onChange={onChangeSearch}/>

          <button type='submit'>
            <FaSearch className="search_icon" color='#4c86f8'/>
          </button>
        </form>
      </div>
        
    </div>
  );
}

export default MainPage;
