exports.seed = function(knex) {
  return knex('classes').insert([
      { class_name: 'Running', class_type: 'endurance', start_time: '0500', class_duration: '20', intensity_level: 'easy', location: 'room 101', registered_number: '15', registered_max: '30' },
      { class_name: 'Weightlifting', class_type: 'strength', start_time: '0600', class_duration: '30', intensity_level: 'hard', location: 'gym', registered_number: '20', registered_max: '35' },
      { class_name: 'Lunges', class_type: 'flexibility', start_time: '0700', class_duration: '40', intensity_level: 'intermediate', location: 'gym', registered_number: '25', registered_max: '40' }
      ])
}
