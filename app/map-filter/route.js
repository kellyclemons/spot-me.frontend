import Ember from 'ember';
import data from './data';

export default Ember.Route.extend({
  async model() {
    await this.store.pushPayload(data);

    return this.store.peekAll('profile');

    // TODO Delete above
    return this.store.query('profile', {
      filter: { zip: 'current' }
    });
  }
});
