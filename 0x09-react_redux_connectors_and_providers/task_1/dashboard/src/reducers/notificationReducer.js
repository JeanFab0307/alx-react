import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from "../actions/notificationActionTypes";
import { Map } from "immutable";
import { notificationsNormlizer } from "../schema/notifications";

const initialState = Map({
  notification: [],
  filter: ''
});

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const data = {
        ...action.data,
        isRead: false,
      };
      const normalizedData = notificationsNormlizer(data);
      return state.merge(normalizedData);
    }
    case MARK_AS_READ: {
      return state.setIn(['entities', 'notifications', action.index.toString(), 'isRead'], true);
    }
    case SET_TYPE_FILTER: {
      return state.set('filter', action.filter);
    }
    default: 
    return state;
  }
};