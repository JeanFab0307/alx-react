import { schema, normalize } from 'normalizr';
import notificationsData from '../../dist/notifications.json';

function getAllNotificationsByUser (userId) {
  // const newData = notificationsData
  //   .filter((data) => data.id === userId)
  //   .map((data) => data.context);
  // return newData;
  const messages = normalized.entities.message;
  const notifications = normalize.entities.notification;
  const newData = [];

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      newData.push(messages[notifications[id].context]);
    }
  }
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

const normalized = normalize(notificationsData, [notification])

export const notificationsNormlizer = (data) => {
  return normalize(data, [notification]);
};