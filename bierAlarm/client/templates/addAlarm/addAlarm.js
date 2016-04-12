Template.addAlarm.events ({
  "submit .add-alarm": function(event){
    var name = event.target.name.value,
    date = event.target.date.value,
    time = event.target.time.value;

    Meteor.call('addAlarm', name, time, date)

    alert("Alarm Toegevoegd");

    event.target.name.value = '';
    event.target.date.value = '';
    event.target.time.value = '';

    return false;

  }
})
