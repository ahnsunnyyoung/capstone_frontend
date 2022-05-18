import * as React from 'react';
import { Link } from 'react-router-dom';

import '../css/MainLogo.css';
import logo from '../images/jjinmotjib_logo_detail.png'

function MainLogo( { size } ) {

  return (
    <>
      <Link className='logo' to='/'>
        <img src={logo} width = {size} />
      </Link>
    </>
  );
}

export default MainLogo;
