angular.module('consLingProg', ['ngMaterial','ngMessages'])
.directive('cartao', function() {

    return {
        restrict: 'AE',
        templateUrl: 'templates/cartaoC.html'
    };
  })