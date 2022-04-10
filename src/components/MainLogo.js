import * as React from 'react';
import { Link } from 'react-router-dom';

function MainLogo() {

  return (
    <>
      <Link className='logo' to='/'>
        <span>NOAD</span>
      </Link>
    </>
  );
}

export default MainLogo;
