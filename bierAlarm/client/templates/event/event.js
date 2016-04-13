Template.event.helpers ({
  Attendants: function(){
    return Attendants.find({event: this.id});
    console.log('joe')
  }
})

Template.event.events({
  "click #attendButton": function(){
    console.log('click');
    var id = this.id;
    if (Attendants.findOne({attendant: Meteor.user(),eventId: id})){
      console.log("staat er al in")
    } else {
      console.log('test')
      Meteor.call('addAttendant', id);
    }
  }
})
