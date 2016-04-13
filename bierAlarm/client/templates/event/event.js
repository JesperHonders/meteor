Template.event.helpers ({
  Attendants: function(){
    return Attendants.find({eventId: this.id});
  },
  attendantsCount: function(){
    return Attendants.find({eventId: this.id}).count();
  },
  canDelete: function(){
    if (Meteor.user().emails[0].address === $('.attendant').text()) {
      return console.log('ja');
    } else {
      return console.log('nee');
    }
  }
})

Template.event.events({
  "click #attendButton": function(){
    var currentId = this.id;
    console.log(Meteor.user().emails[0].address)
    if (Attendants.find({attendant: Meteor.user().emails[0].address, eventId: this.id}).count() > 0){
      alert('U staat al op aanwezig')
    } else {
      console.log('test')
      Meteor.call('addAttendant', currentId);
    }
  }
})
