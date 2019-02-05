const Cube = require('../models/Cube');

module.exports.search = (req, res) => {
  let query = req.query;
  let searchQuery ={};
  let errorsJSON = {};

  errorsJSON.hasError = false;

  if(query.search && query.search.length > 0) {
    searchQuery.name =
      { "$regex": query.search, "$options": "i" }
  }

  searchQuery.difficulty = {};

  if(query.from) {
    let from = parseInt(query.from);

    if(typeof(from) === 'number' && from >= 1 && from <= 6) {
      searchQuery.difficulty['$gte'] = from;
    } else {
      errorsJSON.hasError = true;
      errorsJSON.from = '`From` should be a integer in range 1 to 6!';
    }
  }

  if(query.to) {
    let to = parseInt(query.to);

    if(typeof(to) === 'number' && to >= 1 && to <= 6) {
      searchQuery.difficulty['$lte'] = to;
    } else {
      errorsJSON.hasError = true;
      errorsJSON.to = '`To` should be a integer in range 1 to 6!';
    }
  }

  if(errorsJSON.hasError) {
    return res.render('index', { errorsJSON, query })
  }

  if(Object.keys(searchQuery.difficulty).length === 0) {
    delete searchQuery.difficulty;
  }

  search();

  async function search() {
    let result = await Cube.find(searchQuery);
    res.render('index', { cubes: result, query})
  }
}
