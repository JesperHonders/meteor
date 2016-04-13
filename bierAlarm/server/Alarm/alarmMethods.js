Events = new Mongo.Collection('Events');
Attendants = new Mongo.Collection('Attendants');

Meteor.methods({
  addAlarm: function(name, date, time, userEmail){
    if(!Meteor.userId()){
      throw new Meteor.Error('No Access!');
    }

    Events.insert({
      name: name,
      date: time,
      time: date,
      createdAt: new Date(),
      createdBy: Meteor.user().emails[0].address
    });
  },
  deleteAlarm: function(alarmId){
    Events.remove(alarmId);
  },

  addAttendant: function(eventID) {
    Attendants.insert({
      eventId: eventID,
      attendant: Meteor.user().emails[0].address,
    })
  },

  addMessage: function(name, message, currentId) {
    var d = new Date();
    var hours = d.getHours(); // => 9
    var minutes = d.getMinutes(); // =>  30
    var seconds = d.getSeconds();
    var month = d.getUTCMonth() + 1;
    var day = d.getUTCDate();
    var year = d.getUTCFullYear();
    var time = hours+":"+minutes+":"+seconds+" - "+day+"/"+month+"/"+year;
    Messages.insert({
      name: name,
      message: message,
      eventId: currentId,
      displayTime: time,
      time: d
    })
  }
})
