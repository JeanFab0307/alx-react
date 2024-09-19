import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import {getFullYear, getFooterCopy} from '../utils/utils';

function Footer() {
  const year = getFullYear();
  const footer = getFooterCopy(false);
  const { user } = useContext(AppContext);
  return (
    <>
      <div className={css(styles.Footer)}>
        <p>Copyright {year} - {footer}</p>
        {user.isLoggedIn && 
        <p>
          <a href='#'>Contact us</a>
        </p>}
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  Footer: {
    fontStyle: "italic",
    textAlign: "center",
    borderTop: "2px solid #e0354b",
  }
});

export default Footer;
