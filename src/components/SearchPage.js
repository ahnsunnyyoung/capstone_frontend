import * as React from 'react';

import SearchBar from './SearchBar';
import MainLogo from './MainLogo';
import ReviewList from './ReviewList';

function SearchPage() {

  return (
    <div className='search_page'>
      <div className='search_page_header'>
        <MainLogo/>
        <SearchBar/>
      </div>
      
      <ReviewList/>
    </div>
  );
}

export default SearchPage;
