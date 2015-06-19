var AddNote = define(["dojo/_base/declare"], function(declare){
    return declare(null, {
        form: '#notesAdd',
        constructor: function( ){
            var self = this;
            self.addNote = function (obj,event) {
                var data = $(self.form).serializeArray();
                console.log(data)
            };
        }
    });
});