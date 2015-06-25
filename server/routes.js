/**
 * set route path to render views
 * @param app
 */

exports.routesSet = function routesSet (app) {
    var actions = require('./actions'),
        fs = require('fs');



    /**
     * Routing staff
     */

        /**
         * Main page
         */

        app.get ('/', function (req,res) {
            res.render('index');
        });

        app.get ('/jasmine', function (req,res) {
            res.render('jasmine.html', function(err, html) {
                res.send(html);
            });
        });

        /**
         * Main page
         */

    /**
     * Routing staff
     */

    /**
     * POST action adding notes to notes.json
     */
    actions.addNote(app);
    actions.removeNote(app);

};