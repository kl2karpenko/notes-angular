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

/**
 * POST action 'removeNote'
 * @param app
 */

exports.removeNote = function removeNote (app) {

    app.post('/removeNote', function (req, response) {
        var id = req.body.id,
            jf = require('jsonfile'), index;


        console.log("Request handler 'removeNote' was called.");

        jf.readFile("public/js/mvvm/data/notes.json", function(err, data) {
            var i = 0;

            do {
                if ( data[i].id == id ) index = i; {
                    index = i;
                    i = data.length;
                }
            } while ( i != data.length );

            data.splice(index,1);

            response.write('delete note with id: ' + id);
            jf.writeFile("public/js/mvvm/data/notes.json", data);
            response.end();
        });
    });

};