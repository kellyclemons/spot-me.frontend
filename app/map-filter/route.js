import Ember from 'ember';
import data from './data';

export default Ember.Route.extend({
  async model() {
    // TODO Delete above
    return this.store.query('user', {
      filter: { zip: 37204 }
    });
  }
});
