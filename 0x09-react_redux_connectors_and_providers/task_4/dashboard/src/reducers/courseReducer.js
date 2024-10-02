import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from "../actions/courseActionTypes";
import { coursesNormalizer } from "../schema/courses";
import { Map } from 'immutable';

export const initialStateCourse = [];

export const courseReducer = (state = Map(initialStateCourse), action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const data = {
        ...action.data,
        isSelected: false
      };
      const normalizedData = coursesNormalizer(data);
      return state.merge(normalizedData);
    }
    case UNSELECT_COURSE: {
      return state.setIn(['entities', 'courses', action.index.toString(), 'isSelected'], false)
    }
    case SELECT_COURSE: {
      return state.setIn(['entities', 'courses', action.index.toString(), 'isSelected'], true)
    }
    default: 
    return state;
  }
};