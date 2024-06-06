import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS
} from "./notificationActionTypes";
import 'node-fetch';

export const masrkAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
};

export const setLoadingState = (loadingState) => {
  return {
    type: SET_LOADING_STATE,
    loadingState
  };
};

export const setNotifications = (notifications) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications
  };
};

export const fetchNotifications = () => {
	return (dispatch) => {
    dispatch(setLoadingState(true));

    return fetch('./notifications.json')
      .then((res) => res.json())
      .then((data) => dispatch(setNotifications(data)))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoadingState(false)));
  }
}

export const boundMasrkAsRead = (index) => dispatch(masrkAsRead(index));
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));