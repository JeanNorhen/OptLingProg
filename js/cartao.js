
var app = angular.module('consLingProg', []);
 
app.directive('helloWorld', function() {
  return {
      restrict: 'AE',
      template: '<h3>Hello World!!</h3>'
  };
});