import React from 'react';
import PropTypes from'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList' className={css(styles.table)}>
      {listCourses.length === 0 ? 
      (
        <CourseListRow textFirstCell="No course available yet" isHeader={true} />
      ) :
      (<>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.map(({id, name, credit}) => (
          <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />))}
      </tbody>
      </>)
      }
    </table>
  )
};

CourseList.proptypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape(CourseShape))
};

CourseList.defaultProps = {
  listCourses: []
};

const styles = StyleSheet.create({
  table: {
    display: "table",
    borderCollapse: "collapse",
    fontSize: "1.2rem",
    width: "50vw",
    margin: "2em auto",
    border: "1px solid black"
  }
});

export default CourseList;