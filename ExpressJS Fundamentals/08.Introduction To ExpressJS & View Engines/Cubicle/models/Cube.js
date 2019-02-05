// const { Schema, model } =
const mongoose = require('mongoose');

let nameValidator = [
  {
      validator:nameInRange,
    msg: 'Name must be between 3 and 15 symbols!'
  }
];

let descriptionValidator = [
  {
  validator: descriptionInRange,
    msg: 'Description must be between 20 and 300 symbols'
  }
];

let difficultyValidator = [
  {
    validator: validateDifficulty,
    msg: 'Difficulty is a number between 1 and 6!'
  }
];

let imageUrlValidator = [
  {
    validator: validateImageBeginning,
    msg: 'Image URL must start with https://'
  },
  {
    validator: validateImageEnding,
    msg: 'Image URL must end with .jpg or .png'
  }
];

const cubeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: nameValidator
  },
  description: {
    type: String,
    required: true,
    validate: descriptionValidator
  },
  imageUrl: {
    type: String,
    required: true,
    validate: imageUrlValidator
  },
  difficulty: {
    type: Number,
    required: true,
    validate: difficultyValidator
  }
});


function validateImageBeginning(v) {
  return /^(https:\/\/)/.test(v);
}

function validateImageEnding(v) {
  return /((\.jpg)|(\.png))$/.test(v);
}

function nameInRange(value) {
  return value.length >= 3 && value.length <= 15;
}

function descriptionInRange(value) {
  return value.length >= 20 && value.length <= 300;
}

function validateDifficulty(v) {
  return typeof(v) === "number" && (v >= 1 && v <= 6);
}

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
