import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service(),

  model() {
    // Loads current user
    return this.get('currentUser').load().catch(() => this.get('session').invalidate());
  }
});
