(function () {

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/items.template.html',
  controller: itemsController,
  bindings: {
    items: '<',
    category: '<'
  }    
});

itemsController.$inject = ['$rootScope']
function itemsController($rootScope) {
  var $ctrl = this;
  
}

})();
