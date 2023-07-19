/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mos').del()
  await knex('mos').insert([
    {id: 1, MOS: '35F'},
    {id: 2, MOS: '35G'},
    {id: 3, MOS: '35N'}
  ]);
};
