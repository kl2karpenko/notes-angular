var NotesListViewModel = define(["dojo/_base/declare"], function(declare){
    return declare(null, {
        form: '#notesAdd',
        notes: ko.observableArray(),
        constructor: function(model){
            /**
             * Get list of notes from server
             */
            this.getNotes();
        },
        addData: function (data) {
            var self = this;
            require(["js/notes/NoteModel"], function(NoteModel){
                self.notes.push(new NoteModel(data));
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: '/notes/src/scripts/data/notes.json',
                    data: JSON.stringify(self.notes),
                    dataType: "json",
                    success: function (msg) {
                        alert('Success');
                    },
                    error: function (err){
                        alert('Error');
                    }
                });
            });
        },
        addNotes: function () {
            var data = $(this.form).serializeArray(),
                notes = {};

            notes.author = 'Lily';
            notes.date = (new Date());
            notes.name = data.name;

            this.addData(notes);
        },
        getNotes: function () {
            var self = this;

            $.ajax({
                type: "GET",
                dataType: "json",
                url: '/notes/src/scripts/data/notes.json',
                async: false,
                success: function (data) {
                    require(["js/notes/NoteModel"], function(NoteModel){
                        data.forEach(function (el) {
                            self.notes.push(new NoteModel(el));
                        });
                    });
                }
            });
        }
    });
});