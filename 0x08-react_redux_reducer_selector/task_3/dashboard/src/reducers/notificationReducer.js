import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from "../actions/notificationActionTypes";

const initialState = {
  notification: [],
  filter: ''
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      return action.data.map(notification => ({
        ...notification,
        isRead: false
      }));
    }
    case MARK_AS_READ: {
      return state.map(notification => {
        if (notification.id === index) {
          return {...notification, isRead: true};
        }
        return { ...notification };
    })
    }
    case SET_TYPE_FILTER: {
      return {
        ...state,
        filter: action.filter
      };
    }
    default: 
    return state;
  }
};