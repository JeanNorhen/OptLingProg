<?php
include_once('phpmailer.php'); //Chama o arquivo phpmailer.php com as funções para realizar o envio.
//#########################################
// Recebe as informações do formulário
//#########################################
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

//#########################################
// Dados da conta de e-mail que fará o envio
//#########################################
$smtp = new Smtp("localhost"); //Endereço do SMTP, geralmente localhost.
$smtp->user = "contato@igm.srv.br";  //Conta de email
$smtp->pass = "102030ok"; //Senha da Conta de e-mail.
$smtp->debug = true; //Somente para usuários avançados que desejam o log do envio para testes.


/* CORPO DO E-MAIL */
$body .= "  O usuario: $nome, fez uma simulação: ";
$body .= "  no dia  ".date(" d/m/Y");
$body .= "  Nome: $nome    ";
$body .= "  E-mail: $email    ";
$body .= "  Telefone: $telefone    ";



//#########################################
// Envio do formulário
//#########################################
$to = "igm@igmfinanciamentos.com.br"; //Informe aqui o e-mail que deve receber a mensagem do formulário.
$from = $email;
$subject = "Contato - " . $nome;

if (isset($_POST['email'])) {
    echo "entrou para enviar ";
    if($smtp->Send($to, $from, $subject, $body)){
        echo "<script>alert('Contato enviado!');</script>";
        echo "<script>window.location = 'index.html';</script>"; //Altere aqui para o endereço de sua página.
        //echo $smtp->debug;
    exit;
    }

}
?>
