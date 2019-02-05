const Cube = require('../models/Cube');

module.exports.getBrowse = (req, res) => {

  getAllCubes();

  async function getAllCubes() {
    let cubes = await Cube.find({});
    res.render('index', {cubes});
  }
}
