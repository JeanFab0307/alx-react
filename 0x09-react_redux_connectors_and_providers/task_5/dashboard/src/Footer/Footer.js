import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { AppContext } from '../App/AppContext';
import {getFullYear, getFooterCopy} from '../utils/utils';

function Footer({ user }) {
  const year = getFullYear();
  const footer = getFooterCopy(true);
  return (
    <>
      <div className={css(styles.Footer)}>
        <p>Copyright {year} - {footer}</p>
        {user && <a href='#'>Contact us</a>}
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

const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

export default connect(mapStateToProps)(Footer);
