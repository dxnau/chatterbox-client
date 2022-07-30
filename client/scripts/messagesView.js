// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    Messages._data.forEach(item => MessagesView.renderMessage(item));
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    MessageView.render(message).appendTo(MessagesView.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    if (!Friends._data.includes(event.username)) {
      Friends._data.push(event.username);
    }
  }

};