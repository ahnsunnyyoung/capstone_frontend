import * as React from 'react';
import { Link } from 'react-router-dom';

import '../css/MainLogo.css';

function MainLogo() {

  return (
    <>
      <Link className='logo' to='/'>
        <span>ㅉㅁㅉ</span>
      </Link>
    </>
  );
}

export default MainLogo;
