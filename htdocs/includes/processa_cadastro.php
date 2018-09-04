<?php
    include_once ("conexao.php");

    $nome = $_POST['inputNome'];
    $email = $_POST['inputEmail'];
    $senha = md5($_POST['inputSenha']);
    $data = $_POST['inputData'];
    $dataAtual = date('Y-m-d');
    $exist = false;

    $arrayEmail = select("SELECT email FROM usuarios;");
    foreach ($arrayEmail as $cont){
        if ($email == $cont['email']){
            echo "email em uso";
            $exist = true;
        }
    }

    //VALIDAÇÃO
    if ($nome == ""){
        $msg = "Por favor digite seu nome";
        header("location:../index.php?=$msg");
    }
    else if($email == ""){
        $msg = "Por favor digite seu E-mail";
        header("location:../index.php?=$msg");
    }
    else if($senha == ""){
        $msg = "Por favor digite sua senha";
        header("location:../index.php?=$msg");
    }
    else if($data == ""){
        $msg = "Por favor digite a data de nascimento";
        header("location:../index.php?=$msg");
    }

    else {
        if ($exist == false){
            $cadastrarUsuario = "INSERT INTO usuarios (nome, email, data_nasc, senha, data_cadastro) VALUES ('$nome', '$email', '$data', '$senha', '$dataAtual')";

            $resultado = php_insert($cadastrarUsuario);

        if ($resultado) {
            $msg = "Cadastro efetuado com sucesso";
            $status = "success";
            header("location:../index.php?=$msg");
        } else {
            $msg = "Erro ao cadastrar";
            $status = "danger";header("location:cadastro.php?=$msg");
        }
    }
}
?>