
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
    $scope.barraLateral="true";
    $scope.linguagens = [
      {
        "nome": "C",
        "imagem": "img/c.png",
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
          "subtitulo": "Declara-se constantes através da Diretiva #define seguida <br>por um nome e um valor para a constante",
          "sintaxe": "<b>#define</b> nome_da_constante valor",
          "exemplo": "int main(void) { <br>/* ... *<br>/ }"
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
        "imagem": "img/pascal.png",
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
          "exemplo": "VAR<br> Idade: INTEGER;<br>Sexo: CHAR;<br> Nome: STRING;<br>Salario: REAL;<br>Aprovado, Reprovado : Boolean;<br>Meses:array[1..12] of integer; "
        },
        "const": {
          "titulo": "CONSTANTES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>CONST</b><br>   nome_da_constante = valor_da_constante ;",
          "exemplo": "CONST<br>PI=3.1415926;"
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
        "imagem": "img/java.png",
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
          "sintaxe": "<b>Byte </b> Armazenar 8 bits de informação<br> <b>Short </b>Armazenar números inteiros de 16 bits<br> <b>Int </b> ou <b>Long </b> Números Inteiros<br> <b>Char </b> Um caractere <br> <b>String </b> Um ou mais caracteres (OBJETO) <br> <b>Double </b> ou <b>Float</b> Ponto Flutuante<br> <b>[]</b> Vetor ( pacote java.util )<br> <b>Boolean </b> armazena True ou False<br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "titulo": "CONSTANTES",
          "subtitulo": "Define uma variável do tipo static ou global, que já é a <br>versão final, do tipo string, atribui um nome e inicializa com um valor ",
          "sintaxe": "<b>static/global final String </b>nome_da_constante = valor_da_constante;",
          "exemplo": "static final float PI=3.14159265f;"
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
        "imagem": "img/javascript.png",
        "visibilidade": "true",
        "versao": "ECMAScript 6",
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
          "sintaxe": "<b>Number </b> Números Inteiros<br> <b>String </b> Um ou mais caracteres <br> <b>Boolean </b> armazena True ou False<br> <b>Float </b> Ponto Flutuante <br> <b>[]</b> Vetor ( pacote java.util )<br> <b>Null </b>Seu valor é sempre nulo.<br> <b>undefined </b>Seu valor é sempre undefined.<br> <b>Symbol </b>Um tipo de dado cuja as instâncias são únicas e imutáveis.(<b>novo </b/>)<br>",
          "exemplo": "If (Condição)2 Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "titulo": "CONSTANTES",
          "subtitulo": "Define uma constante com um determinado nome e valor, <br>imutáveis em tempo de execução",
          "sintaxe": "<b>const</b> name_da_constante = valor ",
          "exemplo": "const pi = 3.14159265;"
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
        "imagem": "img/php.png",
        "visibilidade": "true",
        "versao": "versão: 5.2.0",
        "altura": "650px",
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
          "subtitulo": "Define uma constante com os parametros, nome, valor e se <br>esta deve ser sensível a maiúsculas e minúsculas ",
          "sintaxe": "<b>define</b> \( nome, Valor,true\)",
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
          "subtitulo": "<b>Se condição</b> verdadeira faça algo, <br><b>se não</b>, <b>se segunda condição</b> for verdadeira faça outra coisa,<br> <b>se não</b> (segunda condição falsa) faça uma terceira coisa.<br><br><b>Obs:</b> Ha duas formas de definir blocos: abrir com <b>\" : \"</b><br> e fechar com <b>\" endif \"</b>  ou Abrir com <b>\" { \"</b> e fechar com <b>\" } \"</b>",
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
        "imagem": "img/python.png",
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
          "sintaxe": "Não se aplica",
          "exemplo": "Não se aplica"
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
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.<br><br><b>Obs:</b> Esta linguagem abre e fecha os blocos atraves da <br>indentação (recuo no codigo)",
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
