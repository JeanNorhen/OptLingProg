
(function () {
  'use strict';
  var app = angular.module('consLingProg', ['ngMaterial', 'ngMessages', 'ngSanitize']);
  app.config(function ($mdThemingProvider, $mdAriaProvider) {
    $mdAriaProvider.disableWarnings();
    $mdThemingProvider.theme('altTheme')
      .primaryPalette('indigo')
      .accentPalette('amber');
    $mdThemingProvider.setDefaultTheme('altTheme');

  });
  app.directive("card", function () {
    return {
      templateUrl: "js/diretivas/template/card.html",
      replace: true,
      restrict: "E",
      scope: {
        ling: "@",
        imagem: "@",
        visi: "=",
        versao: "@",
        subtitulo: "@",
        sintaxe: "@",
        exemplo: "@"
      }
    };
  });
  app.controller('AppCtrl', AppCtrl);
  function AppCtrl($scope) {
    $scope.visibilidade = {
      "c": 'true', "php": 'true', "pascal": "true"
    };
    $scope.linguagens = [
      {
        "nome": "C",
        "imagem": "res/img/c.png",
        "visibilidade": "true",
        "versao": "versao",
        "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
        "altura": "550px",
        "funMAt": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }

      },
      {
        "nome": "Pascal",
        "imagem": "res/img/pascal.png",
        "visibilidade": "true",
        "versao": "versao",
        "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
        "altura": "550px",
        "funMAt": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }
      },
      {
        "nome": "Java",
        "imagem": "res/img/java.png",
        "visibilidade": "true",
        "versao": "versao",
        "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
        "altura": "550px",
        "funMAt": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }
      },
      {
        "nome": "JavaScript",
        "imagem": "res/img/javascript.png",
        "visibilidade": "true",
        "versao": "versao",
        "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
        "altura": "550px",
        "funMAt": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }
      },
      {
        "nome": "PHP",
        "imagem": "res/img/php.png",
        "visibilidade": "true",
        "versao": "versão: 5.2.0",
        "subtitulo": "Se condição verdadeira faça algo, se não, Se condição verdadeira faça outra coisa, se não faça outra coisa",
        "altura": "600px",
        "funMAt": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }
      },
      {
        "nome": "Python",
        "imagem": "res/img/python.png",
        "visibilidade": "true",
        "versao": "versao",
        "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
        "altura": "550px",
        "funMAt": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }
      }
    ];
    $scope.dadosVariaveis = 1;
    $scope.setdadosVariaveis = function (newdadosVariaveis) {
      $scope.dadosVariaveis = newdadosVariaveis;
    };

    $scope.isdadosVariaveis = function (tabdadosVariaveis) {
      return $scope.dadosVariaveis === tabdadosVariaveis;
    };
    $scope.comandosBasicos = 1;
    $scope.setcomandosBasicos = function (newcomandosBasicos) {
      $scope.comandosBasicos = newcomandosBasicos;
    };

    $scope.iscomandosBasicos = function (tabcomandosBasicos) {
      return $scope.comandosBasicos === tabcomandosBasicos;
    };

    $scope.estCondicionais = 1;
    $scope.setestCondicionais = function (newestCondicionais) {
      $scope.estCondicionais = newestCondicionais;
    };

    $scope.isestCondicionais = function (tabestCondicionais) {
      return $scope.estCondicionais === tabestCondicionais;
    };
    $scope.estRepeticao = 1;
    $scope.setestRepeticao = function (newestRepeticao) {
      $scope.estRepeticao = newestRepeticao;
    };

    $scope.isestRepeticao = function (tabestRepeticao) {
      return $scope.estRepeticao === tabestRepeticao;
    };

  }
})();
