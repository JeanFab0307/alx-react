import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectcourse = (index) => {
  return {type: SELECT_COURSE, index};
};
export const unselectcourse = (index) => {
  return {type: UNSELECT_COURSE, index};
};