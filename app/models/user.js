import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  activities: DS.attr(),

  phoneNumber: DS.attr('string'),
  gender: DS.attr('string'),
  latitude: DS.attr('string'),
  bio: DS.attr(),
  availabilities: DS.attr([]),
  zipLatitude: DS.attr(),
  ageRange: DS.attr(),
  zipLongitude: DS.attr(),
  // id: DS.attr(),
  zipCode: DS.attr(),
  longitude: DS.attr(),
});
