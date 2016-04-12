Events = new Mongo.Collection('Events');

Meteor.methods({
  addAlarm: function(name, date, time){
    if(!Meteor.userId()){
      throw new Meteor.Error('No Access!');
    }

    Events.insert({
      name: name,
      date: time,
      time: date,
      createdAt: new Date(),
      createdBy: Meteor.userId()
    });
  },
  deleteAlarm: function(alarmId){
    Events.remove(alarmId);
  }
})
