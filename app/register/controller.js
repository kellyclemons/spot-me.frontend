import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    registerUser() {
      const user = this.store.createRecord('user', this.model);
      const {email, password} = this.model;

      user.save()
      .then(() => {
      //  @TODO change this route
        this.transitionToRoute('profile.create1', user);
      }, (err) => {
        this.set('error', 'That email address is already taken. Please try again!');
      });
    }
  }
});
