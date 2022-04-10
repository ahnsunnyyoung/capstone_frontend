import * as React from 'react';
import MainLogo from './MainLogo';
import SearchBar from './SearchBar';

function MainPage() {

  return (
    <div className="App">

      <MainLogo/>
      <SearchBar/>

      <div className="recommend_view">
        <span>분위기 좋은 카페나 로맨틱한 저녁 맛집은 어떠세요?</span>

        <div className="recommend_image_view">
          <a href = '' className="recommend_image">
            <img src='image/cafe_pic_1.png' alt="cafe"/>
            <div className='inner-content'>
              <span> Cafe </span>
            </div>
          </a>
          <a href = '' className="recommend_image">
            <img src='image/bar_1.jpg' alt="bar"/>
            <div className='inner-content'>
              <span> Bar </span>
            </div>
          </a>
        </div>
      </div>
        
    </div>
  );
}

export default MainPage;
