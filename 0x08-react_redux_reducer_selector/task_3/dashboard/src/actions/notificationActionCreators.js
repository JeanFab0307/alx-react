import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const masrkAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index
  }
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter
  }
};

export const boundMasrkAsRead = (index) => dispatch(masrkAsRead(index));

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));