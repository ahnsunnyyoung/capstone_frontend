import Switch from '@mui/material/Switch';
import * as React from 'react';

import '../css/FilterBar.css'

const label = { inputProps: { 'aria-label': 'Filter switch' } };

function FilterBar({ count }) {
  if(count!==-1){
    return (
      <div className='filter_bar'>
        <div className='filter_content'>
          <div className='filter_switch'>
            <span>찐맛집 필터</span>
            <Switch {...label} defaultChecked />
          </div>
          <span className='count'>총 검색결과 약 {count.toLocaleString()}개</span>
        </div>
        <hr/>
      </div>
    );
  }else{
    return (
      <div className='filter_bar'>
        <hr/>
      </div>
    );
  }
}

export default FilterBar;
