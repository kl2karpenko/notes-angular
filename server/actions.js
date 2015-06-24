/**
 * POST action 'addNote'
 * @param app
 */
exports.addNote = function addNote (app) {
    var jf = require('jsonfile');

    app.post('/addNote', function (req, response) {
        console.log("Request handler 'addNote' was called.");
        response.write('OK');
        jf.writeFile("public/js/mvvm/data/notes.json", JSON.parse(req.body.data));
        response.end();
    });

};