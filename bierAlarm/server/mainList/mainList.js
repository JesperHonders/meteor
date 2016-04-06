Meteor.methods({
  addAlarm: function(name, date, time){
    if(!Meteor.userId()){
      throw new Meteor.Error('No Acces!');
    }

    Alarms.insert({
      name: name,
      date: date,
      time: time,
      createdAt: new Date(),
      createdBy: Meteor.userId()
    });
  },
  deleteAlarm: function(alarmId){
    Alarms.remove(alarmId);
  }
})
