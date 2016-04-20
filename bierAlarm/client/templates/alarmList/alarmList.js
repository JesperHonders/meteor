Template.alarmList.helpers ({
  Events: function(){
    return Events.find({});
  }
})

Template.alarmList.events ({
  "click .remove-alarm": function(event){
    if(confirm('Are you sure you want to delete?')){
      Meteor.call('deleteAlarm', this._id)
    }

    return false;
  }
});

Template.alarmList.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Events');
});
