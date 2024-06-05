import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from "../actions/notificationActionTypes";
import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

export const initialStateNotification = {
  notification: [],
  filter: ''
};

export const notificationReducer = (state = Map(initialStateNotification), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const data = {
        ...action.data,
        isRead: false,
      };
      const normalizedData = notificationsNormalizer(data);
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