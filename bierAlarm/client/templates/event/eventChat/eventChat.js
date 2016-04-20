Template.messages.helpers({
    messages: function() {
        return Messages.find({eventId: this.id}, { sort: { time: 1}}, {limit: 2});
    }
});

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) {
      if (Meteor.user())
        var name = Meteor.user().username;
      else
        var name = 'StiekemeGluipert';
      var message = document.getElementById('message');
      var currentId = this.id;
      if (message.value != '') {
        Meteor.call('addMessage', name, message.value, currentId )

        document.getElementById('message').value = '';
        message.value = '';

      }

      setTimeout(function () {
        $('#chatWindow').scrollTop($('#chatWindow')[0].scrollHeight);
      }, 50);

    }
  }
};

Template.eventChat.rendered = function () {
  setTimeout(function () {
    setTimeout(function () {
      $('#chatWindow').scrollTop($('#chatWindow')[0].scrollHeight);
    }, 50);
  }, 1000);
};

Template.eventChat.onCreated(function subscribe(){
      Meteor.subscribe('Messages');
      Meteor.subscribe('Events');
      Meteor.subscribe('Attendants');
})
