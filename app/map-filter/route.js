import Ember from 'ember';


export default Ember.Route.extend({
  zip: 37211,

  async model() {
    let zip = this.get('zip');
    // TODO Delete above
    return this.store.query('user', {
      filter: {
        zip: zip
      }
    });
  }
});
