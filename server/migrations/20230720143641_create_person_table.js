/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('person', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('location');
    table.integer('mos_id');
    table.foreign('mos_id').references('mos_id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return (
        knex.schema.dropTableIfExists('person')
    )
};
