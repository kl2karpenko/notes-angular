require(["app/viewmodels/MenuViewModel"], function(MenuViewModel){
    ko.applyBindings(new MenuViewModel(), document.getElementById('ntawMenu'));
});