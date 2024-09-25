import React from'react';
import Proptypes from 'prop-types';

class BodySection extends React.Component {
  render() {
    const { title, children} = this.props;
    return (
      <div className='bodySection'>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.proptypes = {
  title: Proptypes.string,
  children: Proptypes.oneOfType([
    Proptypes.string,
    Proptypes.element
  ])
};

BodySection.defaultProps = {
  children: <></>
};

export default BodySection;