import React from 'react';
import PropTypes from'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css'

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList'>
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

export default CourseList;