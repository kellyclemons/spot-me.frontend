import Ember from 'ember';


export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

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
