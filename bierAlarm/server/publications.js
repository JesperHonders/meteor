Meteor.publish('Events', function EventPublication() {
   return Events.find();
 });

Meteor.publish('Messages', function MessagePublication() {
  return Messages.find();
});

Meteor.publish('Attendants', function AttendantPublication() {
  return Attendants.find();
})
