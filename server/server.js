var express = require('express'),
    app = express(),
    port = process.argv[2] || 8888,
    bodyParser = require('body-parser'),
    jf = require('jsonfile');

var ejs = require('ejs');

/**
 * Configuration settings
 *
 */
app.engine('html', ejs.renderFile);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));

/**
 * Configuration settings
 *
 */

    /**
     * Listen to server
     */
    app.listen(port);