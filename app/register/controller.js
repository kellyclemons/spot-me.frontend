import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    registerUser() {
      const user = this.store.createRecord('user', this.model);

      user.save()
      .then(() => {
      //  @TODO change this route
        this.transitionToRoute('index');
      }, (err) => {
        this.set('error', 'That email address is already taken. Please try again!');
      });
    }
  }
});
