const dictionary = require('../../services/dictionary');
/*
module.exports = {
  getRandomDefinition: () => dictionary('synsets').orderByRaw('RAND()').limit(50),
};

SELECT `words`.`wordid`, `words`.`lemma`, `lexlinks`.`word1id`, `lexlinks`.`synset1id`, `synsets`.`synsetid`, `synsets`.`definition` 
  FROM `words` 
  INNER JOIN `lexlinks` 
  ON `words`.`wordid` = `lexlinks`.`word1id` 
  INNER JOIN `synsets` 
  ON `synsets`.`synsetid` = `lexlinks`.`synset1id`
*/

module.exports = {
  getRandomDefinition: () => dictionary.select('words.wordid', 'words.lemma', 'lexlinks.word1id', 'lexlinks.synset1id', 'synsets.synsetid', 'synsets.definition')
  .from('words')
  .innerJoin('lexlinks', 'words.wordid', 'lexlinks.word1id')
  .innerJoin('synsets', 'synsets.synsetid', 'lexlinks.synset1id')
  .orderByRaw('RAND()').limit(1),
};
