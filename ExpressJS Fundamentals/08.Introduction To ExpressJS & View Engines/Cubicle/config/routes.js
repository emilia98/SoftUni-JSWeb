const createController = require('../controllers/create');
const detailsController = require('../controllers/details');
const searchController = require('../controllers/search');
const homeController = require('../controllers/home');

module.exports = app => {
   // get ->/
   app.get('/', (req, res) => homeController.getBrowse(req, res));

   // get -> /about
   app.get('/about', (req, res) => res.render('about'));

   // get -> /create
   app.get('/create', (req, res) => createController.createGet(req, res));

   // post -> /create
   app.post('/create', (req, res) => createController.createPost(req, res));

   // get -> /details/:id
   app.get('/details/:cubeId', (req, res) => detailsController.getDetails(req, res));

   // get -> /search/?q
   app.get('/search?', (req, res) => searchController.search(req, res));
};
