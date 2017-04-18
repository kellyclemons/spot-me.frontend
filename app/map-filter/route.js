import Ember from 'ember';
import data from './data';

let zip = this.get('zip');

export default Ember.Route.extend({

  async model() {
    // TODO Delete above
    return this.store.query('user', {
      filter: {
        zip: zip
      }
    });
  }
});
