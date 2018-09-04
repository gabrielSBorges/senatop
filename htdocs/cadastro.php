<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/signin.css"/>
    <link rel="stylesheet" href="css/style.css">
    <meta charset="UTF-8">
    <title>DASH</title>
    <script src="js/bootstrap.js"></script>
</head>
<body>
<?php
include_once ("includes/conexao.php");

?>
<br>
<div class="caixa text-center container col-3">
    <form method="post" action="includes/processa_cadastro.php">
        <h1 class="display-4">Cadastre-se</h1>
        <div class="form-group">
            <input type="email" class="form-control" name="inputEmail" id="inputEmail" placeholder="E-mail">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" name="inputNome" id="inputNome" placeholder="Nome">
        </div>
        <div class="form-group">
            <input type="date" class="form-control" name="inputData" id="inputData" placeholder="Idade">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" name="inputSenha" id="inputSenha" placeholder="Senha">
        </div>
        <button type="submit" id="btnCadastrar" name="btnCadastrar" class=" btn-block btn btn-primary">Confirmar</button>
    </form>
    <div class="text-center container">
        <a href="index.php" class="m-2 badge badge-success">Já possuo uma conta</a>
    </div>
</div>



<script src="js/bootstrap.js"></script>
</body>
</html>