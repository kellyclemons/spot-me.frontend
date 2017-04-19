import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    async save(changeset) {
      await changeset.save();

      this.transitionToRoute('edit');
    }
  }
});
