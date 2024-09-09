import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {getFullYear, getFooterCopy} from '../utils/utils';

function Footer() {
  const year = getFullYear();
  const footer = getFooterCopy(false);
  return (
    <>
      <div className={css(styles.Footer)}>
        <p>Copyright {year} - {footer}</p>
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
