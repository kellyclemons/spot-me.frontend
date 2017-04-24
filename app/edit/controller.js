import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async saveProfile(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Form data is invalid');
      }

      changeset.save();
    },

    saveAndContinue() {
      this.model.save().then(() => {
        this.transitionToRoute('map-filter');
      });
    }
  }

});
