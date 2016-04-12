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
    return Events.findOne(this.params._id)},
  createdBy: function() {
    return Meteor.users.find({})
  }
});
