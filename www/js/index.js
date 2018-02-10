
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
        titulo: "@",
        sintaxe: "@",
        exemplo: "@"
      }
    };
  });
  app.controller('AppCtrl', AppCtrl);
  function AppCtrl($scope) {
    $scope.linguagens = [
      {
        "nome": "C",
        "imagem": "res/img/c.png",
        "visibilidade": "true",
        "versao": "versao",
        "altura": "550px",
        "funMAt": {
          "titulo": "FUNÇÕES MATEMÁTICAS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Int</b> Números Inteiros<br> <b>Char</b> Caractere <br> <b>Float</b> Ponto Flutuante (real)<br> <b>[ ]</b> Vetor <br> <b>Obs:</b> C não possui um tipo para representar valores booleanos<br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "titulo": "CONSTANTES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "titulo": "LEITURA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }

      },
      {
        "nome": "Pascal",
        "imagem": "res/img/pascal.png",
        "visibilidade": "true",
        "versao": "versao",
        "altura": "550px",
        "funMAt": {
          "titulo": "FUNÇÕES MATEMÁTICAS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Integer</b> Números Inteiros<br> <b>Char </b> Um caractere <br> <b>String </b> Um ou mais caracteres <br> <b>Real</b> Ponto Flutuante<br> <b>Array </b> Vetor<br> <b>Bool </b> Armazena True ou False<br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "titulo": "CONSTANTES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "titulo": "LEITURA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<p class='md-body-1'> If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br> </p>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }

      },
      {
        "nome": "Java",
        "imagem": "res/img/java.png",
        "visibilidade": "true",
        "versao": "versao",
        "altura": "550px",
        "funMAt": {
          "titulo": "FUNÇÕES MATEMÁTICAS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Byte </b> Armazenar 8 bits de informação<br> <b>Short </b>Armazenar números inteiros de 16 bits<br> <b>Int </b> ou <b>Long </b> Números Inteiros<br> <b>Char </b> Um caractere <br> <b>String </b> Um ou mais caracteres <br> (OBJETO) <b>Boolean </b> armazena True ou False<br> <b>Double </b> ou <b>Float</b> Ponto Flutuante<br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "titulo": "CONSTANTES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "titulo": "LEITURA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<p class='md-body-1'> if (Condição) <br> { <blockquote> Instruções; </blockquote> } <br> else <br> { <blockquote> Instruções; </blockquote> } <br> </p>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }

      },
      {
        "nome": "JavaScript",
        "imagem": "res/img/javascript.png",
        "visibilidade": "true",
        "versao": "versao",
        "altura": "550px",
        "funMAt": {
          "titulo": "FUNÇÕES MATEMÁTICAS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Number </b> Números Inteiros<br>Number <b>String </b> Um ou mais caracteres <br>String <b>Boolean </b> armazena True ou False<br>Boolean <b>Null </b>Seu valor é sempre nulo.<br> <b>undefined </b>Seu valor é sempre undefined.<br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "titulo": "CONSTANTES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "titulo": "LEITURA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<p class='md-body-1'> if (Condição) <br> { <blockquote> Instruções; </blockquote> } <br> else <br> { <blockquote> Instruções; </blockquote> } <br> </p>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }

      },
      {
        "nome": "PHP",
        "imagem": "res/img/php.png",
        "visibilidade": "true",
        "versao": "versão: 5.2.0",
        "altura": "600px",
        "funMAt": {
          "titulo": "FUNÇÕES MATEMÁTICAS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Integer</b> Números Inteiros<br> <b>String </b> Um ou mais caracteres <br> <b>Double </b> ou <b>Float</b> Ponto Flutuante<br> <b>Array </b> Vetor<br> <b>Boolean </b> Armazena True ou False<br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "titulo": "CONSTANTES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "titulo": "LEITURA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "<b>Se condição</b> verdadeira faça algo, <b>se não</b>, <b>se segunda condição</b> for verdadeira faça outra coisa, <b>se não</b> (segunda condição falsa) faça uma terceira coisa.",
          "sintaxe": "<p class='md-body-1'> if (Condição) <br> { <blockquote> Instruções; </blockquote> } <br> elseif (Condição) <br> { <blockquote> Instruções; </blockquote> } <br> else <br> { <blockquote> Instruções; </blockquote> } </p>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        }

      },
      {
        "nome": "Python",
        "imagem": "res/img/python.png",
        "visibilidade": "true",
        "versao": "versao",
        "altura": "550px",
        "funMAt": {
          "titulo": "FUNÇÕES MATEMÁTICAS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Int</b> Números Inteiros<br> <b>Str </b> Um ou mais caracteres <br> <b>Float</b> Ponto Flutuante (real)<br> <b>Bool </b> armazena True ou False<br> <b>List </b> para agrupar um conjunto de elementos<br> <b>Tupla </b> semelhante ao tipo list, porém, imutável<br> <b>Dic </b>para agrupar elementos que serão recuperados por uma chave<br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "titulo": "CONSTANTES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "titulo": "LEITURA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<p class='md-body-1'> if (Condição): <blockquote>Instruções</blockquote> else: <blockquote>Instruções</blockquote> </p>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição)1 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
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
