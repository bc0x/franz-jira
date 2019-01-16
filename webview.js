// jira integration
module.exports = Franz => {
  Franz.onNotify(notification => {
    if (typeof notification.title !== 'string') {
      notification.title =
        ((notification.title.props || {}).content || [])[0] || 'Messenger';
    }

    return notification;
  });
};
