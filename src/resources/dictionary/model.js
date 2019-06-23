const dictionary = require('../services/dictionary');

module.exports = {
  getRandomDefinition: () => dictionary('synsets').orderByRaw('RAND()').limit(50),
  getWordById: id => dictionary('synsets').where({id}),
};
