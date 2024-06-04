export const filterTypeSelected = (state) => {
  return state.entities.filter;
};

export const getNotifictaions = (state) => {
  return state.entities.map(notifications => notifications);
};

export const getUnreadNotifications = (state) => {
  return state.entities.filter(notifications => notifications.isRead === false)
                        .map(notifications => notifications);
};