Finch
    /**
     * Main page route
     */
    .route('/', function () {
        $.get('views/notes/index.html', function (data) {
            $('[data-page=insert]').html(data);
            $('.ntaw-page').addClass('_notes');

            require(["app/viewmodels/NoteViewModel"], function(NoteViewModel){
                var notes = new NoteViewModel();
                ko.applyBindings(notes, document.getElementById('notes'));
                notes.getNotes();
            });

        });
    })
    /**
     * About page route
     */
    .route('about', function () {
        $.get('views/about/index.html', function (data) {
            $('[data-page=insert]').html(data);
            $('.ntaw-page').removeClass('_notes');
        });
    })
    /**
     * Contact page route
     */
    .route('contact', function () {
        $.get('views/contact/index.html', function (data) {
            $('.ntaw-page').removeClass('_notes');
            $('[data-page=insert]').html(data);
        });
    });


Finch.call('/');
Finch.listen('/#about');
Finch.listen('/#contact');