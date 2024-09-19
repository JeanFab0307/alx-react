import notificationsData from '../../notifications.json';

function getAllNotificationsByUser (userId) {
  const newData = notificationsData.filter((data) => data.id === userId)
                                    .map((data) => data.context)
  return newData;
}