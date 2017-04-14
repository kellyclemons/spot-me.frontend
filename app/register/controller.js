import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async registerUser() {
      const user = this.store.createRecord('user', this.model);
      const {email, password} = this.model;

      try {
        await user.save()
      } catch (e) {
        this.set('error', 'That email address is already taken. Please try again!');
      }

      const authenticator = 'authenticator:jwt';

      try {
        await this.get('session').authenticate(authenticator, {identification: email, password});
      } catch (e) {
        this.set('errorMessage', ' Invalid Email or Password');
      }

      this.transitionToRoute('profile.create1', user);
    }
  }
});
