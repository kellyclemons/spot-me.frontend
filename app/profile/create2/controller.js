import Ember from 'ember';

export default Ember.Controller.extend({
  availabilities:
    [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],

    choices: [],

    actions: {
      chooseAvailability(availability) {
        if (this.choices.includes(availability)) {
          alert("you've already chosen this item");
        } else {
          this.set('choices', [...this.choices, availability])
        }
      }
    }
});
