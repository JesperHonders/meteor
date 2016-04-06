Alarms = new Mongo.Collection('Alarms')

Template.mainList.helpers ({
  alarms: function(){
    return Alarms.find({});
  }
})

Template.mainList.events ({
  "submit .add-alarm": function(event){
    var name = event.target.name.value,
    date = event.target.date.value,
    time = event.target.time.value;

    Meteor.call('addAlarm', name, time, date)

    event.target.name.value = '';
    event.target.date.value = '';
    event.target.time.value = '';

    return false;
  },
  "click .remove-alarm": function(event){
    if(confirm('Are you sure you want to delete?')){
      Meteor.call('deleteAlarm', this._id)
    }

    return false;
  }

})
