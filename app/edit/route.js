import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // @TODO: Replace with Ember Data
    return {};
    return this.store.findRecord('user', 'current');
  }
});
