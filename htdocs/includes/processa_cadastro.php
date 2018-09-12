<?php
    include_once ("conexao.php");

    $nome = $_POST['inputNome'];
    $usuario = $_POST['inputUsuario'];
    $email = $_POST['inputEmail'];
    $senha = md5($_POST['inputSenha']);
    $data = $_POST['inputData'];
    $dataAtual = date('Y-m-d');
    $exist = false;

//VERIFICA EMAIL
    $verificaEmail = "SELECT email FROM usuarios;";
    $arrayEmail = select($verificaEmail);
    $inserir = 1;

    foreach ($arrayEmail as $cont){
        if ($cont['email'] == $email){
            $status = "danger";
            $msg = "E-mail já em uso";
            $inserir = 0;
            header("location:../cadastro.php?msg=$msg & status=$status");
        }
        else {
            $inserir = 1;
        }
    }

//VERIFICA USUARIO
    $verificaUsuario = "SELECT nome_usu FROM usuarios;";
    $arrayUsuario = select($verificaUsuario);

    foreach ($arrayUsuario as $cont){
        if ($cont['nome_usu'] == $usuario){
            $msg = "Usuário já em uso";
            $status = "danger";
            $inserir = 0;
            header("location:../cadastro.php?msg=$msg & status=$status");
    }
        else {
            $inserir = 1;
    }
}

        if ($inserir == 1){
            $cadastrarUsuario = "INSERT INTO usuarios (nome, nome_usu, email, data_nasc, senha, data_cadastro) VALUES ('$nome', '$usuario', '$email', '$data', '$senha', '$dataAtual')";
            echo $cadastrarUsuario;
            $resultado = php_insert($cadastrarUsuario);

            if ($resultado) {
                $msg = "Cadastro efetuado com sucesso";
                $status = "success";
                header("location:../index.php?msg=$msg & status=$status");
            } else {
                $msg = "Erro ao cadastrar no servidor, tente mais tarde";
                $status = "danger";
                header("location:cadastro.php?=$msg & status=$status");
            }
        }
?>