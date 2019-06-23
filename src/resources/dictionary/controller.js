const model = require('./model');

module.exports = {

  async getRandomDefinition(req, res) {
    const result = await model.getRandomDefinition();
    res.send(result);
  },

}
