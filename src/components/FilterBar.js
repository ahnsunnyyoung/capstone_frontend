import Switch from '@mui/material/Switch';

import '../css/FilterBar.css'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function FilterBar({ count }) {

  return (
    <div className='filter_bar'>
      <div className='filter_content'>
        <div className='filter_switch'>
          <span>찐맛집 필터</span>
          <Switch {...label} defaultChecked />
        </div>
        <span className='count'>총 검색결과 약 {count}개</span>
      </div>
      <hr/>
    </div>
  );
}

export default FilterBar;
