var MenuViewModel = define(["dojo/_base/declare"], function(declare){
    return declare(null, {
        listMenu: [
            {
                name: 'Notes',
                href: '#'
            },
            {
                name: 'About',
                href: '#about'
            },
            {
                name: 'Contact',
                href: '#contact'
            }
        ],
        constructor: function(){
            var self = this;

            self.active = ko.observable();
            self.changeLocation = function (page) {
                self.active(page.href);
                location.href = page.href;
            };
        }
    });
});