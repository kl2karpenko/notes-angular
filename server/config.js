/**
 * Configuration of application
 * @param app
 * @param express
 */
exports.configApp = function configApp (app, express) {
    var bodyParser = require('body-parser');

    app.engine('html', require('ejs').renderFile);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static('./public'));
};