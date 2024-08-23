const io = require('../sockets/notificationSocket');

const sendNotification = (postId, comment) => {
    io.emit(`notify-${postId}`, comment);
};

module.exports = { sendNotification };
