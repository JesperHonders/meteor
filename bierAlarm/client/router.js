Router.route('/', function () {
  this.render('home');
});

Router.route('/addAlarm', function () {
  this.render('addAlarm');
});

Router.route('event', {
  path: '/event/:_id',
  template: 'event',
  data: function() {
    return {id: this.params._id, event: Events.findOne(this.params._id), attendant: Attendants.findOne({eventId: this.params._id})}
  }
});
