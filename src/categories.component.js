(function () {

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/templates/categories.template.html',
  controller: categoriesController,
  bindings: {
    categories: '<'
  }  
});

categoriesController.$inject = ['$rootScope']
function categoriesController($rootScope) {
  var $ctrl = this;

}

})();
