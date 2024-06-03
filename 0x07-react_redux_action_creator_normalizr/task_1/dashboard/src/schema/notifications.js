import { schema, normalize } from 'normalizer';
import notificationsData from '../../notifications.json';

function getAllNotificationsByUser (userId) {
  const newData = notificationsData
    .filter((data) => data.id === userId)
    .map((data) => data.context);
  return newData;
}

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
})

const normalizedNotification = normalize(notificationsData, notification)