import Ember from 'ember';

export default Ember.Controller.extend({
  activities:
    [
      {name: 'Running', pic: "running-icon"},
      {name: 'Hiking', pic: "hiking-icon"},
      {name: 'Cycling', pic: "cyclist-icon"},
      {name: 'Swimming', pic: "swimming-figure"},
      {name: 'Tennis', pic: "tennis-icon"},
      {name: 'Yoga', pic: "yogapose-icon"},
      {name: 'Lifting', pic: "man-lifting-icon"},
      {name: 'Golf', pic: "golfer-icon"},
      {name: 'Boxing', pic: "man-boxing"},
    ],

    choices: [],

    actions: {
      chooseActivity(activity) {
        if (this.choices.includes(activity)) {
          alert("you've already chosen this item");
        } else {
          this.set('choices', [...this.choices, activity])
        }
      },

      saveAndContinue() {
        this.model.set('activities', this.choices.map(({name}) => name));

        this.model.save().then(() => {
          this.transitionToRoute('profile.availability');
        });
      }
    }
});
