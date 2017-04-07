import Ember from 'ember';

export default Ember.Controller.extend({


  actions: {
    loginUser() {
      // Why this.store.createCrecord?
      console.log(this.model);
    }
  }
});
