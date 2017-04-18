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

  this.route('profile', { path: '/my-profile' }, function() {
    this.route('activities');
    this.route('availability');
    this.route('zip-code');
  });

  this.route('edit');
  this.route('messages');
});

export default Router;
