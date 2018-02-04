
 (function () {
  'use strict';
    var app=angular.module('consLingProg', ['ngMaterial','ngMessages']);
    app.config(function ($mdThemingProvider, $mdAriaProvider) {
    $mdAriaProvider.disableWarnings();
  $mdThemingProvider.theme('altTheme')
 .primaryPalette('indigo')
 .accentPalette('amber');
    $mdThemingProvider.setDefaultTheme('altTheme');

 });
 app.directive("card",function(){
  return{
      templateUrl:"js/diretivas/template/card.html",
      replace:true,
      restrict:"E"

  };
});
 app.controller('AppCtrl', AppCtrl);
  function AppCtrl ( $scope ) {

    $scope.visibilidade={
    "c":'true',"php":'true',"pascal":"true"
    };
    $scope.linguagens=["c","pascal"];
    $scope.FCO = 1;
    $scope.setFCO = function(newFCO){
      $scope.FCO = newFCO;
    };

    $scope.isFCO = function(tabFCO){
      return $scope.FCO === tabFCO;
    };
    $scope.PROGER = 1;
    $scope.setPROGER = function(newPROGER){
      $scope.PROGER = newPROGER;
    };

    $scope.isPROGER = function(tabPROGER){
      return $scope.PROGER === tabPROGER;
    };

      $scope.BNDESA = 1;
    $scope.setBNDESA = function(newBNDESA){
      $scope.BNDESA = newBNDESA;
    };

    $scope.isBNDESA = function(tabBNDESA){
      return $scope.BNDESA === tabBNDESA;
    };
      $scope.BNDESF = 1;
    $scope.setBNDESF = function(newBNDESF){
      $scope.BNDESF = newBNDESF;
    };

    $scope.isBNDESF = function(tabBNDESF){
      return $scope.BNDESF === tabBNDESF;
    };

  }
})();
