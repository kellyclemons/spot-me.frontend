import DS from 'ember-data';

export default DS.Model.extend({
  phoneNumber: DS.attr('string'),
  gender: DS.attr('string'),
  latitude: DS.attr('string'),
  bio: DS.attr(''),
  activities: DS.attr([]),
  availabilities: DS.attr([]),
  zipLatitude: DS.attr(''),
  ageRange: DS.attr(''),
  zipLongitude: DS.attr(''),
  name: DS.attr(''),
  // id: DS.attr(),
  zipCode: DS.attr(''),
  email: DS.attr(''),
  longitude: DS.attr('')
});
