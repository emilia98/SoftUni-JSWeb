const Cube = require('../models/Cube');

module.exports.getDetails = (req, res) => {
  let id = req.params.cubeId;

  getDetails();
  async function getDetails() {
    let cube = await Cube.findById(id);

    if(cube === null) {
      return res.render('not-found');
    }
    res.render('details', {cube});
  }
};
