/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const personData = require('../data/person.json');

exports.seed = async function(knex) {
  await knex('person').del();
  await knex('person').insert(personData);
};
