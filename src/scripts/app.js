require(["js/viewmodel/MenuViewModel"], function(MenuViewModel){
    ko.applyBindings(new MenuViewModel(), document.getElementById('ntawMenu'));
});