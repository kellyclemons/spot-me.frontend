import Ember from 'ember';


export default Ember.Route.extend({
  geolocation: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  actions: {
    getUserLocation() {
      this.get('geolocation').getLocation().then((geoObject) => {
        var currentLocation = this.get('geolocation').get('currentLocation');

        console.log(currentLocation);

        this.set('userLocation', currentLocation);
      });
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
