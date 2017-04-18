import Ember from 'ember';

export default Ember.Controller.extend({
  activities:
    [
      {name: 'running', pic: "running-icon"},
      {name: 'hiking', pic: "hiking-icon"},
      {name: 'cycling', pic: "cyclist-icon"},
      {name: 'swimming', pic: "swimming-figure"},
      {name: 'tennis', pic: "tennis-icon"},
      {name: 'yoga', pic: "yogapose-icon"},
      {name: 'lifting', pic: "man-lifting-icon"},
      {name: 'golf', pic: "golfer-icon"},
      {name: 'boxing', pic: "man-boxing"},
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

        this.model.save();
      }
    }
});
