<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/signin.css"/>
    <link rel="stylesheet" href="css/style.css">
    <meta charset="UTF-8">
    <title>DASH</title>
    <script src="js/bootstrap.js"></script>
    <script src="js/script.js"></script>
</head>
<body>
<?php
include_once ("includes/conexao.php");

?>
<br>
<?php
if(isset($_GET['msg'])){ ?>
    <div class="text-center alerta-<?php echo $_GET['status'] ?>" role="alert">
        <?php echo $_GET['msg'];?>
    </div>
<?php } ?>
<div class="caixa text-center container col-3">
    <form name="frmCadastro" id="frmCadastro" onsubmit="return validaForm(this);" method="post" action="includes/processa_cadastro.php">
        <h1 class="display-4">Cadastre-se</h1>
        <div class="form-group">
            <input required type="email" class="form-control" maxlength="80" name="inputEmail" id="inputEmail" placeholder="E-mail">
        </div>
        <div class="form-group">
            <input required type="text" class="form-control" maxlength="40" name="inputNome" id="inputNome" placeholder="Nome">
        </div>
        <div class="form-group">
            <input required type="date" class="form-control" name="inputData" id="inputData" placeholder="Idade"max="2018-12-31">
        </div>
        <div class="form-group">
            <input required type="name" class="form-control" maxlength="14" name="inputUsuario" id="inputUsuario" placeholder="Usuário">
        </div>
        <div class="form-group">
            <input required type="password" class="form-control" maxlength="32" name="inputSenha" id="inputSenha" placeholder="Senha">
        </div>
        <button required type="submit" id="btnCadastrar" name="btnCadastrar" class=" btn-block btn btn-primary">Confirmar</button>
    </form>
    <div class="text-center container">
        <a href="index.php" class="m-2 badge badge-success">Já possuo uma conta</a>
    </div>
</div>



<script src="js/bootstrap.js"></script>
</body>
</html>