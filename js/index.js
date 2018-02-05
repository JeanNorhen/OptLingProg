
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
      restrict:"E",
      scope:{
        ling:"@",
        imagem:"@",
        visi:"=",
        versao:"@",
        subtitulo:"@",
        sintaxe:"=",
        exemplo:"=",
        myTextCard:"dsdsd"

      }/*,
      transclude: { 
        'sintaxe': 'sintaxe',        
        'exemplo': 'exemplo'
    },
    */

  };
});
 app.controller('AppCtrl', AppCtrl);
  function AppCtrl ( $scope ) {
    $scope.myText = "My name is: <h1>John Doe</h1>";
    $scope.myTextCard = "My name is: <h1>John Doe</h1>";
    $scope.visibilidade={
    "c":'true',"php":'true',"pascal":"true"
    };
    $scope.linguagens=[
      {
        "nome":"C",
        "imagem":"res/img/c.png",
        "visibilidade":"true",
        "versao":"versao",
        "subtitulo":"Se condição verdadeira faça algo, se não faça outra coisa.",
        "altura":"550px",
        "sintaxe":"If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
        "exemplo":"If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
      
      },
      {
        "nome":"Pascal",
        "imagem":"res/img/pascal.png",
        "visibilidade":"true",
        "versao":"versao",
        "subtitulo":"Se condição verdadeira faça algo, se não faça outra coisa.",
        "altura":"550px",
        "sintaxe":"If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
        "exemplo":"If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
      
      },
      {
        "nome":"Java",
        "imagem":"res/img/java.png",
        "visibilidade":"true",
        "versao":"versao",
        "subtitulo":"Se condição verdadeira faça algo, se não faça outra coisa.",
        "altura":"550px",
        "sintaxe":"If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
        "exemplo":"If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
      
      
      },
      {
        "nome":"JavaScript",
        "imagem":"res/img/javascript.png",
        "visibilidade":"true",
        "versao":"versao",
        "subtitulo":"Se condição verdadeira faça algo, se não faça outra coisa.",
        "altura":"550px",
        "sintaxe":"If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
        "exemplo":"If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
      
      
      },
      {
        "nome":"PHP",
        "imagem":"res/img/php.png",
        "visibilidade":"true",
        "versao":"versão: 5.2.0",
        "subtitulo":"Se condição verdadeira faça algo, se não, Se condição verdadeira faça outra coisa, se não faça outra coisa",
        "altura":"600px",
        "sintaxe":"If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
        "exemplo":"If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
      
      },
      {
        "nome":"Python",
        "imagem":"res/img/python.png",
        "visibilidade":"true",
        "versao":"versao",
        "subtitulo":"Se condição verdadeira faça algo, se não faça outra coisa.",
        "altura":"550px",
        "sintaxe":"If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
        "exemplo":"If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
      
      
      }
  ];
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
