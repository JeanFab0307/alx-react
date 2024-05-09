import React from'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'
import Proptypes from 'prop-types';

class BodySectionWithMarginBottom extends React.Component {
  render() {

    return (
      <div className='bodySectionWithMargin'>
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

export default BodySectionWithMarginBottom;