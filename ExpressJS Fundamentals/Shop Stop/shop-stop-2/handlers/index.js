const homeHandler = require('./home');
const filesHandler = require('./static-file');
const productHandler = require('./product');

module.exports = [
  homeHandler,
  filesHandler,
  productHandler
]
