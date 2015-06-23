/**
 * @NoteModel
 * NoteModel model
 * on define create NoteModel data type
 *
 */

define(["dojo/_base/declare"], function(declare){
    return declare(null, {
        constructor: function(obj){
            this.name = obj.name;
            this.author = obj.author;
            this.date = obj.date;
            this.id = obj.id;
        }
    });
});