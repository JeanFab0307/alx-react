import React, { useState } from 'react';
import PropTypes from'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [check, setCheck] = useState(false);

  const handleChange = () => {
    setCheck(!check);
  }

  return (
    <tr className={isHeader ? css(styles.header) : css(styles.normal)}>
      {isHeader ?
      (textSecondCell === null ? 
        (<th className={css(styles.thcenter)} colSpan="2">{textFirstCell}</th>) 
        : 
        (<>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </>)
      ) : 
      (<>
        <td className={check ? css(styles.rowChecked) : css(styles.td)}>
          <input type='checkbox' onChange={handleChange} defaultChecked={check}/>
          {textFirstCell}
        </td>
        <td className={check ? css(styles.rowChecked) : css(styles.td)}>{textSecondCell}</td>
      </>)
      }
    </tr>
  )
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f5f5f5ab',
  },
  normal: {
    backgroundColor: '#deb5b545',
  },
  thcenter: {
    borderBottom: '1px solid black',
    margin: 0,
    padding: 0,
    textAlign: 'center'
  },
  th: {
    border: '1px solid grey',
    textAlign: 'left'
  },
  td: {
    textAlign: 'left'
  },
  rowChecked: {
    textAlign: 'left',
    backgroundColor: '#e6e4e4',
  }

});

export default CourseListRow;
