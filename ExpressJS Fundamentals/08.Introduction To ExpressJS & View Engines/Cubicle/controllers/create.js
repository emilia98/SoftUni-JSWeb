const Cube = require('../models/Cube');

module.exports.createGet = (req, res)  => {
  res.render('create');
};

module.exports.createPost = (req, res) => {
  let body = req.body;
  let invalidFormMsgs = {};
  let errorMsgs = {};

  // If an invalid form has been sent
  if(!body.name && typeof(body.name) !== 'string') {
    invalidFormMsgs.name = 'The field `name` is missing!';
  }
  if(!body.description && typeof(body.description) !== 'string') {
    invalidFormMsgs.description = 'The field `description` is missing!';
  }
  if(!body.difficulty) {
    invalidFormMsgs.difficulty = 'The field `difficulty` is missing!';
  }
  if(!body.imageUrl && typeof(body.imageUrl) !== 'string') {
    invalidFormMsgs.imageUrl = 'The field `imageUrl` is missing!';
  }

  if(Object.keys(invalidFormMsgs).length > 0) {
    return res.json({
      invalidForm: true,
      invalidFormMsgs
    });
  }

  let {name, description, difficulty, imageUrl} = body;
  difficulty = parseInt(difficulty);

  if(name.length < 3 || name.length > 15) {
    errorMsgs.name = 'Name must be between 3 and 15 symbols!';
  }

  if(description.length < 20 || description.length > 300) {
    errorMsgs.description = 'Description must be between 20 and 300 symbols';
  }

  if(difficulty < 1 || difficulty > 6) {
    errorMsgs.difficulty = 'Difficulty must be between 1 and 6';
  }

  let start = /^(https:\/\/)/;
  let end = /((\.jpg)|(\.png))$/;

  if(!start.test(imageUrl)) {
    errorMsgs.image = 'Image URL must start with https://'
  }
  else if(!end.test(imageUrl)) {
    errorMsgs.image = 'Image URL must end with .jpg or .png';
  }

  let result = {
    hasErrors: false
  };

  if(Object.keys(errorMsgs).length > 0) {
    result.hasErrors = true;
    result.errors = errorMsgs;
    return res.json(result);
  }

  createCube();

  async function createCube() {
    let result = await Cube.create({
      name,
      description,
      imageUrl,
      difficulty
    });

    res.json({
      redirect: '/'
    });;
  }
}
