/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('location').del()
  await knex('location').insert([
    {id: 1, Location: 5},
    {id: 2, Location: 4},
    {id: 3, Location: 4}
  ]);
};
