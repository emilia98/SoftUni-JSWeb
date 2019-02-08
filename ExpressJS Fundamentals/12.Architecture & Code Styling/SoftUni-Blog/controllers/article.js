const Article = require('mongoose').model('Article');

module.exports = {
  createGet: (req, res) => {
    res.render('article/create')
  },
  createPost: async (req, res) => {
    let data = {};
    let body = req.body;
    let errors = [];

    checkBodyData(body, errors);

    if(errors.length > 0) {
      data['errors'] = errors;
      return res.render('article/create', data)
    }
    data = body;

    await checkValidity(body, errors, req.user, "create")

     if(errors.length > 0) {
       data['errors'] = errors;
       return res.render('article/create', data);
     }

     data['hasSuccess'] = true;
     res.render('article/create', data);
  },
  detailsGet: async (req, res) => {
    view  = 'article/details';
    await  getArticle(req, res, view);
  },
  editGet: async (req, res) => {
    view  = 'article/edit';
    await getArticle(req, res, view, true);
  },
  editPost: async (req, res) => {
    let view = 'article/edit';

    if(!req.params.id) {
      return res.redirect('/');
    }

    let id = req.params.id;
    let data = {};
    let body = req.body;
    let errors = [];

    data.errors = [];

    let article = await getArticleFromDb(id);

    if(!article) {
      data.notFound = true;
      return res.render(view, data);
    }

    if(!req.user || (!req.user.isAuthor(article) && !req.user.isInRole('Admin'))) {
      return res.redirect('/');
    }

    checkBodyData(body, errors);

    if(errors.length > 0) {
      data['errors'] = errors;
      return res.render(view, data)
    }
    let title = body.title;
    let description = body.content;

    data.article = {
      _id: article._id,
      title,
      description
    }
    article.title = title;
    article.description = description;

    let user = req.user;

    body.article = article;

    await checkValidity(body, errors, user, "edit")

    if(errors.length > 0) {
      data['errors'] = errors;
      return res.render(view, data);
    }

    data['hasSuccess'] = true;
    res.render(view, data);
  },
  deleteGet: async(req, res) => {
    let view = "article/delete";
    getArticle(req, res, view, true);
  },
  deletePost: async(req, res) => {
    let view = 'article/delete';

    if(!req.params.id) {
      return res.redirect('/');
    }

    let id = req.params.id;
    let data = {};
    let body = req.body;
    let errors = [];

    data.errors = [];

    let article = await getArticleFromDb(id);

    if(!article) {
      data.notFound = true;
      return res.render(view, data);
    }

    if(!req.user || (!req.user.isAuthor(article) && !req.user.isInRole('Admin'))) {
      return res.redirect('/');
    }

    data.article = article;

    try {
      await article.remove();
    } catch(err) {
      errors.push({
        msg: 'An error occurred while trying to delete an article!',
        field: ''
      });
      data.errors = errors;
      return res.render(view, data);
    }

    data['hasSuccess'] = true;
    res.render(view, data);
  }
}

async function getArticleFromDb(id) {
  try {
    article = await Article.findById(id).populate('authorId');
  } catch(err) {
    console.log(err);
    return null;
  }

  return article;
}

function checkBodyData(body, errors) {
  if(!body.title) {
    errors.push({
      msg:  'is required!',
      field: '`Title`'
    });
  }

  if(!body.content) {
    errors.push({
      msg: 'is required!',
      field: '`Content`'
    });
  }
}

async function checkValidity(body, errors, user, type) {
  let title = body.title;
  let content = body.content;

  try {
    if(type === "create") {
      let article = await Article.create({
        title,
        description: content,
        authorId: user._id
      });
    } else if(type === "edit") {
      let article = await body.article.save();
    }
    return true;
  } catch(err) {

    if(err.errors) {
      let pathError = false;
      if(err.errors.title) {
        errors.push({
          msg:  err.errors.title.message,
          field: ''
        });
        pathError = true;
      }
     if(err.errors.description) {
        errors.push({
          msg:  err.errors.description.message,
          field: ''
        });
        pathError = true;
      }

      if(!pathError){
        errors.push({
          msg:  'An error occured while trying to create an article!',
          field: ''
        });
      }

      return errors;
    }
  }
}

async function getArticle(req, res, view, authorRestriction) {
  if(!req.params.id) {
    return res.redirect('/');
  }

  let id = req.params.id;
  let data = {};
  let article = null;

  data.errors = [];

  try {
    article = await Article.findById(id).populate('authorId');
  } catch(err) {
    console.log(err);

    data.errors.push({
      msg: 'An error occurred white trying to get an article!',
      field: ''
    });
    return res.render(view, data);
  }

  if(!article) {
    data.notFound = true;
    return res.render(view, data);
  }

  if(authorRestriction && (!req.user || (!req.user.isAuthor(article) && !req.user.isInRole('Admin')))) {
    return res.redirect('/');
  }

  if(!req.user) {
      data.canChange = false;
  } else {
    let user = req.user;
    data.canChange = user.isAuthor(article) || user.isInRole('Admin');
  }

  data.article = article;

  res.render(view, data);
}
