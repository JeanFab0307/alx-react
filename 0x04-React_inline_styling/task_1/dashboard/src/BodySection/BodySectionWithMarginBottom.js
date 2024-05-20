import React from'react';
import BodySection from './BodySection';
import Proptypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  render() {

    return (
      <div className={css(styles.BSWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.proptypes = {
  title: Proptypes.string,
  children: Proptypes.oneOfType([
    Proptypes.string,
    Proptypes.element
  ])
};

BodySectionWithMarginBottom.defaultProps = {
  children: <></>
};

const styles = StyleSheet.create({
  BSWithMargin: {
    marginBottom: "40px"
  }
});

export default BodySectionWithMarginBottom;