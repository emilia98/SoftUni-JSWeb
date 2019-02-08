const Article = require('mongoose').model('Article');

module.exports = {
  index: async (req, res) => {
    let data = {};

    data.errors = [];
    try {
      let articles = await Article.find().populate('authorId');

      for(let article of articles) {
        let content = article.description;
        article.content = content.substring(0, 27) + '[...]';
      }
      data.articles = articles;
    } catch(err) {
      console.log(err);

      data.errors.push({
        msg: 'An error occurred while getting all the articles!',
        field: ''
      });
    }
    res.render('home/index', data);
  }
}
