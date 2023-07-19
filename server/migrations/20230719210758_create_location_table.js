/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('location', table => {
        table.increments();
        table.integer('location', 25);
        table.integer('mos_id');
        table.foreign('mos_id').references('mos_id');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('location', table => {
    table.dropForeign('mos_id')
  })
  .then(function() {
    return knex.schema.dropTableIfExists('location');
  });
};
