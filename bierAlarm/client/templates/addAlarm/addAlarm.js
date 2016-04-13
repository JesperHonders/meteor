Template.addAlarm.helpers ({
  setToday: function() {
    var todayDate = new Date();
    document.getElementById('datePicker').value = todayDate;
    console.log('test');
  }
});

Template.addAlarm.events ({
  "submit .add-alarm": function(event){
    event.preventDefault();
    var name = event.target.name.value,
    date = event.target.date.value,
    time = event.target.time.value;

    Meteor.call('addAlarm', name, time, date)

    alert("Alarm Toegevoegd");

    event.target.name.value = '';
    event.target.date.value = '';
    event.target.time.value = '';

    return Router.go('/');

  }
})
