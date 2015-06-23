function addNote(response, postData) {
    console.log("Request handler 'addNote' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(postData);
    response.end();
}

exports.addNote = addNote;