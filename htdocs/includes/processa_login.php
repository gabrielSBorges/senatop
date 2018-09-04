<?php
    include_once ("conexao.php");

    $email = $_POST['inputEmail'];
    $senha = md5($_POST['inputSenha']);

    if ($email === ""){

    }else if ($senha === ""){

    }
    else{

    }

    $verificaDados = "SELECT * FROM usuarios WHERE email = '$email' AND senha ='$senha';";
    $consulta = select($verificaDados);

    if($consulta != 0){
    session_start();
    $_SESSION['nome'] = $consulta[0]['nome'];
    $_SESSION['email'] = $email;
    $_SESSION['senha'] = $senha;
    header('location:../home.php');
    }
else{
    unset ($_SESSION['login']);
    unset ($_SESSION['senha']);
    header('location:../index.php');
}
?>
