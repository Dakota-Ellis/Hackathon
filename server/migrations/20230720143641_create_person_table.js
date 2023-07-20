/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('person', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('location');
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
