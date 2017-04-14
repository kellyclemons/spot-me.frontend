import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // @TODO: Replace with findRecord instead of create
    return this.store.createRecord('user');

    return this.store.findRecord('user', 'current');
  }
});
