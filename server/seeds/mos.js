/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mos').del()
  await knex('mos').insert([
    {id: 1, mos: '35F'},
    {id: 2, mos: '35G'},
    {id: 3, mos: '35N'}
  ]);
};
