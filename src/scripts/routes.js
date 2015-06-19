$.sammy(function() {

    /**
     * On pages other from main
     */
    this.get('/#:name', function() {
            $.get('tmpl/' + this.params['name'] + '/index.html', function (data) {
                $('[data-page=insert]').html(data);
            });
        })
        /**
         * On main page
         */
        .get('/', function() {
            $.get('tmpl/notes/index.html', function (data) {
                $('[data-page=insert]').html(data);

                require(["js/notes/NoteViewModel"], function(NoteViewModel){
                    ko.applyBindings(new NoteViewModel(), document.getElementById('notes'));
                });

            });
        })
        /**
         * Run the app
          */
        .run();

});