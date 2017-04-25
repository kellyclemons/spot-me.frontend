import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';


export default Ember.Route.extend({
  geolocation: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  init() {
    this._super(...arguments);

    this.get('updateLocation').perform();
  },

  updateLocation: task(function * () {

    while (true) {
      const geoObject = yield this.get('geolocation').getLocation();

      const [latitude, longitude] = this.get('geolocation').get('currentLocation');
      const me = this.get('currentUser.user');

      me.setProperties({ latitude, longitude });
      me.save();

      // Wait for 30 seconds
      yield timeout(30 * 1000);
    }
  }).restartable(),

  actions: {
    getUserLocation() {
      this.get('updateLocation').perform();
    }
  },

  async model() {
    let zipCode = this.get('currentUser.user.zipCode');

    if (!zipCode) {
      const user = await this.get('currentUser').load();
      zipCode = user.get('zipCode');
    }

    // if (this.get)
    // let zip = this.get('zip');
    // TODO Delete above
    return this.store.query('user', {
      filter: {
        zip: zipCode
      }
    });
  }
});
