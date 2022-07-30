// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on('select', RoomsView.handleChange);
    RoomsView.$button.on('Add Room', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (var keys in Rooms.roomNames) {
      $(`<option value="${keys}"> ${keys} </option>`).appendTo(RoomsView.$select)
   }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    Rooms._data.filter(message => message.roomname = roomname);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
      event.preventDefault;

      renderRoom($('#rooms select').val())
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
      event.preventDefault;

      $(`<option value="${$(RoomsView.$select).val()}">${$(RoomsView.$select).val()} </option>`).appendTo(RoomsView.$select)
      roomsView.render();
  }

};
