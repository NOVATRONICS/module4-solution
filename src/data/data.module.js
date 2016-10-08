(function () {

angular.module('Data', []);

angular.module('Data')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.config(function () {
  console.log("Data config fired.");
})
.run(function () {
  console.log("Data run fired.");
});

})();
