exports.up = async (knex) => {
  await knex.schema
      .createTable('classes', (classes) => {
          classes.increments('class_id')
          classes.string('class_name', 200)
              .notNullable()
              .unique()
          classes.string('class_type', 200)
              .notNullable()
          classes.string('start_time', 200)
              .notNullable()
          classes.string('class_duration', 200)
              .notNullable()
          classes.string('intensity_level', 200)
              .notNullable()
          classes.string('location', 200)
              .notNullable()
          classes.string('registered_number', 200)
              .notNullable()
          classes.string('registered_max', 200)
              .notNullable()
      })
};
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('classes')
};
