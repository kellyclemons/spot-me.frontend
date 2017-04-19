import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),
  user: null,

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', { current:true }).then((user) => {
        this.set('user', user);

        return user;
      });
    } else {
      return Ember.RSVP.resolve();
    }
  }
});
