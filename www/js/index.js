
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
          "sintaxe": "<b>+</b>Adição<br> <b>-</b>Subtração<br> <b>* </b> Multiplicação <br> <b>/</b>Divisão<br> <b>%</b>-Retorna o resto da divisão.<br> <b>Pow(variável, expoente) </b> -Potenciação. <br> <b>Sin( )</b>-Seno.<br> <b>Cos( )</b>-Cosseno.<br> <b>Tan( )</b>-Seno.<br> <b>Log( )</b>-Logaritmo natural.<br> <b>Log10( )</b>-Logaritmo base 10.<br> <b>Sqrt( )</b>-Calcula raiz quadrada.<br> <b>Floor( ) </b>-Arredonda para baixo.<br> <b>Ceil( ) </b>-Arredonda para cima.<br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Int</b> Números Inteiros<br> <b>Char</b> Caractere <br> <b>Float</b> Ponto Flutuante (real)<br> <b>[ ]</b> Vetor <br> <b>Obs:</b> C não possui um tipo para representar valores booleanos<br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
          "sintaxe": "<b>scanf ()</b> #le uma entrada do teclado. <br>",
          "exemplo": "int idade = 0; <br> printf(\"Qual é a sua idade: \"); <br> <b>scanf(\"%d\", &idade);</b><br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>printf()</b> # Escrever uma saída na tela <br>",
          "exemplo": "#include <stdio.h><br> int main()<br> {<br> <b>printf(\"Essa linha será impressa na tela\");</b><br> return 0;<br> }"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "variável <b>=</b>  valor",
          "exemplo": "int main (void){<br> int a;<br> a<b>=</b>15+5;<br> printf (\"a=%d\n\", a);<br> return 0; }"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "void main( ) <br> { <br> int idade = 0;<br> printf(\"Qual é a sua idade: \"); <br> scanf(\"%d\", &idade);<br> <b>If (idade >0) <br> { <br> printf(\"O valor é positivo\"); <br> } <br></b> }<br>"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "A declaração switch é similar a uma série de declarações IF na mesma expressão. Em muitos casos, se deseja comparar as mesmas variáveis (ou expressões), com diferentes valores, e executar pedaços diferentes de código dependendo de qual valor ela é igual. Esta é exatamente a serventia da declaração switch.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "int <b>CONT</b>; <br> <b>CONT</b>=1; <br> <b>CONT</b>= <b>CONT+1</b>;",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
          "sintaxe": "<b>+</b>-Adição<br> <b>-</b>-Subtração<br> <b>* </b>-Multiplicação <br> <b>/</b>-Divisão<br> <b>DIV</b>-Retorna o quociente inteiro da divisão.<br> <b>MOD</b>-Retorna o resto da divisão.<br> <b>INT </b> -Resulta a parte inteira de um número. <br> <b>FRAC</b>-Resulta a parte fracionária.<br> <b>ABS </b>-Resulta o valor absoluto.<br> <b>SQR </b>-Resulta no quadrado.<br> <b>SQRT </b>-Resulta na raiz quadrada.<br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
          "sintaxe": "<b>Read()</b> #le uma entrada do teclado. <br> <b>Readln()</b> #lê uma entrada do teclado e salta uma linha.",
          "exemplo": "var<br> nota : integer;<br> begin<br> <b>Read(nota);</b><br> <b>Readln(nota);</b><br> end.<br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Write ()</b> # Escrever uma saída na tela <br> <b>Writeln ()</b> #Escrever uma saída na tela e salta uma linha.",
          "exemplo": "var<br> nota : integer;<br> begin<br> nota:=5;<br> <b>write(‘Nota digitada: ’,nota );</b><br> <b>writeln(‘Nota digitada: ’,nota );</b><br> end.<br>"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "variável <b>:=</b>  valor",
          "exemplo": "var<br> num:integer;<br> begin <br> num<b>:=</b>2+2; <br> writeln('O número é ',num); <br> end.<br>"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<p class='md-body-1'> If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br> </p>",
          "exemplo": "Uses Crt;<br> var X, Y : Integer;<br> begin<br> Writeln ('Entre com dois Números:'); <br> Readln (X, Y);<br> <b> If (X > Y) Then <br> Writeln ('X é Maior que Y, e seu valor é = ', X);</b><br> end.<br>"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "A declaração switch é similar a uma série de declarações IF na mesma expressão. Em muitos casos, se deseja comparar as mesmas variáveis (ou expressões), com diferentes valores, e executar pedaços diferentes de código dependendo de qual valor ela é igual. Esta é exatamente a serventia da declaração switch.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>CONT:integer; </b> <b>CONT:=1;</b><br> <b>CONT</b>:= <b>CONT+1; </b><br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
          "sintaxe": "<b>+</b>-Adição<br> <b>-</b>-Subtração<br> <b>* </b>-Multiplicação <br> <b>/</b>-Divisão<br> <b>%</b>-Retorna o resto da divisão.<br> <b>** </b>-Exponencial<br> <b>abs </b>-Resulta o valor absoluto.<br> <b>sqrt </b>-Resulta na raiz quadrada.<br> <b>Max(número)</b>-Retornam o maior valor<br> <b>Min(número) </b>-Retornam o menor valor<br> <b>Pow(base, expoente)</b>-Calcula a potência da base elevada ao expoente<br> ...existem mais... Consulte <b>documentação oficial</b>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Byte </b> Armazenar 8 bits de informação<br> <b>Short </b>Armazenar números inteiros de 16 bits<br> <b>Int </b> ou <b>Long </b> Números Inteiros<br> <b>Char </b> Um caractere <br> <b>String </b> Um ou mais caracteres (OBJETO) <br> <b>Double </b> ou <b>Float</b> Ponto Flutuante<br> <b>[]</b> Vetor ( pacote java.util )<br> <b>Boolean </b> armazena True ou False<br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
          "sintaxe": "Função <b>next()</b> da biblioteca : <b>System.in</b><br><br><br> ...existem mais bibliotecas... Consulte <b>documentação oficial</b>",
          "exemplo": "import java.util;<br> public class HelloWorld {<br> public static void main(String[] args){<br> Scanner scan = new Scanner(System.in);<br> System.out.println(\"Qual é seu nome ?\");<br> <b>String nome = scan.next();</b><br> System.out.println(\"Bem vindo ao Java, \" + nome);<br> }<br> }<br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>System.out.println()</b>",
          "exemplo": "import java.util;<br> public class HelloWorld {<br> public static void main(String[] args){<br> Scanner scan = new Scanner(System.in);<br> System.out.println(\"Qual é seu nome ?\");<br> String nome = scan.next();<b><br> <b>System.out.println(\"Bem vindo ao Java, \" + nome);</b><br> }<br> }<br>"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "x<b> -= </b>1 <br> x <b>+= </b>1<br> x <b>*= </b>1<br> x <b>/= </b>1<br> x <b>%= </b>1 <br>",
          "exemplo": "public class nomeClasse { <br> public static void main(String[] args) { <br> int x, y = 10; <br> System.out.println( x += y); <br> System.out.println( x -= y); <br> System.out.println( x *= y); <br> System.out.println( x /= y); <br> System.out.println( x %= y); <br> } <br> } <br>"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<p class='md-body-1'> if (Condição) <br> { <blockquote> Instruções; </blockquote> } <br> else <br> { <blockquote> Instruções; </blockquote> } <br> </p>",
          "exemplo": "int idade = 17;<br> String sexo = \"h\";<br> <b>if(idade >= 18){<br> System.out.println(\"idade menor que 18\");<br> }else if(sexo == \"f\"){ // apenas colocando um if dentro de um else<br> System.out.println(\"sexo diferente de h\");<br> }else{ // esse else é do segundo if<br> System.out.println(\"idade > 18 e sexo h\");<br> }<br></b>"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "A declaração switch é similar a uma série de declarações IF na mesma expressão. Em muitos casos, se deseja comparar as mesmas variáveis (ou expressões), com diferentes valores, e executar pedaços diferentes de código dependendo de qual valor ela é igual. Esta é exatamente a serventia da declaração switch.",
          "sintaxe": "switch( opção )<br> {<br><block<blockquote> case opção1:<br> <blockquote> Instruções;<br> break;<br> </blockquote> case opção2:<br> <blockquote> Instruções;<br> break;</blockquote> <br> default:<br> <blockquote> Instruções;</blockquote> <br> </blockquote> }<br>",
          "exemplo": "public class ExemploSwitch {<br> <blockquote> public static void main(String args[]) {<br> <blockquote> int diaDaSemana = 1;<br> <b>switch</b> (diaDaSemana) {<br> <blockquote> <b>case 1:</b><br> <blockquote> System.out.println(\"Domingo\");<br> break;</blockquote><br> <b>case 2:</b><br> <blockquote> System.out.println(\"Segunda-feira\");<br> break;</blockquote><br> <b>case 3:</b><br> <blockquote> System.out.println(\"Terça-feira\");<br> break;</blockquote><br> <b>case 4:</b><br> <blockquote> System.out.println(\"Quarta-feira\");<br> break;</blockquote><br> <b>case 5:</b><br> <blockquote> System.out.println(\"Quinta-feira\");<br> break;</blockquote><br> <b>case 6:</b> <blockquote> System.out.println(\"Sexta-feira\");<br> break;</blockquote><br> case 7:<br> <blockquote> System.out.println(\"Sábado\");<br> break;</blockquote><br> default:<br> <blockquote> System.out.println(\"Este não é um dia válido!\");</blockquote> <br> </blockquote> }<br> </blockquote> }<br> </blockquote> }<br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "int<b> CONT; </b> <b>CONT = 0; </b> <b>CONT</b>=<b>CONT+1;</b>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
          "sintaxe": "<b>+</b>-Adição<br> <b>-</b>-Subtração<br> <b>* </b>-Multiplicação <br> <b>/</b>-Divisão<br> <b>Math.abs(x) </b>-Retorna o módulo, ou valor absoluto, de um número.<br> <b>Math.sqrt(x) </b>-Retorna a raiz quadrada positiva de um número.<br> <b>Math.acos(x) </b>-Retorna o arco-coseno de um número.<br> <b>Math.acosh(x) </b>-Retorna o arco-coseno hiperbólico de um número.<br> <b>Math.asin(x) </b>-Retorna o arco-seno de um número.<br> <b>Math.asinh(x) </b>-Retorna o arco-seno hiperbólico de um número.<br> ...existem mais... Consulte <b>documentação oficial</b>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Number </b> Números Inteiros<br> <b>String </b> Um ou mais caracteres <br> <b>Boolean </b> armazena True ou False<br> <b>Float </b> Ponto Flutuante <br> <b>[]</b> Vetor ( pacote java.util )<br> <b>Null </b>Seu valor é sempre nulo.<br> <b>undefined </b>Seu valor é sempre undefined.<br> <b>Symbol </b>Um tipo de dado cuja as instâncias são únicas e imutáveis.(<b>novo </b/>)<br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
          "sintaxe": "<b>window.prompt()</b>",
          "exemplo": "var nome = <b>window.prompt(\"qual o seu nome ?\", \" \");</b> <br> window.alert(\"Oi \" + nome); <br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>document.write();</b><br>ou<br><b>console.log();</b><br>",
          "exemplo": "// Exemplo de enviar algo para a página html<br> <b>document.write(5 + 6);</b><br> // Exemplo de enviar algo para a console do navegador <br> var s = \"texto\"; <br> <b>console.log(s);</b><br>"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "x<b> = </b>1 <br> x<b> -= </b>1 <br> x <b>+= </b>1<br> x <b>*= </b>1<br> x <b>/= </b>1<br> x <b>%= </b>1 <br> x<b>**= </b>1 <br> x <b><<= </b>1<br> x <b>>>= </b>1<br> x <b>&= </b>1 <br> x<b>^= </b>1 <br> x <b>|= </b>1<br>",
          "exemplo": "resu <b>=</b> 2<br> resu <b>-=</b> 2<br> resu <b>+=</b> 2<br> resu <b>/=</b> 2<br> resu <b>%=</b> 2<br> resu <b>**=</b> 2<br> resu <b>>>=</b> 2<br> resu <b>>>>=</b> 2<br> resu <b>&=</b> 2<br> resu <b>^=</b> 2<br> resu <b>|=</b> 2<br>"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "IF é uma estrutura de controle utilizada para tomar decisões. Realiza umas ou mais operações em função de uma expressão na forma de condição. Basicamente primeiro é dada uma condição e caso essa condição seja positiva, ele executa a ação.",
          "sintaxe": "<p class='md-body-1'> if (Condição) <br> { <blockquote> Instruções; </blockquote> } <br> else <br> { <blockquote> Instruções; </blockquote> } <br> </p>",
          "exemplo": "< script language=’JavaScript’ type=’text/javascript’ ><br> <b>if (25 == 35) {<br> document.write (‘Estes números são iguais’);<br> } else {<br> document.write (\"Estes números não são iguais\");<br> }</b> < /script >"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "A declaração switch é similar a uma série de declarações IF na mesma expressão. Em muitos casos, se deseja comparar as mesmas variáveis (ou expressões), com diferentes valores, e executar pedaços diferentes de código dependendo de qual valor ela é igual. Esta é exatamente a serventia da declaração switch.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "var <b>CONT = 0;<b><br> <b>CONT++; </b>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
          "sintaxe": "<b>+</b>-Adição<br> <b>-</b>-Subtração<br> <b>*</b>-Multiplicação <br> <b>/</b>-Divisão<br> <b>\%</b>-Retorna o resto da divisão.<br> <b>** </b>-Exponencial<br> <b>abs </b>-Resulta o valor absoluto.<br> <b>sqrt </b>-Resulta na raiz quadrada.<br> <b>acos</b>-Cosseno Inverso (arco cosseno)<br> <b>acosh </b>-Cosseno Hiperbólico Inverso<br> <b>asin</b>-Seno Inverso (arco seno)<br> <b>asinh </b>-Resulta na raiz quadrada.<br> ...existem mais... Consulte <b>documentação oficial</b>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Integer</b> Números Inteiros<br> <b>String </b> Um ou mais caracteres <br> <b>Double </b> ou <b>Float</b> Ponto Flutuante<br> <b>Array </b> Vetor<br> <b>Boolean </b> Armazena True ou False<br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "const": {
          "titulo": "CONSTANTES",
          "subtitulo": "Define uma constante com os parametros, nome, valor e se <br>esta deve ser sensível a maiúsculas e minúsculas ",
          "sintaxe": "<b>define</b> \( nome, Valor,true\)",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "leitu": {
          "titulo": "LEITURA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "$variavel =<b>readline(\"Texto\");</b>",
          "exemplo": "$nome = <b>readline(\"Digite seu nome: \");</b><br> echo \"Olá, \".$nome.\". \";"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>echo</b> \"texto\";",
          "exemplo": " $str = \"texto\";<br> <b>echo</b> $str; <br>"
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "variável <b>=</b>  valor",
          "exemplo": "$a <b>=</b> 4; print \"$a\n\";"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "elseif, como o nome sugere, é uma combinação do if e else. Como o else, estende um if para executar instruções diferentes no caso da expressão if original ser avaliada como FALSE. Entretanto, diferentemente do else, executará uma expressão alternativa somente se a expressão condicional do elseif for avaliada como TRUE. Por exemplo, o código a seguir exibirá a is bigger than b, a equal to b ou a is smaller than b:",
          "sintaxe": "<p class='md-body-1'> if (Condição) <br> { <blockquote> Instruções; </blockquote> } <br> elseif (Condição) <br> { <blockquote> Instruções; </blockquote> } <br> else <br> { <blockquote> Instruções; </blockquote> } </p>",
          "exemplo": "< ? php <br> <b>if ($a > $b) {<br> echo ‘a is bigger than b’;<br> } elseif ($a == $b) {<br> echo ‘a is equal to b’;<br> } else {<br> echo ‘a is smaller than b’;<br> }</b><br> ? >"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "A declaração switch é similar a uma série de declarações IF na mesma expressão. Em muitos casos, se deseja comparar as mesmas variáveis (ou expressões), com diferentes valores, e executar pedaços diferentes de código dependendo de qual valor ela é igual. Esta é exatamente a serventia da declaração switch.",
          "sintaxe": "<b>switch ( $numero )</b>{<br> case 1:<br> $mensagem = 'uma bicicleta';<br> break;<br> case 2:<br> $mensagem = 'uma casa';<br> break;<br> default:<br> $mensagem = 'nada, infelizmente';<br> }<br>",
          "exemplo": "< ? php<br> <b>switch ($i) {<br> case 0:<br> echo \"i equals 0\";<br> break;<br> case 1:<br> echo \"i equals 1\";<br> break;<br> case 2:<br> echo \"i equals 2\";<br> break;<br> }</b><br> ? ><br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>$CONT = 1;</b> <b>$CONT++; </b>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
          "sintaxe": "<b>+</b>Adição<br> <b>-</b>Subtração<br> <b>* </b> Multiplicação <br> <b>/</b>Divisão<br> <b>** </b>-Exponencial<br> <b>%</b>-Retorna o resto da divisão.<br> <b>//</b>-Resulta o módulo da divisão .<br> <b>Math.fabs </b>-Resulta o valor absoluto.<br> <b>Math.sqrt(numero) </b>-Retorna a raíz quadrada do número.<br> <b>Math.pi </b>-Não é bem uma função, está mais para uma constante com o número pi<br> <b>Math.cos(numero) </b>-Retorna o cosseno do número em radiano.<br> <b>Math.tan(numero) </b>-Retorna a tangente do número em radiano.<br> <b>Math.radians(numero) </b>-Converte o angulo ‘numero’ de graus para radiano.<br> <b>math.hypot(x, y) </b>-Retorna a hipotenusa dos números (catetos) fornecidos.<br>",
          "exemplo": "import math<br> print(10+10)<br> print(10-10)<br> print( 2*32)<br> print(10/5)<br> print( 2**32)<br> print(10%6)<br> print(10//6)<br> print(math.fabs(1.001)) <br> print(math.sqrt(10)) <br> print(math.pi) <br> print(math.cos(1.001)) <br> print(math.tan(10,125)) <br> print(math.radians(10)) <br> print(Math.hypot(v1, v2)) <br>"
        },
        "tipDados": {
          "titulo": "TIPOS DE DADOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>Int</b> Números Inteiros<br> <b>Str </b> Um ou mais caracteres <br> <b>Float</b> Ponto Flutuante (real)<br> <b>Bool </b> armazena True ou False<br> <b>List </b> para agrupar um conjunto de elementos<br> <b>Tupla </b> semelhante ao tipo list, porém, imutável<br> <b>Dic </b>para agrupar elementos que serão recuperados por uma chave<br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
          "sintaxe": "<b>input()</b>",
          "exemplo": "#coding: utf-8<br> num = <b>input(\"Digite um número:\")</b><br> print(num)<br>"
        },
        "escri": {
          "titulo": "ESCRITA",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>print()</b> # Escrever uma saída na tela <br>",
          "exemplo": "<b>print(\"Essa linha será impressa na tela\")</b>"          
        },
        "atrib": {
          "titulo": "ATRIBUIÇÃO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "variável <b>=</b>  valor",
          "exemplo": "#coding: utf-8<br> num <b>=</b> 10<br> txt <b>=</b> \"texto\"<br>"
        },
        "comen": {
          "titulo": "COMENTÁRIOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "opLog": {
          "titulo": "OPERADORES LÓGICOS",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "condi": {
          "titulo": "CONDICIONAL 'SE / SENÃO'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.<br><br><b>Obs:</b> Esta linguagem abre e fecha os blocos atraves da <br>indentação (recuo no codigo)",
          "sintaxe": "<p class='md-body-1'> if (Condição): <blockquote>Instruções</blockquote> else: <blockquote>Instruções</blockquote> </p>",
          "exemplo": "idade = 18<br> <b>if idade < 20:<br> <blockquote> print(‘Você já tem mais de 20 anos!’) </blockquote></b>"
        },
        "escol": {
          "titulo": "ESCOLHA/CASO",
          "subtitulo": "A declaração switch é similar a uma série de declarações IF na mesma expressão. Em muitos casos, se deseja comparar as mesmas variáveis (ou expressões), com diferentes valores, e executar pedaços diferentes de código dependendo de qual valor ela é igual. Esta é exatamente a serventia da declaração switch.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "conta": {
          "titulo": "CONTADORES",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "<b>CONT=0</b> <br> <b>CONT</b>= <b>CONT+1</b> <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "refor": {
          "titulo": "LAÇO 'FOR'",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reIni": {
          "titulo": "TESTE NO INÍCIO",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
        },
        "reFim": {
          "titulo": "TESTE NO FINAL",
          "subtitulo": "Se condição verdadeira faça algo, se não faça outra coisa.",
          "sintaxe": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>",
          "exemplo": "If (Condição) Then <br> Begin <blockquote> Instruções; </blockquote> End <br> Else <br> Begin <blockquote> Instruções; </blockquote> End; <br>"
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
