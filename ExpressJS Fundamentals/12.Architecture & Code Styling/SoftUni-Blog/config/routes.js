const auth = require('./auth');
const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const articleController = require('../controllers/article');

module.exports = (app) => {
    app.get('/', homeController.index);
    app.get('/user/register', auth.isAnonymous,  userController.registerGet);
    app.post('/user/register', auth.isAnonymous, userController.registerPost);

    app.get('/user/login', auth.isAnonymous, userController.loginGet);
    app.post('/user/login', auth.isAnonymous, userController.loginPost);

    app.get('/user/logout', auth.isAuthed, userController.logout);
    //TODO Add other app routes and restrict certain pages using auth.js

    app.get('/article/create', auth.isAuthed, articleController.createGet);
    app.post('/article/create', auth.isAuthed, articleController.createPost);

    app.get('/article/details/:id', articleController.detailsGet);

    app.get('/article/edit/:id', auth.isAuthed, articleController.editGet);
    app.post('/article/edit/:id', auth.isAuthed, articleController.editPost);

    app.get('/article/delete/:id', auth.isAuthed, articleController.deleteGet);
    app.post('/article/delete/:id', auth.isAuthed, articleController.deletePost);
};
