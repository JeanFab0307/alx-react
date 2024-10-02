import { courseReducer, initialStateCourse } from "./courseReducer";
import { notificationReducer, initialStateNotification } from "./notificationReducer";
import { uiReducer, initialStateUi } from "./uiReducer";
import { Map } from "immutable";

export const initialState = {
  courses: Map(initialStateCourse),
  notifications: Map(initialStateNotification),
  ui: Map(initialStateUi),
};

export const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};