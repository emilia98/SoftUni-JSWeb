const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let titleValidator = [ {
    validator: titleLengthContraint,
    msg: 'The title should be between 2 and 50 characters long!'
}];

let descriptionValidator = [{
  validator: descriptionLengthConstraint,
  msg: 'The desciption should be between 10 and 5000 characters long!'
}];

const articleSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
    validate: titleValidator
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true,
    validate: descriptionValidator
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    requried: true
  },
  creationDate: {
    type: mongoose.Schema.Types.Date,
    default: Date.now
  }
});

function titleLengthContraint(v) {
  return typeof(v) === "string" && (v.length >= 2 && v.length <= 50 );
}

function descriptionLengthConstraint(v) {
  return typeof(v) === "string" && (v.length >= 10 && v.length <= 5000);
}

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
