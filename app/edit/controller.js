import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async saveProfile(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Form data is invalid');
      }

      await changeset.save().then(() => {
        this.transitionToRoute('map-filter');
      });
    },
  }

});
