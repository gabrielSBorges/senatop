<?php
    include_once ("conexao.php");

    $email = $_POST['inputEmail'];
    $senha = md5($_POST['inputSenha']);

    $verificaDados = "SELECT * FROM usuarios WHERE email = '$email' AND senha ='$senha';";
    $consulta = select($verificaDados);

    if($consulta != 0){
    session_start();
    $_SESSION['nome'] = $consulta[0]['nome'];
    $_SESSION['usuario'] = $consulta[0]['nome_usu'];
    $_SESSION['email'] = $email;
    header('location:../home.php');
    }
else{
    unset ($_SESSION['login']);
    unset ($_SESSION['senha']);
    $msg = "E-email ou senha incorretos";
    $status = "danger";
    header("location:../index.php?msg=$msg & status=$status");
}
?>
