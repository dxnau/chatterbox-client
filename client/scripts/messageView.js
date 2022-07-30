// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  // render: _.template(`
  //     <!--
  //     <div class="chat">
  //       <div class="username"></div>
  //       <div></div>
  //     </div>
  //     -->
  //   `)
  render: function(message) {
    return $(`<div class='chat'>
          <h3 class='username'>
          ${_.escape(message.username)}
          </h3>
          <p class='text'>
          ${_.escape(message.text)}
          </p>
      </div>`)
    }

};