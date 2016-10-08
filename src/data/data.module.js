(function () {

angular.module('data', []);

angular.module('data')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.config(function () {
  console.log("data config fired.");
})
.run(function () {
  console.log("data run fired.");
});

})();
