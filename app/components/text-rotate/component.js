import Ember from 'ember';

export default Ember.Component.extend({
  tagname: 'h1',
  classNames: ['main-heading-small'],

  text: '',

  words: [ 'Lift', 'Bike', 'Swim', 'Golf', 'Fun' ],

  init() {
    this._super(...arguments);
    this.set('text', this.words[0]);
  }
});
