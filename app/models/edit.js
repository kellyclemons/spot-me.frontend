import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  ageRange: DS.attr('string'),
  gender: DS.attr('string'),
  zipCode: DS.attr('string'),
  bio: DS.attr('string'),
  activities: DS.attr('string'),
  availabilities: DS.attr('string'),
})
