/**
 * @NoteViewModel
 * NoteViewModel module
 * on define get list of notes
 *
 * @properties:
 *  form - submit form on adding notes
 *  notes - array of data of notes
 *
 * @methods
 *  addNotes - add data to notes data and send data to server
 *  getNotes - take data from server
 *
 */

define(["dojo/_base/declare"], function(declare) {
    return declare(null, {

        /**
         * form on adding new notes
         */
        form: '#notesAdd',

        /**
         * @array of notes in notes data
         */
        notes: ko.observableArray(),

        /**
         * build NoteViewModel constructor
         * @param model
         */
        constructor: function(model){
        },

        /**
         * Format data to post it to server
         * @param data
         * @returns {*}
         */
        formatData: function (data) {
            var date = new Date(),
                addData = {};

            /**
             * Get data from serialize array form
             */
            data.forEach(function (el) {
                addData[el.name] = el.value;
            });

            /** add hash id to note */
            addData.id = Math.random().toString(36).substring(7);

            /** add todays date */
            addData.date = date.getDate() + '.' + ( (date.getMonth() + 1) < 10 ? ( '0' + (date.getMonth() + 1) ) : (date.getMonth() + 1) ) + '.' + date.getFullYear();

            /**
             * return format data
             */
            return addData;
        },

        /**
         * method to add data to notes array and
         * send data to server
         */
        addNotes: function () {
            var self = this,
                addData;

            addData = this.formatData($(this.form).serializeArray());
            $('input[type=text], textarea',this.form).val('');

            require(["app/models/NoteModel"], function(NoteModel){

                /**
                 * Add data to binding @array notes
                 */
                self.notes.push(new NoteModel(addData));

                /**
                 * Add data to json file
                 */
                $.post("/addNote", { data: JSON.stringify(self.notes()) });

            });
        },

        /**
         * Get list of notes from server
         */
        getNotes: function () {
            var self = this;
            $.ajax({
                type: "GET",
                dataType: "json",
                url: '/js/mvvm/data/notes.json',
                async: false,
                success: function (data) {
                    self.notes().length = 0;
                    require(["app/models/NoteModel"], function(NoteModel){
                        data.forEach(function (el) {
                            self.notes.push(new NoteModel(el));
                        });
                    });
                }
            });
        }
    });
});