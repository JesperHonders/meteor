Template.messages.helpers({
    messages: function() {
        return Messages.find({eventId: this.id}, { sort: { time: -1}});
    }
});

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        var name = Meteor.user().emails[0].address;
      else
        var name = 'StiekemeGluipert';
      var message = document.getElementById('message');
      var currentId = this.id;
      if (message.value != '') {
        Meteor.call('addMessage', name, message.value, currentId )

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}
