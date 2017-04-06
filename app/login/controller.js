import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    email: '',
    password: ''
  },

  actions: {
    registerUser() {
      // Why this.store.createCrecord?
      const user = this.store.createRecord('user', this.formValues);

      // line 15 is what sends the data to back end
      user.save()
        // then when it comes back
        .then(() => {
          // Sets formValues object to an empty object
          this.set('formValues', {});

          // @TODO: Change where this routes after login
          this.transitionToRoute('index');
        }, (err) => {
          this.set('error', 'Wrong password, try again!');
          debugger;
        });
    }
  }
});
