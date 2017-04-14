import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('map-filter');
  this.route('register');

  this.route('profile', { path: '/profile/:user_id' }, function() {
    this.route('create1');
    this.route('create2');
    this.route('create3');
  });

  this.route('edit');
});

export default Router;
