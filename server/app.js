var express = require('express'),
    app = express(),
    config = require('./config'),
    server = require('./server'),
    routes = require('./routes');

/**
 * Set config of app
 * ===================================== */

    config.configApp(app, express);


/**
 * Start server
 * ===================================== */

    server.startServer(process.argv[2] || 8888, app);


/**
 * Configure routes
 * ===================================== */

    routes.routesSet(app);

