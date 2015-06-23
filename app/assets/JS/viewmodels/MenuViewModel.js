/**
 *
 * @MenuViewModel
 * define @MenuViewModel module
 * on define render list of menu and set active change states
 *
 * @properties:
 *  listMenu - list of menu data
 *
 */

define(["dojo/_base/declare"], function(declare){
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
            self.active(location.hash == '' ? '#' : location.hash);
            self.changeLocation = function (page) {
                self.active(page.href);
                location.href = page.href;
            };
        },
        changeLocation: function (e) {
            e.preventDefault();
        }
    });
});