import * as React from 'react';

import '../css/MainPage.css';
import MainLogo from './MainLogo';
import SearchBar from './SearchBar';

function MainPage() {

  return (
    <div className="main_page">

      <MainLogo/>
      <span className='no_drag'>x</span>
      <SearchBar/>
        
    </div>
  );
}

export default MainPage;
