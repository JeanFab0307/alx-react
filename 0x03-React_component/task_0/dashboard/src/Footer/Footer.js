import React from 'react';
import './Footer.css';
import {getFullYear, getFooterCopy} from '../utils/utils';

function Footer() {
  const year = getFullYear();
  const footer = getFooterCopy(false);
  return (
    <>
      <div className='App-footer'>
        <p>Copyright {year} - {footer}</p>
      </div>
    </>
  );
}

export default Footer;
