(function () {

angular.module('MenuApp', ['ui.router', 'Data', 'Spinner']);

angular.module('MenuApp')
.config(function () {
  console.log("MenuApp config fired.");
})
.run(function () {
  console.log("MenuApp run fired.");
});


})();
