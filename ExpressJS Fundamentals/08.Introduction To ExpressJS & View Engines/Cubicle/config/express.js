const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const viewsDir = path.normalize(path.join(__dirname , '../','views/'));
console.log(viewsDir);

module.exports = app => {
    app.engine('.hbs', handlebars({
        defaultLayout: 'main',
        extname: '.hbs',
        layoutsDir: `${viewsDir}/layouts`,
        partialsDir: `${viewsDir}/partials`
    }));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.set('view engine', '.hbs');
    app.use(express.static('./static'));
};
