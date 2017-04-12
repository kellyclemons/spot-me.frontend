import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password'),
      authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials)
        .catch((error) => {
          this.set('errorMessage', ' Invalid Email or Password');
          debugger;
        });

      // console.log(this.model);
    }
  }
});
