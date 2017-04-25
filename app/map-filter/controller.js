import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  // starts out as null, but route function will set userLocation equal
  // to current location
  userLocation: null
});
